"use client";

import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Minus, Plus} from "lucide-react";

const questions = [
    {
        id: "faq-1",
        topic: "Faut-il un permis pour abattra un arbre au Québec ?",
        answer: "Oui, dans plusieurs municipalités du Québec, un permis est requis avant d’abattre un arbre, particulièrement en zone résidentielle. " +
            "Les règlements varient selon la ville et tiennent compte de critères comme la taille, l’emplacement ou l’état de l’arbre. " +
            "Nous vous recommandons de vérifier auprès de votre municipalité.",
    },
    {
        id: "faq-2",
        topic: "Aidez-vous à planifier la replantation d’arbres ou après un abattage ?",
        answer: "Absolument. Nous pouvons vous aidez à planifier la replantation d'un arbre après un abattage. " +
            "Nous offrons des services professionnels de plantation d’arbres. Nous vous guidons vers les essences adaptées au climat montréalais " +
            "et à la nature de votre sol pour assurer la santé et l’esthétique de votre terrain.",
    },
    {
        id: "faq-3",
        topic: "Que faites-vous des branches et du bois coupé ?",
        answer: "Après les travaux, nous nous occupons du ramassage, du déchiquetage et de l’évacuation des branches et débris pour vous laissez un terrain propre. " +
            "Si vous le souhaitez, nous pouvons également laisser le bois sur place pour le chauffage ou l’emporter selon votre préférence.",
    },
    {
        id: "faq-4",
        topic: "Travaillez-vous en hiver ?",
        answer: "Oui, nous intervenons toute l’année, y compris en hiver, en utilisant l’équipement adapté pour assurer des travaux sécuritaires et efficaces.",
    },
]

export default function FAQuestions() {
    return (
        <section  className="w-full bg-surface py-16 lg:py-24">
            <div className="mx-auto max-w-4xl px-8">
                <div className="mb-14 text-center">
                    <span className="mb-2 block text-xs leading-4 font-bold font-headline tracking-widest text-secondary uppercase">
                        Clarté &amp; Conseils
                    </span>
                    <h2 className="mb-4 text-3xl lg:text-4xl leading-tight uppercase font-semibold font-headline tracking-tight text-primary">
                        Foire aux questions
                    </h2>
                    <p className="mx-auto max-w-2xl font-body text-lg leading-7 text-on-surface-variant">
                        Tout ce que vous devez savoir avant d’entreprendre des travaux
                        d’entretien arboricole sur votre terrain.
                    </p>
                </div>

                <div className="space-y-4">
                    {questions.map((question, index) => (
                        <Disclosure as="div" key={index} defaultOpen={index === 0} className="bg-surface-container-lowest p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                            {({open}) => (
                                <div>
                                    <DisclosureButton className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-headline text-xl leading-7 font-semibold tracking-tight text-primary">
                                        <span>{question.topic}</span>
                                        <span aria-hidden="true" className="relative h-6 w-6 shrink-0 text-secondary">
                                                <Plus size={24} className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}/>
                                                <Minus size={24} className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-100" : "opacity-0"}`}/>
                                            </span>
                                    </DisclosureButton>

                                    {/* Animate the actual layout height; Headless UI waits for exit transitions before hiding the closed panel. */}
                                    <DisclosurePanel transition unmount={false} className="grid grid-rows-[1fr] font-body opacity-100 transition-all duration-300 ease-in-out data-closed:grid-rows-[0fr] data-closed:opacity-0">
                                        <div className="min-h-0 overflow-hidden">
                                            <p className="pt-4 text-base leading-relaxed text-on-surface-variant">
                                                {question.answer}
                                            </p>
                                        </div>
                                    </DisclosurePanel>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </section>
    );
}

