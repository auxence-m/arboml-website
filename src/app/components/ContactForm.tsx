"use client";

import {Button, Field, Fieldset, Input, Label, Textarea} from "@headlessui/react";
import {CircleAlert, LoaderCircle} from "lucide-react";
import {FormState, submitForm} from "@/app/actions";
import {useActionState} from "react";
import ContactErrorBanner from "@/app/components/ContactErrorBanner";

const prevState: FormState = {
    message: "",
    errors: {},
    submissionId: Date.now(),
}


export default function ContactForm() {
    const [state, submitAction, pending] = useActionState(submitForm, prevState)


    return (
        <div className="bg-green-50 mx-auto px-4 py-20 sm:py-24">
            <div className="mx-auto text-center max-w-2xl lg:max-w-7xl">
                <h3 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    Envoyer nous un message
                </h3>
            </div>
            <form action={submitAction} className="mx-auto py-12 max-w-2xl sm:py-10 sm:mt-8">
                <Fieldset className="space-y-8 rounded-xl">
                    <Field>
                        <Label htmlFor="name" className="text-lg/6 font-semibold text-gray-900">Nom et Prénom*</Label>
                        <Input required
                               id="name"
                               name="name"
                               type="text"
                               placeholder="Nom complet"
                               defaultValue={state.data?.get("name")?.toString() || ""}
                               className="block w-full rounded-lg bg-green-50 mt-2 h-14 px-3.5 py-2 text-base text-stone-700 outline-1 -outline-offset-1 outline-text-gray-900 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 focus:shadow-lg"/>
                        {
                            state.errors?.name?.map((error, index) => (
                                <div key={index} className="mt-2 flex space-x-2 text-red-900 items-center">
                                    <CircleAlert size={20} strokeWidth={2}/>
                                    <p className="text-base">{error}</p>
                                </div>
                            ))
                        }
                    </Field>
                    <Field>
                        <Label htmlFor="email" className="text-lg/6 font-semibold text-gray-900">Courriel*</Label>
                        <Input required
                               id="email"
                               name="email"
                               type="email"
                               placeholder="Adresse courriel"
                               autoComplete="email"
                               defaultValue={state.data?.get("email")?.toString() || ""}
                               className="block w-full rounded-lg bg-green-50 mt-2 h-14 px-3.5 py-2 text-base text-stone-700 outline-1 -outline-offset-1 outline-text-gray-900 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 focus:shadow-lg"/>
                        {
                            state.errors?.email?.map((error, index) => (
                                <div key={index} className="mt-2 flex space-x-2 text-red-900 items-center">
                                    <CircleAlert size={20} strokeWidth={2}/>
                                    <p className="text-base">{error}</p>
                                </div>
                            ))
                        }
                    </Field>
                    <Field>
                        <Label htmlFor="phone" className="text-lg/6 font-semibold text-gray-900">Numero de téléphone*</Label>
                        <Input required
                               id="phone"
                               name="phone"
                               type="tel"
                               placeholder="Numero de téléphone"
                               autoComplete="tel"
                               defaultValue={state.data?.get("phone")?.toString() || ""}
                               className="block w-full rounded-lg bg-green-50 mt-2 h-14 px-3.5 py-2 text-base text-stone-700 outline-1 -outline-offset-1 outline-text-gray-900 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 focus:shadow-lg"/>
                        {
                            state.errors?.phone?.map((error, index) => (
                                <div key={index} className="mt-2 flex space-x-2 text-red-900 items-center">
                                    <CircleAlert size={20} strokeWidth={2}/>
                                    <p className="text-base">{error}</p>
                                </div>
                            ))
                        }
                    </Field>
                    <Field>
                        <Label htmlFor="message" className="text-lg/6 font-semibold text-gray-900">Message*</Label>
                        <Textarea required
                                  rows={6}
                                  id="message"
                                  name="message"
                                  placeholder="Parlez-nous des travaux"
                                  defaultValue={state.data?.get("message")?.toString() || ""}
                                  className="block w-full rounded-lg bg-green-50 mt-2 px-3.5 py-2 text-base text-stone-700 outline-1 -outline-offset-1 outline-text-gray-900 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 whitespace-pre-line focus:shadow-lg"/>
                        {
                            state.errors?.message?.map((error, index) => (
                                <div key={index} className="mt-2 flex space-x-2 text-red-900 items-center">
                                    <CircleAlert size={20} strokeWidth={2}/>
                                    <p className="text-base">{error}</p>
                                </div>
                            ))
                        }
                    </Field>
                </Fieldset>
                <div className="mt-10">
                    <Button type="submit" disabled={pending} className="block w-full rounded-lg border-2 border-gray-700 bg-green-600  px-3.5 py-2.5 h-12 text-center text-lg font-semibold text-gray-900 showdow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 cursor-pointer disabled:bg-green-500 transition-colors">
                        {
                            pending ?
                                <div className="flex items-center justify-center space-x-2">
                                    <LoaderCircle size={22} strokeWidth={2} className="animate-spin"/>
                                    <p>Envoi en cours...</p>
                                </div> :
                                <div>
                                    Envoyer <span aria-hidden="true">&rarr;</span>
                                </div>
                        }
                    </Button>
                </div>
            </form>
            {/*error banner */}
            {
                state.message !== "" && <ContactErrorBanner key={state.submissionId}/>
            }
        </div>
    );
}