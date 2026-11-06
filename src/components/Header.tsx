"use client"

import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import {useSelectedLayoutSegment} from "next/navigation";
import {Phone, Menu, XIcon} from "lucide-react";

const navigation = [
    {name: "Accueil", href: "/"},
    {name: "Services", href: "/services"},
    {name: "Zones", href: "/contact"},
    {name: "Galerie", href: "/services"},
    {name: "Contact", href: "/contact"},
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/"

    function openMobileMenu() {
        setMobileMenuOpen(true);
    }

    function closeMobileMenu() {
        setMobileMenuOpen(false);
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
            <nav aria-label="Global" className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-8">
                <div className="flex">
                    <Link className="flex items-center gap-2 focus:outline-none" href="/">
                        <Image
                            alt="ARBOML logo"
                            src="/logo.svg"
                            width={1880}
                            height={2000}
                            loading="eager"
                            className="h-10 w-auto"
                        />
                        <div className="flex flex-col">
                            <span className="font-headline text-[20px] uppercase tracking-tight text-primary leading-none font-bold mt-1.5">Arbo
                                <span className="text-secondary">ML</span>
                            </span>
                            <span className="font-headline text-[11px] font-semibold tracking-widest text-on-surface-variant uppercase mt-1">Arboriculture • Rive-Sud</span>
                        </div>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" onClick={openMobileMenu} className="inline-flex items-center justify-center rounded-md text-primary hover:text-secondary">
                        <span className="sr-only">Ouvrir le menu de navigation</span>
                        <Menu aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex gap-6 ">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className={`font-headline text-[15px]/5 font-semibold hover:text-primary hover:font-bold transition-colors duration-300 ${pathname === item.href ? "text-primary font-bold" : "text-on-surface-variant"}`}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex gap-4 font-headline text-[15px]/5 font-bold">
                    <Link href="/contact" className="hidden lg:inline-flex items-center justify-center bg-secondary-fixed px-4 py-2 text-center uppercase tracking-wider text-on-secondary-fixed hover:bg-secondary hover:text-surface transition-all duration-300">
                        Demander une soumission gratuite
                    </Link>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={closeMobileMenu} className="lg:hidden font-headline">
                <DialogBackdrop className="fixed inset-0 bg-primary/20"/>
                <div className="fixed inset-0 z-50"/>
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-surface shadow-lg px-8 py-4.25">
                    <div className="flex items-center justify-between">
                        <Link className="flex items-center gap-2 focus:outline-none" href="/">
                            <Image
                                alt="ARBOML logo"
                                src="/logo.svg"
                                width={1880}
                                height={2000}
                                loading="eager"
                                className="h-10 w-auto"
                            />
                            <div className="flex flex-col">
                            <span className="font-headline text-[20px] uppercase tracking-tight text-primary leading-none font-bold mt-1.5">Arbo
                                <span className="text-secondary">ML</span>
                            </span>
                                <span className="font-headline text-[11px] font-semibold tracking-widest text-on-surface-variant uppercase mt-1">Arboriculture • Rive-Sud</span>
                            </div>
                        </Link>
                        <button type="button" onClick={closeMobileMenu} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <XIcon aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-outline-variant">
                            <div className="py-6">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} onClick={closeMobileMenu} className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-on-surface-variant">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4 py-6 font-extrabold">
                                <a href="tel:5144428299" className="font-bold flex items-center gap-1 text-primary hover:text-secondary transition-colors duration-300">
                                    <Phone size={18} aria-hidden="true" />
                                    <span className="whitespace-nowrap tracking-wider">(514) 442-8299</span>
                                </a>
                                <Link href="/contact" onClick={closeMobileMenu} className="items-center justify-center bg-secondary-fixed px-4 py-3 text-center uppercase tracking-wider text-on-secondary-fixed hover:bg-secondary hover:text-surface transition-all duration-300">
                                    Demander une soumission gratuite
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}