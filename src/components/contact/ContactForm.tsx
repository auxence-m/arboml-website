"use client";

import {Button, Field, Fieldset, Input, Label, Textarea, Checkbox, Description, Legend, Listbox, ListboxButton, ListboxOptions, ListboxOption} from "@headlessui/react";
import {ArrowRight, Check, ChevronDown, ChevronRight, CircleAlert, LoaderCircle, LockKeyhole} from "lucide-react";
import {submitForm} from "@/app/actions";
import {useActionState, useRef, useState} from "react";
import ContactErrorBanner from "@/components/contact/ContactErrorBanner";
import {ContactFormState, readContactFormFields, services} from "@/lib/utils";

type TextFieldConfig = (typeof contactRows)[number][number];
type ServiceValue = (typeof services)[number]["name"];

const controlBase = "w-full min-w-0 bg-surface-container-low text-base font-body placeholder:text-outline transition-colors focus:bg-surface-container-lowest focus:outline-2";
const initialState: ContactFormState = { errors: {} }

const contactRows = [
    [
        { name: "fullName", label: "Nom complet", type: "text", autoComplete: "name", placeholder: "Jean-François Tremblay" },
        { name: "email", label: "Adresse courriel", type: "email", autoComplete: "email", placeholder: "nom@exemple.ca" },
    ],
    [
        { name: "phoneNumber", label: "Numéro de téléphone", type: "tel", autoComplete: "tel", placeholder: "(514) 000-0000" },
        { name: "municipality", label: "Ville / Municipalité", type: "text", autoComplete: "address-level2", placeholder: "ex. Longueuil, Boucherville..." },
    ],
] as const;


function controlClass(error: string | undefined) {
    return error
        ? controlBase + " border border-error text-error focus:outline-error"
        : controlBase + " text-on-surface focus:outline-primary";
}

function FieldLabel({ children }: { children: string }) {
    return (
        <Label className="text-sm font-semibold font-headline text-primary tracking-wide flex items-center gap-1">
            {children}
            <span aria-hidden="true" className="text-error">*</span>
        </Label>
    );
}

function FieldError({ message }: { message?: string }) {
    if (!message) return null;

    return (
        <Description className="mt-0.5 flex items-center gap-1 text-xs font-body text-error">
            <ChevronRight size={14} aria-hidden="true" className="shrink-0"/>
            {message}
        </Description>
    );
}

function TextField({ field, error }: { field: TextFieldConfig; error?: string }) {
    const { name, label, type, autoComplete, placeholder } = field;
    return (
        <Field className="flex min-w-0 flex-col gap-1">
            <FieldLabel>{label}</FieldLabel>
            <div className="relative">
                <Input required
                       name={name}
                       type={type}
                       placeholder={placeholder}
                       autoComplete={autoComplete}
                       invalid={Boolean(error)}
                       className={controlClass(error) + (error ? " py-2 pl-4 pr-10" : " px-4 py-2")}
                />
                {
                    error && <CircleAlert size={20} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-error" />
                }
            </div>
            <FieldError message={error} />
        </Field>
    );
}

function ErrorBanner({ count }: { count: number }) {
    if (!count) return null;

    return (
        <div role="alert" className="mb-6 flex items-start gap-2 border border-error bg-error-container p-4 text-on-error-container">
            <CircleAlert size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-error" />
            <div>
                <p className="font-semibold text-base font-headline text-error">Validation requise</p>
                <p className="mt-0.5 text-base font-body">
                    {count === 1
                        ? "Veuillez corriger le champ ci-dessous indiqué avant de transmettre votre demande."
                        : `Veuillez corriger les ${count} champs indiqués ci-dessous avant de transmettre votre demande.`}
                </p>
            </div>
        </div>
    );
}


