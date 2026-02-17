import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

const questions = [
    {
        id: "faq-1",
        topic: "Faut-il un permis pour couper un arbre au Québec ?",
        answer: "Dans plusieurs municipalités du Québec, un permis est requis avant d’abattre un arbre, particulièrement en zone résidentielle. " +
            "Les règlements varient selon la ville et tiennent compte de critères comme la taille, l’emplacement ou l’état de l’arbre. " +
            "Nous vous recommandons de vérifier auprès de votre municipalité.",
    },
    {
        id: "faq-2",
        topic: "Pouvez-vous abattre un arbre près des fils électriques ou d’une structure ?",
        answer: "Nous ne sommes pas habilités à le faire. " +
            "Pour tout arbre situé près de fils électriques, l’intervention doit être effectuée par Hydro-Québec ou une équipe autorisée par celle-ci. " +
            "Nous vous recommandons de les contacter directement afin qu’ils évaluent la situation et procèdent de façon sécuritaire.",
    },
    {
        id: "faq-3",
        topic: "Aidez-vous à planifier la replantation d’arbres ou d'arbustes après un abattage ?",
        answer: "Oui, nous pouvons vous aidez à planifier la replantation après un abattage. " +
            "Nous offrons des services professionnels de plantation d’arbres et d’arbustes pour assurer la santé et l’esthétique de votre terrain.",
    },
    {
        id: "faq-4",
        topic: "Que faites-vous des branches et du bois coupé ?",
        answer: "Après les travaux, nous nous occupons du ramassage et de l’évacuation des branches et débris. " +
            "Si vous le souhaitez, nous pouvons également laisser le bois sur place pour le chauffage ou l’emporter selon votre préférence.",
    },
    {
        id: "faq-5",
        topic: "Travaillez-vous en hiver ?",
        answer: "Oui, nous intervenons toute l’année, y compris en hiver, en utilisant l’équipement adapté pour assurer des travaux sécuritaires et efficaces.",
    },
]

export default function Questions() {
    return (
        <div className="bg-green-50 py-20 sm:py-24">
            <div className="mx-auto max-w-2xl lg:max-w-7xl px-4">
                <h1 className="text-2xl font-semibold text-left md:text-center tracking-tight text-pretty text-green-900 sm:text-4xl">
                    Foire aux questions
                </h1>
                <div className="divide-y mt-6 divide-green-900">
                    {questions.map(question => (
                        <Disclosure key={question.id} as="div" className="py-4" defaultOpen={false}>
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="text-lg/8 font-semibold text-left text-green-900">
                                   {question.topic}
                                </span>
                                <PlusIcon className="size-6 text-green-900 group-data-open:hidden"></PlusIcon>
                                <MinusIcon className="size-6 text-green-900 not-group-data-open:hidden"></MinusIcon>
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 text-stone-700 text-lg/8">
                                {question.answer}
                            </DisclosurePanel>
                        </Disclosure>
                    ))}
                </div>
            </div>
        </div>
    );
}

