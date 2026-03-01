"use server"

import {z} from "zod";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

const formSchema = z.object({
    name: z.string({error: "Ce champ est requis"}).trim().min(1, {error: "Ce champ est requis"})
        .min(3, {error: "Veuillez saisir un nom valide (3 caractère minimum)"}),

    email: z.string({error: "Ce champ est requis"}).trim().min(1, {error: "Ce champ est requis"})
        .pipe(z.email({pattern: z.regexes.rfc5322Email, error: "Veuillez saisir une adresse courriel valide (ex: nom@exemple.com)"})),

    phone: z.string({error: "Ce champ est requis"}).trim().min(1, {error: "Ce champ est requis"})
        .regex(/^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, {error: "Veuillez saisir un numéro de téléphone valide"}),

    message: z.string({error: "Ce champ est requis"}).trim().min(1, {error: "Ce champ est requis"})
        .min(15, {error: "Veuillez saisir un message valide (15 caractère minimum)"})
});

export type FormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    };
    data?: FormData
    submissionId?: number
}

export async function submitForm(prevState: FormState, formData: FormData):Promise<FormState> {
    const validatedFields= formSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            message: "",
            errors: z.flattenError(validatedFields.error).fieldErrors,
            data: formData,
        }
    }

    // Call sendEmail firebase cloud function
    try {
        const response = await fetch("https://us-central1-arboml.cloudfunctions.net/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(validatedFields.data)
            body: JSON.stringify(validatedFields.data),
        });

        // Form is validated, only send success or error messages
        if (response.status !== 200) {
            return {
                message: "ERROR",
                data: formData,
                submissionId: Date.now()
            }
        }
    } catch (error) {
        console.error(error);
        return {
            message: "ERROR",
            data: formData,
            submissionId: Date.now()
        }
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