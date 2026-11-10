import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function EstimateCTA() {
    return (
        <section className="relative w-full overflow-hidden bg-primary py-16 font-sans text-on-primary lg:py-24">
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

            <div className="relative z-10 mx-auto max-w-7xl px-8">
                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                    <div className="max-w-2xl text-left">
                        <span className="mb-2 block text-xs leading-4 font-bold font-headline tracking-widest text-secondary-fixed uppercase">
                            Réponse rapide garantie
                        </span>
                        <h2 className="mb-4 text-4xl leading-tight font-semibold font-headline tracking-tight text-on-primary">
                            Obtenez votre estimation gratuite et sans engagement
                        </h2>
                        <p className="text-lg font-body leading-relaxed text-surface-container-high">
                            Discutez directement avec nous de vos projets d’arbres. Nous
                            analysons vos contraintes et vous fournissons une évaluation claire
                            et détaillée.
                        </p>
                    </div>

                    <div className="flex w-full shrink-0 flex-col items-center gap-4 lg:w-auto lg:items-end">
                        <Link href="/contact" className="w-full bg-secondary-fixed px-8 py-4 text-center text-xl font-semibold font-headline tracking-wider text-on-secondary-fixed uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                            Obtenir une soumission gratuite
                        </Link>
                        <a href="tel:5144428299" className="inline-flex items-center gap-2 text-sm leading-5 font-semibold font-headline tracking-wide text-surface-container-high transition-colors duration-300 hover:text-secondary-fixed">
                            <PhoneCall size={24} aria-hidden="true" className="shrink-0 text-secondary-fixed" />
                            <span>Ou appelez-nous au (514) 442-8299</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}