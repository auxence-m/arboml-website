"use server";

import {z} from "zod";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {ContactFormState, formatPhoneNumber, formatServices, formatSubmittedAt, readContactFormFields, services, splitFullName} from "@/lib/utils";
import {Resend} from "resend";

const formSchema = z.object({
    fullName: z.string().trim().min(1, {error: "Ce champ est requis"})
        .min(3, {error: "Veuillez saisir un nom valide (3 caractère minimum)"}),

    email: z.string().trim().min(1, {error: "Ce champ est requis"})
        .pipe(z.email({pattern: z.regexes.rfc5322Email, error: "Veuillez saisir une adresse courriel valide (ex: nom@exemple.com)"})),

    phoneNumber: z.string().trim().min(1, {error: "Ce champ est requis"})
        .regex(/^(?:\+?1[ .-]?)?(?:\(\d{3}\)|\d{3})[ .-]?\d{3}[ .-]?\d{4}$/, {error: "Veuillez saisir un numéro de téléphone valide"}),

    municipality: z.string().trim().min(1, {error: "Ce champ est requis"})
        .min(3, {error: "Veuillez saisir un une municipalité valide (3 caractère minimum)"}),

    services: z.array(z.enum(services.map(({ name }) => name), {error: "Veuillez choisir un service parmi les options proposées."}))
        .min(1, {error: "Veuillez sélectionner au moins un service."}),

    description: z.string({error: "Ce champ est requis"}).trim().min(1, {error: "Ce champ est requis"})
        .min(15, {error: "Veuillez ajoutez quelques détails à votre demande (15 caractère minimum)"})
        .max(2000, "Veuillez limitez votre message à 2000 caractères."),

    consent: z.literal("accept", {error: "Veuillez accepter d’être contacté(e) pour envoyer votre demande."}),

    submittedAt: z.iso.datetime(),
});

export async function submitForm(previousState: ContactFormState, formData: FormData):Promise<ContactFormState> {
    const validatedFields= formSchema.safeParse(readContactFormFields(formData));

    if (!validatedFields.success) {
        return { errors: z.flattenError(validatedFields.error).fieldErrors };
    }

    const submissionId = z.uuidv4().safeParse(formData.get("submissionId"));
    if (!submissionId.success) {
        return {
            errors: {},
            formError: "Une erreur s'est produite, rechargez la page, puis réessayez",
        };
    }

    // Only runs after validation passed.
    const selectedServices = services
        .filter(({ name }) => validatedFields.data.services.includes(name))
        .map(({ value }) => value);

    const payload = {
        ...validatedFields.data,
        services: selectedServices,
    };

    // console.log(payload);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        throw new Error("Missing contact email configuration.");
    }

    try {
        const resend = new Resend(apiKey);

        const {display, dial} = formatPhoneNumber(payload.phoneNumber);
        const {firstName} = splitFullName(payload.fullName)

        const { error } = await resend.batch.send(
            [
                {
                    from: "ARBOML <soumissions@notification.arboml.ca>",
                    to: "auxencemedja@gmail.com",
                    template: {
                        id: "estimate-request",
                        variables: {
                            FULL_NAME: payload.fullName,
                            EMAIL_ADDRESS: payload.email,
                            MESSAGE: payload.description,
                            MESSAGE_LENGTH: payload.description.length,
                            MUNICIPALITY: payload.municipality,
                            PHONE_DIAL: dial,
                            PHONE_NUMBER: display,
                            SERVICES: formatServices(payload.services),
                            SUBMITTED_AT: formatSubmittedAt(new Date(payload.submittedAt)),
                        }
                    }
                },
                {
                    from: "ARBOML <soumissions@notification.arboml.ca>",
                    to: payload.email,
                    template: {
                        id: "client-confirmation",
                        variables: {
                            CLIENT_FIRST_NAME: firstName,
                            FULL_NAME: payload.fullName,
                            EMAIL_ADDRESS: payload.email,
                            MESSAGE: payload.description,
                            MUNICIPALITY: payload.municipality,
                            PHONE_NUMBER: display,
                            SERVICES: formatServices(payload.services),
                        }
                    }
                }
            ],
            { idempotencyKey: `contact-form-${submissionId.data}`},
        );

        if (error) throw new Error(error.message);
    } catch (error) {
        console.error("Contact form email submission failed: ", error);

        return {
            errors: {},
            formError: "Nous n’avons pas pu confirmer l’envoi de votre demande. Veuillez réessayer",
        };
    }
    // Redirect to confirmation page
    // The confirmation page is only accessible through redirect from the contact page

    //set cookies to allow access to confirmation page
    const cookieStore = await cookies()
    cookieStore.set({
        name: "form-submitted",
        value: "true",
        path: "/",
        maxAge: 60,
        httpOnly: true
    });

    // redirect to confirmation page
    redirect("/confirmation")
}