"use client"

import Image from "next/image";
import Link from "next/link";
import {Copyright, Phone, Mail, MapPin} from "lucide-react";
import {services} from "@/lib/data";
import {scrollToService} from "@/lib/utils";

const navigation = [
    {name: "Accueil", href: "/"},
    {name: "Services", href: "/services"},
    {name: "Zones", href: "/contact"},
    {name: "Galerie", href: "/services"},
    {name: "Contact", href: "/contact"},
]

const headings = "mb-4 text-xl leading-7 font-semibold uppercase tracking-wider text-on-primary";
const links = "text-base leading-6 text-surface-container-high hover:text-secondary-fixed transition-colors duration-300";
const socials = "flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-surface-bright hover:bg-secondary-fixed hover:text-on-secondary-fixed";



export default function Footer() {
    return (
        <footer className="w-full bg-primary text-on-primary mt-12 border-t border-primary-container">
            <div className="mx-auto max-w-7xl px-8 pt-12 pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
                    {/*First*/}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                alt="ARBOML logo"
                                src="/logo-white.svg"
                                width={1880}
                                height={2000}
                                loading="eager"
                                className="h-10 w-auto"
                            />
                            <div className="flex flex-col">
                            <span className="font-headline text-[20px] uppercase tracking-tight text-on-primary leading-none font-bold mt-1.5">Arbo
                                <span className="text-secondary">ML</span>
                            </span>
                            </div>
                        </div>
                        <p className="mb-6 text-base leading-relaxed text-surface-container-high">
                            Services professionnels  d&#39;entretien d&#39;arbres  sur la Rive-Sud de Montréal
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="bg-primary-container px-2 py-1 text-xs leading-4 font-semibold tracking-wider uppercase text-secondary-fixed border border-secondary-fixed/30">
                                Certifié &amp; Assuré
                            </span>
                        </div>
                    </div>
                    {/*Second*/}
                    <div>
                        <h2 className={headings}>Navigation</h2>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className={links}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*Third*/}
                    <div>
                        <h2 className={headings}>Services</h2>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link href={`/services/#${service.id}`} onClick={() => scrollToService(service.id)} className={links}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*Fourth*/}
                    <div>
                        <h2 className={headings}>Coordonnées</h2>
                        <address className="space-y-2 text-base leading-6 text-surface-container-high not-italic">
                            <div className="flex items-center gap-2">
                                <Phone size={18} aria-hidden="true" className="shrink-0 text-secondary-fixed" />
                                <a href="tel:5144428299" className={links}>(514) 442-8299</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={18} aria-hidden="true" className="shrink-0 text-secondary-fixed" />
                                <a href="mailto:info@arboml.ca" className={links}>info@arboml.ca</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={18} aria-hidden="true" className="shrink-0 text-secondary-fixed" />
                                <span>Rive-Sud de Montréal, QC</span>
                            </div>
                        </address>
                        <div className="mt-4 flex items-center gap-3">
                            {/* Preserve the original brand SVGs; Material Symbols are replaced below. */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                               aria-label="Suivez-nous sur Facebook" className={socials}>
                                <svg aria-hidden="true" focusable="false" className="size-4.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer"
                               aria-label="Consulter notre fiche Google Business Profile" className={socials}>
                                <svg aria-hidden="true" focusable="false" className="size-4.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm leading-5 text-primary-fixed-dim sm:flex-row">
                    <div className="flex items-center gap-1">
                        <Copyright size={16} strokeWidth={1.5}/>
                        <span>{new Date().getFullYear()} ArboML. Tous droits réservés.</span>
                    </div>
                    <p className="text-center sm:text-right">Arboriculture durable &amp; soins des arbres</p>
                </div>
            </div>
        </footer>
    );
}