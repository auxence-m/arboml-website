import Link from "next/link";
import { Phone } from "lucide-react";

export default function GalleryCTA() {
    return (
        <section className="w-full overflow-hidden bg-primary-container text-on-primary py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <span className="mb-2 block text-xs font-bold font-headline tracking-widest text-secondary-fixed uppercase">
                        Rive-Sud de Montreal &amp; environs
                    </span>
                    <h2 className="uppercase tracking-tight font-bold mb-4 text-on-primary font-headline text-3xl lg:text-4xl leading-tight">
                        Vous avez un projet d&#39;arboriculture similaire en tête
                    </h2>
                    <p className="font-body text-lg text-surface-container-high max-w-2xl mb-6 leading-relaxed">
                        Estimation gratuite sans engagement, déplacement sans frais partout sur la Rive-Sud
                        de Montréal et intervention respectueuse de votre propriété et de vos arbres.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-secondary-fixed text-on-secondary-fixed font-headline text-sm font-bold uppercase tracking-wider hover:bg-secondary hover:text-on-primary transition-all duration-300">
                            Demander une évaluation gratuite
                        </Link>
                        <a href="tel:5144428299"
                           className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-4 text-surface-container-high text-sm font-semibold font-headline hover:text-secondary-fixed transition-colors duration-300">
                            <Phone size={18} aria-hidden="true" className="shrink-0 text-secondary-fixed"/>
                            <span className="">(514) 442-8299</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
