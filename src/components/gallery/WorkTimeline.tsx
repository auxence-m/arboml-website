import {ClipboardCheck, Headset, Route, Trees} from "lucide-react";

const TimelineSteps = [
    {
        id: "contact",
        number: "01",
        title: "Premier contact",
        icon: Headset,
        description: (
            <>
                Remplissez notre formulaire en ligne ou appelez-nous au
                {" "}
                <a href="tel:5144428299" className="text-primary font-semibold hover:text-secondary transition-colors duration-300">
                    (514) 442-8299
                </a>
                {". "}
                Décrivez-nous vos arbres et ce qui vous préoccupe afin que nous puissions cerner vos besoins et convenir d&apos;une visite.
            </>
        ),
    },
    {
        id: "estimate",
        number: "02",
        title: "Évaluation sur place & devis",
        icon: ClipboardCheck,
        description: "Sur place, nous examinons vos arbres, vérifions les accès et repérons les éléments à protéger. " +
            "Nous vous expliquons les travaux recommandés et vous remettons un devis détaillant les interventions et leur coût.",
    },
    {
        id: "work",
        number: "03",
        title: "Réalisation des travaux & nettoyage",
        icon: Trees,
        description: "Une fois le devis accepté, nous convenons d’une date avec vous. " +
            "Notre équipe certifiée sécurise la zone, réalise les travaux prévus et nettoie les lieux avant son départ.",
    },
] as const;

export default function WorkTimeline() {
    return (
        <section className="w-full border-t border-outline-variant/40 bg-surface-container-low py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-2 inline-flex items-center gap-2 text-xs font-headline font-bold tracking-widest text-secondary uppercase">
                        <Route  size={16} aria-hidden="true" className="shrink-0"/>
                        <span>Méthodologie • Du devis au chantier</span>
                    </div>
                    <h2 className="mb-4 text-3xl lg:text-4xl font-headline leading-tight uppercase font-semibold tracking-tight text-primary">
                        Comment nous intervenons : un processus simple en 3 étapes
                    </h2>
                    <p className="text-lg font-body leading-relaxed text-on-surface-variant">
                        Du premier contact au nettoyage final, notre équipe prend soin de vos arbres et de votre terrain sur la Rive-Sud.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {TimelineSteps.map(({id, number, title, icon:Icon, description}) => (
                        <div key={id} className="group relative flex flex-col border border-surface-container-highest/40 bg-surface-container-lowest p-6 shadow-sm transition-colors duration-300 hover:border-secondary">
                            <div className="mb-4 flex items-center justify-between">
                                <span aria-hidden="true" className="text-2xl font-bold font-headline text-secondary">
                                    {number}
                                </span>
                                <div className="flex size-10 items-center justify-center bg-surface-container-low text-primary transition-colors duration-300 group-hover:bg-secondary group-hover:text-on-secondary-fixed">
                                    <Icon size={24} aria-hidden="true" className="shrink-0"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold font-headline uppercase tracking-tight text-primary">
                                    {title}
                                </h3>
                                <p className="text-base font-body leading-relaxed text-on-surface-variant">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}