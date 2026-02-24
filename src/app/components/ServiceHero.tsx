"use client"

import Link from "next/link";
import {services} from "@/app/data";
import {scrollToService} from "@/app/utils";

export default function ServiceHero() {
    return (
        <div className="bg-linear-to-b from-green-300 via-green-300 to-green-50 mx-auto px-4 py-20 sm:py-26">
            <div className="mx-auto text-center max-w-2xl lg:max-w-7xl">
                <h1 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                    Nos Services
                </h1>
                <p className="mt-4 text-lg/8 text-gray-800 tracking-tight lg:text-balance">
                    Nous offrons différents services d’arboriculture. Vous trouverez ci-dessous les services que nous proposons.
                    Tous nos services sont réalisés de façon professionnelles et sécuritaires, afin d’assurer l’entretien et la santé de vos arbres.
                    N’hésitez pas à nous contacter;  nous ferons de notre mieux pour vous accompagner et de répondre à vos besoins.
                </p>
            </div>
            <div className="mt-10 lg:mt-14 mx-auto max-w-2xl grid grid-cols-1 gap-8 lg:gap-x-16 lg:max-w-7xl lg:grid-cols-2">
                {services.map((service, index) => (
                    <Link key={service.name} href={`/services/#${service.id}`} onClick={() => scrollToService(service.id)} style={{animationDelay: `${index * 200}ms`, animationFillMode: "forwards"}} className="bg-green-100 group flex gap-x-4 items-center p-4 rounded-xl border border-green-900 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1 animate-fade-up opacity-0">
                        <div className="flex items-center justify-center size-10 rounded-xl bg-green-200 text-green-900 group-hover:bg-emerald-600 group-hover:text-white transition duration-300">
                            <service.icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg/8 font-semibold text-gray-900">
                            {service.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}