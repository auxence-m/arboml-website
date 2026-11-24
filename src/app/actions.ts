"use server";

import {z} from "zod";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {services} from "@/lib/utils";

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

    consent: z.literal("accept", {error: "Veuillez accepter d’être contacté(e) pour envoyer votre demande."})
});

export type FormState = {
    errorMessage?: string;
    errors?: {
        fullName?: string[];
        email?: string[];
        phoneNumber?: string[];
        municipality?: string[];
        services?: string[];
        description?: string[];
        consent?: string[];
    };
};

export async function submitForm(prevState: FormState, formData: FormData):Promise<FormState> {
    const validatedFields= formSchema.safeParse({
        fullName: formData.get("fullName") ?? "",
        email: formData.get("email") ?? "",
        phoneNumber: formData.get("phoneNumber") ?? "",
        municipality: formData.get("municipality")?? "",
        services: formData.getAll("services"),
        description: formData.get("description") ?? "",
        consent: formData.get("consent") ?? ""
    });

    if (!validatedFields.success) {
        return { errors: z.flattenError(validatedFields.error).fieldErrors }
    }

    // Only runs after validation passed.
    const selectedServices = services
        .filter(({ name }) => validatedFields.data.services.includes(name))
        .map(({ value }) => value);

    const payload = {
        ...validatedFields.data,
        services: selectedServices,
    }

    console.log(payload);

    // // Call sendEmail Firebase cloud function
    // try {
    //     const response = await fetch("https://us-central1-arboml.cloudfunctions.net/sendEmail", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(payload),
    //     });
    //
    //     // Form is validated, only send success or error messages
    //     if (response.status !== 200) {
    //         console.error("Cloud function returned status: ", response.status);
    //         return { message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard" }
    //     }
    // } catch (error) {
    //     console.error("Cloud function returned status: ", error);
    //     return { message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard" }
    // }

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