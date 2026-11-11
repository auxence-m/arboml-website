import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function CitiesCTA() {
    return (
        <section className="relative w-full overflow-hidden bg-primary-container text-on-primary py-16 lg:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-5">
                <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" focusable="false">
                    <path
                        d="M0,0 L100,100 M20,0 L100,80 M0,20 L80,100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={0.5}
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <span
                        className="mb-2 block text-xs font-bold font-headline tracking-widest text-secondary-fixed uppercase">
                            Estimation gratuite sans engagement
                    </span>
                    <h2 className="uppercase tracking-tight font-bold mb-4 text-on-primary font-headline text-3xl lg:text-4xl leading-tight">
                        Prêt à confier l&apos;entretien de vos arbres à des experts de votre
                        région ?
                    </h2>
                    <p className="font-body text-lg text-surface-container-high max-w-2xl mb-6 leading-relaxed">
                        Estimation gratuite, conseils d&apos;arboristes diplômés et
                        interventions respectueuses de votre terrain sur toute la Rive-Sud
                        de Montréal.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <Link href="/contact"
                              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-secondary-fixed text-on-secondary-fixed font-headline text-sm font-bold uppercase tracking-wider hover:bg-secondary hover:text-on-primary transition-all duration-300">
                            Obtenir mon évaluation gratuite
                        </Link>
                        <a href="tel:5144428299"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-4 text-surface-container-high text-sm font-semibold font-headline hover:text-secondary-fixed transition-colors duration-300">
                            <PhoneCall size={20} aria-hidden="true" className="shrink-0 text-secondary-fixed"/>
                            <span className="">(514) 442-8299</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
