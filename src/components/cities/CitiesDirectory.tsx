import Link from "next/link";
import { MapPin, CircleHelp, Mail, Phone } from "lucide-react";

const regions = [
    {
        id: "01",
        name: "Agglomération de Longueuil",
        cities: [
            "Boucherville",
            "Longueuil",
            "Saint-Hubert",
            "Greenfield Park",
            "Brossard",
            "Saint-Lambert",
            "Saint-Bruno-de-Montarville"
        ],
    },
    {
        id: "02",
        name: "MRC de Marguerite-D’Youville",
        cities: [
            "Calixa-Lavallée",
            "Sainte-Julie",
            "Saint-Amable",
            "Varennes",
            "Verchères"
        ],
    },
    {
        id: "03",
        name: "MRC de La Vallée-du-Richelieu",
        cities: [
            "Mont-Saint-Hilaire",
            "Saint-Marc-sur-Richelieu",
            "Saint-Mathieu-de-Belœil",
            "Otterburn Park",
        ],
    },
    {
        id: "04",
        name: "MRC de Roussillon",
        cities: [
            "Candiac",
            "Delson",
            "La Prairie",
            "Sainte-Catherine",
            "Saint-Constant",
            "Saint-Mathieu",
            "Saint-Philippe",
        ],
    },
    {
        id: "05",
        name: "MRC des Maskoutains",
        cities: [
            "Sainte-Madeleine",
            "Saint-Hyacinthe",
        ],
    },
];

export default function CitiesDirectory() {
    return (
        <section className="w-full bg-surface-container-low py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14">
                    <div className="mb-2 inline-flex items-center gap-2 font-headline text-xs font-bold uppercase tracking-widest text-secondary">
                        <MapPin size={16} aria-hidden="true" className="shrink-0" />
                        <span>Répertoire par pôle territorial</span>
                    </div>
                    <h2 className="font-headline text-3xl lg:text-4xl leading-tight font-bold uppercase tracking-tight text-primary-container">
                        Territoires &amp; Villes Régulièrement Desservis
                    </h2>
                </div>

                <div className="flex flex-col border-y divide-y divide-outline-variant/60 border-outline-variant/60">
                    {regions.map(({ id, name, cities }) => (
                        <div key={id} className="group gap-4 px-4 py-12 transition-colors duration-300 hover:bg-surface-container-high/30 flex flex-col md:flex-row md:items-baseline-last justify-between">
                            <div className="shrink-0 flex flex-col items-start md:w-5/12">
                                <span className="mb-1 block text-xs font-bold font-headline uppercase tracking-widest text-secondary">
                                    {id} / Secteur
                                </span>
                                <h3 className="text-2xl font-bold font-headline uppercase leading-snug tracking-tight text-primary-container transition-colors duration-300 group-hover:text-secondary">
                                    {name}
                                </h3>
                            </div>

                            <ul className="text-lg leading-relaxed text-primary-container font-body md:w-7/12">
                                {cities.map((city, index) => (
                                    <li key={city} className="inline">
                                        {index > 0 && (
                                            <span>
                                                {" "}
                                                <span aria-hidden="true">·</span>
                                                {" "}
                                            </span>
                                        )}
                                        <span className="font-semibold">{city}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 border-outline-variant border-l-4 border-l-secondary border px-4 py-6 flex items-start gap-3 sm:gap-6">
                    <div className="flex items-start gap-4 sm:gap-6">
                        <div className="size-10 md:size-12 rounded-full bg-secondary-fixed text-primary-container flex items-center justify-center shrink-0">
                            <CircleHelp size={24} aria-hidden="true" className="shrink-0 text-secondary"/>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-4 w-auto">
                        <div className="">
                            <h4 className="font-headline text-2xl text-primary-container font-bold tracking-tight mb-1">
                                Votre ville ne figure pas dans la liste ?
                            </h4>
                            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
                                Nous pouvons peut-être quand même vous aider! Contactez notre
                                équipe pour vérifier la faisabilité et obtenir votre estimation
                                gratuite.
                            </p>
                        </div>

                        <div className="flex items-center">
                            <Link href="/contact"
                                  className="inline-flex items-center justify-center gap-1 bg-primary-container text-on-primary font-headline text-sm font-bold px-6 py-4 uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-colors duration-300 text-center w-full md:w-auto shadow-sm">
                                <Mail aria-hidden="true" className="shrink-0" />
                                <span>Vérifier mon secteur</span>
                            </Link>
                            <a href="tel:5144428299"
                               className="hidden sm:inline-flex items-center justify-center gap-1 text-primary-container font-headline text-sm font-bold px-4 py-4 tracking-wide hover:text-secondary transition-colors duration-300">
                                <Phone size={18} aria-hidden="true" className="shrink-0 text-secondary" />
                                <span>(514) 442-8299</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}