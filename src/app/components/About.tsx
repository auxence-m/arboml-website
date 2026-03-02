import {CalendarDaysIcon, ShieldCheckIcon, CheckBadgeIcon, UserGroupIcon, AcademicCapIcon, SparklesIcon} from "@heroicons/react/24/outline";


const features = [
    {
        name: 'Service annuel local',
        description:
            'Service d’arboriste professionnel offert toute l’année à Boucherville et sur la Rive-Sud de Montréal, avec une disponibilité rapide et fiable.',
        icon: CalendarDaysIcon,
    },
    {
        name: 'Sécurité & assurance',
        description:
            'Assurance responsabilité complète. Travaux exécutés de manière sécuritaire, avec garantie en cas de dommages pour une tranquillité d’esprit totale.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Standards élevés',
        description:
            'Travaux réalisés selon les plus hauts standards de l’industrie par des professionnels qualifiés et diplômés, pour des résultats durables et soignés.',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Service attentionné',
        description:
            'Service professionnel et courtois, à l’écoute de vos besoins, avec un réel souci de la santé et de la longévité de vos arbres et arbustes.',
        icon: UserGroupIcon,
    },
    {
        name: 'Expertise à jour',
        description:
            'Formation continue afin de vous offrir en tout temps un service à la fine pointe des meilleures pratiques en arboriculture.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Chantier impeccable',
        description:
            'Nettoyage complet des lieux à la fin des travaux, pour vous laisser un terrain propre et impeccable.',
        icon: SparklesIcon,
    },
]

export default function About() {
    return (
        <div className="bg-green-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-2xl text-left md:text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-balance">
                        Pourquoi choisir ArboML ?
                    </h1>
                    <p className="mt-4 text-lg/8 text-gray-800">
                        Pour votre tranquillité et celle de vos voisins, nous utilisons principalement des outils électriques afin de réduire le bruit et la pollution.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl items-center lg:mt-20 lg:max-w-7xl">
                    <dl className="grid max-2w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-7xl lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-lg/8 font-semibold text-gray-900">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-green-200">
                                        <feature.icon aria-hidden="true" className="size-6 text-gray-900" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-lg/8 text-gray-800">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}