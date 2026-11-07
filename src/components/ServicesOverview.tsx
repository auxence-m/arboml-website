import Link from "next/link";
import {
    ArrowRight,
    Axe,
    Cable,
    Flower2,
    Scissors,
    ShieldCheck,
    Sprout,
    TreePine,
} from "lucide-react";

const services = [
    {
        title: "Abattage d’arbres",
        description: "Élimination contrôlée et sécuritaire d’arbres dangereux, dépérissants ou encombrants, même dans les espaces urbains les plus restreints.",
        icon: Axe
    },
    {
        title: "Élagage de précision",
        description: "Coupe sélective et raisonnée pour préserver la santé, sécuriser la structure et stimuler la vitalité naturelle de vos arbres matures.",
        icon: Scissors,
    },

    {
        title: "Taille esthétique",
        description: "Entretien méticuleux de vos haies de cèdres, arbustes et arbres d’ornement pour un port équilibré et une finition extérieure impeccable.",
        icon: Flower2,
    },
    {
        title: "Haubanage dynamique",
        description: "Consolidation structurale par câblage non invasif permettant de prévenir les ruptures de charpentières sans devoir abattre un arbre d’exception.",
        icon: Cable,
    },
    {
        title: "Plantation stratégique",
        description: "Sélection rigoureuse d’essences indigènes adaptées au climat québécois et au sol de votre lot, avec mise en terre aux standards horticoles.",
        icon: Sprout,
    },
    {
        title: "Diagnostic arboricole",
        description: "Évaluation phytosanitaire et mécanique complète de vos végétaux pour déceler champignons, chancres, pourritures internes et risques de chute.",
        icon: ShieldCheck,
    },
];

export default function ServicesOverview() {
    return (
        <section id="services" aria-labelledby="services-heading" className="w-full scroll-mt-20 bg-surface-container-lowest py-20 font-sans lg:py-28">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mb-16  border-b border-surface-container pb-8">
                    <div className="max-w-2xl">
                        <div className="mb-2 inline-flex items-center gap-2 text-xs font-headline font-bold tracking-widest text-secondary uppercase">
                            <TreePine size={14} aria-hidden="true" className="shrink-0"/>
                            <span>Prestations &amp; Savoir-faire</span>
                        </div>
                        <h2 className="font-headline text-[40px] leading-12 font-semibold tracking-tight text-primary">
                            Nos solutions d’arboriculture raisonnée
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {services.map(({title, description, icon: Icon}) => (
                        <article key={title} className="group flex flex-col sm:flex-row items-start justify-between gap-6 border border-surface-container bg-surface-bright p-6 lg:p-8 transition-colors duration-300 hover:border-secondary">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary text-secondary-fixed transition-colors duration-300 group-hover:bg-secondary group-hover:text-primary">
                                <Icon size={26} aria-hidden="true"/>
                            </div>
                            <div className="min-w-0">
                                <h3 className="mb-2 text-xl leading-7 font-headline font-semibold tracking-tight text-primary">
                                    {title}
                                </h3>
                                <p className="mb-4 font-body font-medium text-base leading-relaxed text-on-surface-variant">
                                    {description}
                                </p>
                                <Link href="/contact" aria-label={`Demander un devis — ${title}`} className="inline-flex items-center gap-1 text-sm leading-5 font-semibold font-headline tracking-wide text-secondary uppercase transition-colors duration-300 group-hover:text-primary">
                                    <span>Demander un devis</span>
                                    <ArrowRight size={16} aria-hidden="true"
                                        className="shrink-0 transition-transform group-hover:translate-x-1 duration-300"
                                    />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
