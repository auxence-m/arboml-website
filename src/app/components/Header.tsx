"use client"

import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    {name: "Accueil", href: "/"},
    {name: "Services", href: "/services" },
    {name: "Contact", href: "#"},
    {name: "Galerie", href: "#"},
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full h-16 md:h-20 bg-green-300">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">ARBO ML</span>
                        <Image
                            alt="ARBOML logo"
                            src="/logo.svg"
                            width={2048}
                            height={407}
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-md/6 font-semibold text-gray-900 group relative transition duration-300">
                            {item.name}
                            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="#" className="rounded-full border border-solid border-gray-900 px-6 py-2.5 text-md/6 font-semibold hover:bg-green-500 hover:border-transparent transition-colors text-gray-900">
                        Soumission Gratuite <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={() =>setMobileMenuOpen(false)} className="lg:hidden">
                <DialogBackdrop transition className="fixed inset-0 bg-black/30 duration-500 ease-in-out data-closed:opacity-0" />
                <div className="fixed inset-0 z-50" />
                <DialogPanel transition className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-linear-to-b from-green-300 via-green-300 to-green-50 px-5 py-3.5 sm:ring-1 sm:ring-gray-900/10 transform duration-500 ease-in-out data-closed:translate-x-full data-closed:opacity-100 sm:duration-700">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="mt-0.5 -ml-1">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt="ARBOML logo"
                                src="/logo.svg"
                                width={2048}
                                height={407}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-800">
                            <div className="space-y-2 py-6 px-2">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6 px-2">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900"
                                >
                                    Soumission Gratuite
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}