import {CalendarDays, ShieldCheck, BadgeCheck, SmileIcon, LucideGraduationCap, BrushCleaning, Zap} from "lucide-react";


const features = [
    {
        name: 'Service annuel local',
        label: "01 / Proximité",
        description:
            'Service d’arboriste professionnel offert toute l’année sur l’ensemble de la Rive-Sud de Montréal, avec une disponibilité rapide et fiable.',
        icon: CalendarDays,
    },
    {
        name: 'Sécurité & assurance',
        label: "02 / Protection",
        description:
            'Assurance responsabilité complète. Travaux exécutés de manière sécuritaire, avec garantie en cas de dommages pour une tranquillité d’esprit totale.',
        icon: ShieldCheck,
    },
    {
        name: 'Standards élevés',
        label: "03 / Rigueur",
        description:
            'Travaux réalisés par des professionnels qualifiés et diplômés respectant les plus hauts standards de l’industrie, pour assurer des résultats durables et soignés.',
        icon: BadgeCheck,
    },
    {
        name: 'Service attentionné',
        label: "04 / Écoute",
        description:
            'Service professionnel et courtois, à l’écoute de vos besoins, avec un réel souci de la santé et de la longévité de vos arbres.',
        icon: SmileIcon,
    },
    {
        name: 'Expertise à jour',
        label: "05 / Savoir",
        description:
            'Formation continue afin de vous offrir en tout temps un service à la fine pointe des meilleures pratiques en arboriculture.',
        icon: LucideGraduationCap,
    },
    {
        name: 'Chantier impeccable',
        label: "06 / Propreté",
        description:
            'Nettoyage complet des lieux à la fin des travaux, pour vous laisser un terrain propre et impeccable.',
        icon: BrushCleaning,
    },
]

export default function WhyArboML() {
    return (
        <section className="w-full bg-surface-container-low py-16 font-sans lg:py-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="font-headline mb-2 inline-flex items-center gap-2 text-xs leading-4 font-bold tracking-widest text-secondary uppercase">
                        <Zap size={14} aria-hidden="true" className="shrink-0" />
                        <span>Engagement environnemental &amp; voisinage</span>
                    </div>
                    <h2 className="mb-4 text-4xl leading-tight font-semibold tracking-tight text-primary">
                        Pourquoi faire confiance à ARBOML ?
                    </h2>
                    <p className="text-lg font-body leading-relaxed text-on-surface-variant">
                        Pour votre tranquillité et celle de vos voisins, nous  nous utilisons principalement des{" "}
                        <span className="font-semibold text-primary">outils électriques</span>{" "}
                        afin de réduire le bruit et la pollution. sur votre terrain.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <article key={feature.name} className="flex flex-col justify-between border border-outline-variant/40 bg-surface-container-lowest p-8 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md">
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-secondary-fixed">
                                    <feature.icon size={24} aria-hidden="true"/>
                                </div>
                                <span className="font-headline text-xs leading-4 font-bold tracking-widest text-secondary uppercase">
                                    {feature.label}
                                </span>
                            </div>
                            <h3 className="font-headline mb-2 text-xl leading-7 font-semibold tracking-tight text-primary">
                                {feature.name}
                            </h3>
                            <p className="font-body text-base leading-relaxed text-on-surface-variant">
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}