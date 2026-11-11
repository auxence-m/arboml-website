import Link from "next/link";
import { MapPin, TreePine, Mountain, Building2, Waves, CircleCheck, CircleHelp, Mail, Phone } from "lucide-react";

const regions = [
    {
        label: "MRC 01",
        name: "Agglomération de Longueuil",
        icon: Building2,
        cities: [
            "Boucherville",
            "Brossard",
            "Longueuil",
            "Saint-Bruno-de-Montarville",
            "Saint-Hubert",
            "Saint-Lambert",
            "Greenfield Park",
        ],
    },
    {
        label: "MRC 01",
        name: "Marguerite-D'Youville",
        icon: TreePine,
        cities: [
            "Sainte-Julie",
            "Saint-Amable",
            "Varennes",
            "Verchères"
        ],
    },
    {
        label: "MRC 02",
        name: "La Vallée-du-Richelieu",
        icon: Mountain,
        cities: [
            "Belœil",
            "Carignan",
            "Chambly",
            "McMasterville",
            "Mont-Saint-Hilaire",
            "Otterburn Park",
            "Saint-Basile-le-Grand",
            "Saint-Jean-sur-Richelieu",
        ],
    },
    {
        label: "MRC 04",
        name: "Roussillon",
        icon: Waves,
        cities: [
            "Candiac",
            "Châteauguay",
            "Delson",
            "La Prairie",
            "Sainte-Catherine",
            "Saint-Isidore",
            "Saint-Philippe",
            "Saint-Constant",
        ],
    },
];

export default function CitiesDirectory() {
    return (
        <section className="w-full bg-surface-container-low py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mb-14">
                    <div className="mb-2 inline-flex items-center gap-2 font-headline text-xs font-bold uppercase tracking-widest text-secondary">
                        <MapPin size={16} aria-hidden="true" className="shrink-0" />
                        <span>Répertoire par pôle territorial</span>
                    </div>
                    <h2 className="font-headline text-3xl lg:text-4xl leading-tight font-bold uppercase tracking-tight text-primary-container">
                        Territoires &amp; Villes Régulièrement Desservis
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {regions.map(({ label, name, icon: Icon, cities }) => (
                        <article key={name} className="border border-surface-dim bg-surface-container-lowest p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                            <div className="mb-6 flex items-center gap-2 border-b border-outline pb-2">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-secondary-fixed text-primary-container">
                                    <Icon size={18} aria-hidden="true" className="shrink-0" />
                                </div>
                                <div>
                                    <span className="block font-headline text-xs font-bold uppercase leading-none tracking-widest text-secondary">
                                        {label}
                                    </span>
                                    <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-primary-container">
                                        {name}
                                    </h3>
                                </div>
                            </div>
                            <ul className="mb-6 space-y-4">
                                {cities.map((city) => (
                                    <li key={city} className="flex items-center gap-1 border-b border-outline/50 pb-1.5 last:border-b-0">
                                        <CircleCheck size={18} aria-hidden="true" className="shrink-0 text-secondary"/>
                                        <span className="font-body text-base font-semibold text-primary-container">
                                            {city}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="mt-6 border-outline-variant border-l-4 border-l-secondary border p-6 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 sm:gap-6">
                        <div className="w-12 h-12 rounded-full bg-secondary-fixed text-primary-container flex items-center justify-center shrink-0">
                            <CircleHelp size={24} aria-hidden="true" className="shrink-0 text-secondary"
                            />
                        </div>
                        <div>
                            <h4 className="font-headline text-2xl text-primary-container font-bold tracking-tight mb-1">
                                Votre ville ne figure pas dans la liste ?
                            </h4>
                            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
                                Nous pouvons peut-être quand même vous aider! Contactez notre
                                équipe pour vérifier la faisabilité et obtenir votre estimation
                                sans engagement.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
                        <Link href="/contact"
                              className="inline-flex items-center justify-center gap-1 bg-primary-container text-on-primary font-headline text-sm font-bold px-6 py-4 uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-colors duration-300 text-center w-full md:w-auto shadow-sm">
                            <Mail aria-hidden="true" className="shrink-0" />
                            <span>Nous contacter</span>
                        </Link>
                        <a href="tel:5144428299"
                            className="hidden sm:inline-flex items-center justify-center gap-1 text-primary-container font-headline text-sm font-bold px-4 py-4 tracking-wide hover:text-secondary transition-colors duration-300">
                            <Phone size={18} aria-hidden="true" className="shrink-0 text-secondary" />
                            <span>(514) 442-8299</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}