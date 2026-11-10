"use client"

import Link from "next/link";
import {scrollToService} from "@/lib/utils";
import {ArrowRight, BadgeCheck, Route} from "lucide-react";

const services = [
    { id: "abattage", label: "Abattage" },
    { id: "elagage", label: "Élagage" },
    { id: "taille", label: "Taille" },
    { id: "haubanage", label: "Haubanage" },
    { id: "plantation", label: "Plantation" },
    { id: "diagnostic", label: "Diagnostic" },
];

export default function ServiceHero() {
    return (
        <section aria-labelledby="services-heading" className="relative w-full overflow-hidden bg-surface-container-low pt-8 pb-16 lg:pt-14 lg:pb-24">
            <div className="mx-auto max-w-7xl px-8">
                <div className="mb-4 flex flex-wrap items-center font-headline gap-2">
                    <span className="inline-flex items-center gap-1 bg-primary px-2 py-1 text-[11px] font-semibold tracking-wider text-secondary-fixed uppercase">
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-secondary-fixed" />
                        Expertise arboricole • Rive-Sud de Montréal
                    </span>
                    <span className="hidden items-center gap-1 text-[11px] leading-4 font-semibold tracking-wider text-on-surface-variant uppercase sm:inline-flex">
                        <BadgeCheck size={14} aria-hidden="true" className="shrink-0 text-secondary" />
                        Normes BNQ
                    </span>
                </div>

                <div className="mb-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <h1 className="mb-4 leading-[1.15] font-bold font-headline tracking-tight text-primary uppercase text-[40px] lg:text-6xl">
                            Nos services d’arboriculture et d&apos;entretien d&apos;arbres
                        </h1>
                        <p className="font-body text-lg max-w-2xl leading-relaxed text-on-surface-variant">
                            Nous offrons différents services professionnels d&#39;arboriculture. Nos interventions sont rigoureuses,
                            sécuritaires et respectueuses du végétal pour préserver la santé, la beauté et la sécurité
                            de vos arbres sur l&apos;ensemble de la Rive-Sud.
                        </p>
                    </div>
                </div>

                <div className="bg-surface-container-lowest p-4 sm:p-6 shadow-md">
                    <div className="mb-4 flex flex-col justify-between gap-2 pb-1 sm:flex-row sm:items-center">
                        <h2 className="flex items-center gap-1 text-sm font-bold font-headline tracking-wider text-primary uppercase">
                            <Route size={20} aria-hidden="true" className="shrink-0 text-secondary" />
                            Accès rapide par intervention
                        </h2>
                        <span className="text-base font-body font-medium text-on-surface-variant">6 expertises de terrain</span>
                    </div>

                    <nav aria-label="Accès rapide aux services" className="font-headline grid gap-2 md:grid-cols-3 lg:grid-cols-6">
                        {services.map((service, index) => (
                            <Link key={service.id} href={`/services/#${service.id}`}
                                  onClick={() => scrollToService(service.id)}
                                  className="group flex items-center justify-between gap-1 bg-surface-container-low px-3 py-4 text-primary shadow-sm transition-colors duration-300 hover:bg-primary hover:text-on-primary sm:px-4">
                                <span className="text-base leading-6 font-semibold">
                                    {String(index + 1).padStart(2, "0")}. {service.label}
                                </span>
                                <ArrowRight size={18} aria-hidden="true" className="shrink-0 text-secondary transition-all duration-300 group-hover:translate-x-1 group-hover:text-secondary-fixed"/>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}