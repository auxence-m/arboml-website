import Link from "next/link";
import {Phone} from "lucide-react";

export default function ServiceCTA() {
    return (
        <section className="w-full bg-primary-container text-on-primary py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8">
                        <span className="mb-2 block text-xs font-bold font-headline tracking-widest text-secondary-fixed uppercase">
                            Réponse rapide garantie
                        </span>
                        <h2 className="text-3xl sm:text-[40px] leading-tight font-semibold tracking-tight text-on-primary uppercase mb-2">
                            Vous ne savez pas quel service convient le mieux à vos arbres ?
                        </h2>
                        <p className="text-lg text-surface-container-high font-body leading-relaxed max-w-2xl">
                            Discutez de votre projet avec nos arboristes. Nous analyserons la situation pour vous orienter vers la solution la plus adaptée.
                        </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col font-headline gap-2 items-start lg:items-end">
                        <Link href="/contact" className="w-full sm:w-auto text-center bg-secondary-fixed hover:bg-secondary-container text-on-secondary-fixed text-sm uppercase tracking-wider px-6 py-4 shadow-md transition-all font-bold duration-300">
                            Demander une soumission gratuite
                        </Link>
                        <a href="tel:5144428299" className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-sm font-semibold uppercase tracking-wider text-surface-bright hover:text-secondary-fixed transition-colors py-1 duration-300">
                            <Phone size={18} aria-hidden="true" className="text-secondary-fixed shrink-0" />
                            <span>(514) 442-8299</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}