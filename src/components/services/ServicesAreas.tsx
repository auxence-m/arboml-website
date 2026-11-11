import Link from "next/link";
import {ArrowRight, MapIcon} from "lucide-react";

const cities = [
    "Boucherville",
    "Longueuil",
    "Brossard",
    "Sainte-Julie",
    "Saint-Hubert",
    "Varennes",
    "Candiac",
    "Saint-Bruno",
    "Beloeil",
    "Chambly",
    "Saint-Amable",
    "La Prairie",
    "Saint-Lambert",
] ;

export default function ServicesAreas() {
    return (
        <section className="w-full bg-surface-container-lowest py-16 lg:py-24 border-b border-surface-container">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">
                    <div className="lg:col-span-8">
                        <div className="font-headline mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-secondary uppercase">
                            <MapIcon size={16} aria-hidden="true" className="shrink-0" />
                            <span>couvre-territoire &amp; déplacements</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl leading-tight font-semibold font-headline tracking-tight text-primary uppercase mb-4">
                            Intervention sur l&apos;ensemble de la Rive-Sud de Montréal
                        </h2>
                        <p className="text-lg font-body text-on-surface-variant leading-relaxed">
                            Nous pouvons nous rendre dans tous les secteur de la Rive-Sud.
                            Estimations gratuites et sans frais de déplacement pour tous vos projets arboricoles.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex justify-start lg:justify-end">
                        <Link href="/cities" className="inline-flex items-center text-center gap-1 bg-primary hover:bg-on-secondary-fixed-variant text-on-primary text-sm uppercase tracking-wider px-6 py-4 transition-all duration-300 group font-bold shadow-sm" >
                            <span>Consulter tous nos territoires</span>
                            <ArrowRight size={18} aria-hidden="true" className="text-secondary-fixed group-hover:translate-x-1 transition-transform shrink-0 duration-300" />
                        </Link>
                    </div>
                </div>
                <div className="pt-4 border-t border-surface-container ">
                    <p className="text-base text-on-surface-variant leading-relaxed">
                        <span className="inline whitespace-nowrap text-xs font-semibold font-headline text-secondary uppercase tracking-wider">Secteurs desservis : </span>
                        {cities.map((city) => (
                            <span key={city} className="inline-block whitespace-nowrap">
                                <span className="font-medium text-on-surface">{city}</span>
                                <span aria-hidden="true" className="text-secondary mx-1.5 font-bold font-body">·</span>
                            </span>
                        ))}
                        <span className="text-on-surface-variant font-body italic">et municipalités avoisinantes</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