export default function ContactForm() {
    const lastSubmission = useRef<{ snapshot: string; id: string; submittedAt: string; } | null>(null);

    const [state, submitAction, pending] = useActionState<ContactFormState, FormData>(
        (previousState, formData) => {
            const snapshot = JSON.stringify(readContactFormFields(formData));

            // Create an ID on the first submit or when the submitted values change.
            if (!lastSubmission.current || lastSubmission.current.snapshot !== snapshot) {
                lastSubmission.current = { snapshot, id: crypto.randomUUID(),  submittedAt: new Date().toISOString() };
            }

            formData.set("submissionId", lastSubmission.current.id);
            formData.set("submittedAt", lastSubmission.current.submittedAt);

            return submitForm(previousState, formData);
        },
        initialState
    );

    const [selected, setSelected] = useState<ServiceValue[]>([]);
    const labels = services
        .filter(({name}) => selected.includes(name))
        .map(({value}) => value);

    const errorCount = Object.keys(state.errors ?? {}).length;
    const serviceError = state.errors?.services?.[0];
    const descriptionError = state.errors?.description?.[0];
    const consentError = state.errors?.consent?.[0];

    return (
        <div className="bg-surface-container-lowest p-6 shadow-md md:p-12">
            <div className="mb-6">
                <span className="text-xs font-semibold font-headline uppercase tracking-wider text-secondary">
                    Service Clients &amp; Estimation
                </span>
                <h2 className="my-1 text-4xl font-semibold leading-[1.15] tracking-tight text-primary">
                    Formulaire de contact &amp; demande de devis
                </h2>
                <p className="text-base font-body text-on-surface-variant">
                    Remplissez ce formulaire pour planifier une visite d’évaluation ou nous poser vos questions d’arboriculture.
                </p>
            </div>

            <ErrorBanner count={errorCount} />

            <form noValidate action={submitAction} onReset={(event) => event.preventDefault()} className="space-y-6">
                <Fieldset className="min-w-0">
                    <Legend className="sr-only">Vos coordonnées</Legend>
                    <div className="space-y-6">
                        {contactRows.map((row, index) => (
                            <div key={row[index].name} className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {row.map((field) => (
                                    <TextField key={field.name} field={field} error={state.errors?.[field.name]?.[0]} />
                                ))}
                            </div>
                        ))}
                    </div>
                </Fieldset>

                <Listbox value={selected} onChange={setSelected} multiple>
                    <Field className="flex min-w-0 flex-col gap-1">
                        <FieldLabel>Services demandés</FieldLabel>
                        <div className="relative">
                            <ListboxButton type="button" className={controlClass(serviceError) + " flex items-center justify-between gap-2 px-4 py-2 text-left"}>
                                <span>
                                    {labels.length ? labels.join(" · ") : "Sélectionnez un ou plusieurs services" }
                                </span>
                                <ChevronDown size={20} aria-hidden="true" className="shrink-0" />
                            </ListboxButton>
                            <ListboxOptions modal={false} className="absolute inset-x-0 top-full z-10 mt-1 overflow-y-auto border border-outline-variant bg-surface-container-lowest py-1 shadow-md focus:outline-2 focus:outline-primary">
                                {services.map((service) => (
                                    <ListboxOption key={service.name} value={service.name} className="group flex cursor-pointer items-center gap-2 px-4 py-2 text-base text-on-surface data-focus:bg-surface-container-low data-selected:font-semibold">
                                        <Check size={16} aria-hidden="true" className="invisible shrink-0 text-secondary group-data-selected:visible"/>
                                        {service.value}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </div>

                        {/* Repeated names let the action read every selection with formData.getAll("service"). */}
                        {selected.map((value) => (
                            <input key={value} type="hidden" name="services" value={value} />
                        ))}
                        <FieldError message={serviceError} />
                    </Field>
                </Listbox>

                <Field className="flex flex-col gap-1">
                    <FieldLabel>Description de votre projet ou question</FieldLabel>
                    <Textarea required
                              name="description"
                              rows={5}
                              placeholder="Vous pouver preciser la hauteur approximative de l'arbre, les contraintes d'accès (clôture, piscine), la proximité de fils électriques et tout détail utile..."
                              invalid={Boolean(descriptionError)}
                              className={controlClass(descriptionError) + " resize-y p-4  whitespace-pre-line"} />
                    <FieldError message={descriptionError} />
                </Field>

                <Field className="pt-1">
                    <div className="flex items-start gap-2">
                        <Checkbox name="consent"
                                  value="accept"
                                  aria-required="true"
                                  aria-invalid={Boolean(consentError)}
                                  className={`group mt-0.5 inline-flex size-4 shrink-0 items-center justify-center border bg-surface-container-low data-checked:bg-secondary ${consentError ? "border-error" : "border-outline"}`}
                        >
                            <Check size={14} aria-hidden="true" className="invisible text-on-secondary group-data-checked:visible" />
                        </Checkbox>
                        <Label className="text-xs font-body text-on-surface-variant">
                            J’accepte d’être contacté par l’équipe ArboML par courriel ou téléphone au sujet de ma demande d’estimation.{" "}
                            <span aria-hidden="true" className="text-error">*</span>
                        </Label>
                    </div>
                    {consentError && <div className="pl-6"><FieldError message={consentError} /></div>}
                </Field>


                <div className="pt-2">
                    <Button type="submit" disabled={pending} className="group flex w-full items-center justify-center gap-2 bg-secondary-fixed px-12 py-4 text-xl font-semibold font-headline uppercase text-on-secondary-fixed shadow-sm transition-all hover:bg-secondary disabled:opacity-75 cursor-pointer">
                        {pending ? (
                            <>
                                <LoaderCircle size={20} aria-hidden="true" className="shrink-0 animate-spin" />
                                Envoi en cours...
                            </>
                        ) : (
                            <>
                                Envoyer ma demande
                                <ArrowRight size={20} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1"/>
                            </>
                        )}
                    </Button>
                </div>

                <p className="flex items-center gap-1 pt-1 text-xs text-on-surface-variant">
                    <LockKeyhole size={16} aria-hidden="true" className="shrink-0" />
                    Vos informations restent strictement confidentielles. Aucune obligation d’achat.
                </p>


                {/*Honeypot field*/}
                <div className="hidden">
                    <label htmlFor="contact-website" className="font-semibold font-headline text-primary tracking-wide">Laissez ce champ vide.</label>
                    <input className="min-w-0 bg-surface-container-low text-base font-body ml-2"
                        id="contact-website"
                        name="contactWebsite"
                        type="text"
                        autoComplete="off"
                    />
                </div>
            </form>

            {
              !pending && state.formError && <ContactErrorBanner message={state.formError} />
            }

        </div>
    );
}