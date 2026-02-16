import Image from "next/image";
import Link from "next/link";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline";

const services = [
    {
        name: "Abattage",
        href: "#",
    },
    {
        name: "Élagage",
        href: "#",
    },
    {
        name: "Taille de Haies",
        href: "#",
    },
    {
        name: "Haubanage",
        href: "#",
    },
    {
        name: "Plantations d’arbres et arbustes",
        href: "#",
    },
    {
        name: "Fertilisation et décompactions de sol",
        href: "#",
    },
    {
        name: "Traitement de plaies",
        href: "#",
    },
    {
        name: "Diagnostic",
        href: "#",
    }
]


export default function Footer() {
    return (
        <footer className="z-50 w-full bg-linear-to-t from-green-300 via-green-300 to-green-50">
            <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 py-8 sm:py-10 border-b border-b-gray-900">
                <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
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
                    <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
                        <div className="text-left">
                            <p className="text-lg font-bold tracking-tight text-pretty text-gray-900">
                                Services
                            </p>
                            <div className="flex flex-col mt-2 gap-y-2 text-base/8 text-gray-800">
                                {services.map((service) => (
                                    <Link key={service.name} href={service.href} className="hover:underline hover:underline-offset-2">
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-bold tracking-tight text-pretty text-gray-900">
                                Contact
                            </p>
                            <div className="flex flex-col mt-2 gap-y-2 text-base/8 text-gray-800">
                                <Link href="mailto: info@arboml.ca" className="flex items-center hover:underline hover:underline-offset-2">
                                    <EnvelopeIcon className="size-6 mr-2"></EnvelopeIcon>
                                    info@arboml.ca
                                </Link>
                                <Link href="tel: (514) 442-8299" className="flex items-center hover:underline hover:underline-offset-2">
                                    <PhoneIcon className="size-6 mr-2"></PhoneIcon> <span>(514) 442-8299</span>
                                </Link>
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