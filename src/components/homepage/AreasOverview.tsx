import Link from "next/link";
import {ArrowRight, Compass, MapPin} from "lucide-react";

const areas = [
    "Boucherville",
    "Longueuil",
    "Brossard",
    "Sainte-Julie",
    "Varennes",
    "Candiac",
    "Saint-Bruno",
    "Beloeil",
    "Saint-Lambert",
];

export default function AreasOverview() {
    return (
        <section className="w-full border-t border-outline-variant/40 bg-surface-container-low/60 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-2 inline-flex items-center gap-2 text-xs leading-4 font-headline font-bold tracking-widest text-secondary uppercase">
                        <MapPin size={14} aria-hidden="true" className="shrink-0"/>
                        <span>Couvre-territoire &amp; déplacements</span>
                    </div>
                    <h2 className="mb-4 text-3xl lg:text-4xl font-headline leading-tight uppercase font-semibold tracking-tight text-primary">
                        Nous intervenons sur toutes la Rive-Sud de Montréal
                    </h2>
                    <p className="text-lg font-body leading-relaxed text-on-surface-variant">
                        Nous offrons nos services dans l’ensemble des municipalités de la Rive-Sud de Montréal sans aucuns frais de
                        déplacement additionnels.
                    </p>
                </div>

                <ul className="mx-auto mb-10 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {areas.map((area) => (
                        <li key={area} className="flex items-center gap-3 font-headline rounded border border-outline-variant/40 bg-surface-container-lowest px-6 py-3 shadow-sm transition-all duration-300 hover:border-secondary hover:shadow-md">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary-fixed/20">
                                <MapPin size={18} aria-hidden="true" className="text-secondary"/>
                            </div>
                            <span className="text-base leading-6 font-bold text-primary">
                              {area}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center">
                    <Link href="/services" className="inline-flex group items-center gap-2 bg-secondary-fixed px-6 py-4 text-center text-sm font-headline font-semibold tracking-wider text-on-secondary-fixed uppercase shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
                        <Compass size={18} aria-hidden="true" className="shrink-0"/>
                        <span>Consulter tous nos territoires desservis</span>
                        <ArrowRight size={18} aria-hidden="true" className="shrink-0 group-hover:translate-x-0.5 transition-transform duration-300"/>
                    </Link>
                </div>
            </div>
        </section>
    );
}
