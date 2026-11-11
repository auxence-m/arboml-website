import { CircleHelp, Compass, BadgeDollarSign, Clock3, Wrench } from "lucide-react";

const questions = [
    {
        id: "faq-1",
        topic: "Intervenez-vous à l’extérieur de votre zone de service habituelle ?",
        answer: "Nous pouvons accepter certains projets à l’extérieur de notre territoire selon la distance, " +
            "l’ampleur des travaux et nos disponibilités. Contactez-nous pour discuter de votre projet.",
        icon: Compass,
    },
    {
        id: "faq-2",
        topic: "Y a-t-il des frais de déplacement pour venir évaluer mes arbres ?",
        answer: "Aucun frais de visite. Nos estimations sont entièrement gratuites et sans engagement. " +
            "Un élagueur qualifié inspecte vos arbres et vous remet un devis transparent avant toute intervention.",
        icon: BadgeDollarSign,
    },
    {
        id: "faq-3",
        topic: "Quels sont les délais pour une intervention dans mon secteur ?",
        answer: "Les délais varie selon la période de l’année, notre horaire et la nature des travaux. " +
            "Contactez-nous pour connaître nos prochaines disponibilités dans votre secteur, " +
            "autant pour l’évaluation que pour la réalisation des travaux.",
        icon: Clock3,
    },
    {
        id: "faq-4",
        topic: "Offrez-vous les mêmes services dans toutes les municipalités desservies ?",
        answer: "Nos principaux services sont offerts dans l’ensemble de notre territoire. " +
            "Pour les travaux nécessitant de l’équipement spécialisé, nous confirmons la faisabilité selon votre emplacement et l’accès à votre terrain.",
        icon: Wrench,
    },
];

export default function CitiesFAQ() {
    return (
        <section className="w-full bg-surface py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mb-14 max-w-3xl">
                    <div className="mb-1 inline-flex items-center gap-2 font-headline text-xs font-bold uppercase tracking-widest text-secondary">
                        <CircleHelp aria-hidden="true" className="h-4 w-4" />
                        <span>Clarté &amp; couverture géographique</span>
                    </div>
                    <h2 className="mb-4 text-3xl lg:text-4xl leading-tight font-headline font-bold uppercase tracking-tight text-primary-container">
                        Foire aux questions
                    </h2>
                    <p className="font-body text-lg text-on-surface-variant">
                        Tout ce qu&apos;il faut savoir sur nos secteurs d&apos;intervention,
                        délais de déplacement et adresses limitrophes.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {questions.map(({id, topic, answer, icon: Icon }) => (
                        <div key={id} className="flex flex-col justify-between border border-surface-dim bg-surface-container-low p-6 shadow-sm">
                            <div>
                                <div className="mb-1 flex items-start gap-2">
                                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-primary-container text-secondary-fixed">
                                        <Icon size={16} aria-hidden="true" className="shrink-0" />
                                    </span>
                                    <h3 className="font-headline text-xl font-bold leading-snug text-primary-container">
                                        {topic}
                                    </h3>
                                </div>
                                <p className="pl-9 font-body text-base leading-relaxed text-on-surface-variant">
                                    {answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
