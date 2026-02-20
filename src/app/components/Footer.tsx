"use client"

import Image from "next/image";
import Link from "next/link";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline";
import {services} from "@/app/data";
import {scrollToService} from "@/app/utils";

export default function Footer() {
    return (
        <footer className="z-50 w-full bg-linear-to-t from-green-300 via-green-300 to-green-50">
            <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 py-8 sm:py-10 border-b border-b-gray-900">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-y-14">
                    <div className="flex flex-col gap-y-2">
                        <Image
                            alt="ARBOML logo"
                            src="/logo.svg"
                            width={2048}
                            height={407}
                            className="h-18 w-70 -ml-4"
                        />
                        <p className="text-lg/8 font-normal text-left tracking-tight text-pretty text-gray-900 lg:text-balance">
                            Services d&#39;entretien d&#39;arbres et d&#39;arbustes à Boucherville et sur la Rive-Sud de Montréal
                        </p>
                    </div>
                    <hr className="lg:hidden"/>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-y-14">
                        <div className="text-left">
                            <p className="text-lg font-bold tracking-tight text-pretty text-gray-900">
                                Services
                            </p>
                            <div className="flex flex-col mt-2 gap-y-2 text-base/8 text-gray-800">
                                {services.map((service) => (
                                    <div key={service.name}>
                                        <Link href={`/services/#${service.id}`} onClick={() => scrollToService(service.id)}  className="group relative transition duration-300">
                                            {service.name}
                                            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-bold tracking-tight text-pretty text-gray-900">
                                Contact
                            </p>
                            <div className="flex flex-col mt-2 gap-y-2 text-base/8 text-gray-800">
                                <div className="flex items-center space-x-2">
                                    <EnvelopeIcon className="size-6"/>
                                    <Link href="mailto: info@arboml.ca" className="group relative transition duration-300">
                                        info@arboml.ca
                                        <span className="absolute bottom-1 left-1/2 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PhoneIcon className="size-6 mr-2"/>
                                    <Link href="tel: (514) 442-8299" className="group relative transition duration-300">
                                        (514) 442-8299
                                        <span className="absolute bottom-1 left-1/2 h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-lg/9 text-gray-900 py-4 flex justify-center">
                © {new Date().getFullYear()} ArboML. Tous droits réservés.
            </div>
        </footer>
    );
}