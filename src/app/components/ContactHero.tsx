import {MailIcon, Phone, MapPinnedIcon} from "lucide-react";
import Link from "next/link";

export default function ContactHero() {
    return (
        <div className="bg-linear-to-b from-green-300 via-green-300 to-green-50 mx-auto px-4 py-20 sm:py-26">
            <div className="mx-auto text-center max-w-2xl lg:max-w-7xl">
                <h1 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                    Comment nous joindre
                </h1>
                <p className="mt-8 text-lg/8 text-gray-800 tracking-tight lg:text-balance">
                    Vous pouvez nous contacter par courriel, par téléphone ou par message texte.
                    Il est également possible de nous envoyer un message en remplissant le formulaire de contact ci-dessous.
                    Nous nous engageons à vous répondre dans les plus brefs délais. Merci et au plaisir de vous servir !
                </p>
            </div>
            <div className="mt-12 lg:mt-16 mx-auto max-w-2xl grid grid-cols-1 gap-8 lg:gap-x-16 lg:max-w-7xl lg:grid-cols-3">
                <div style={{animationFillMode: "forwards"}} className="rounded-2xl shadow-lg border-2 border-gray-800 p-8 animate-fade-right opacity-0">
                    <div className="flex items-center justify-center size-16 rounded-xl bg-green-200 border border-gray-900 text-gray-900">
                        <MailIcon size={30} strokeWidth={1.5}/>
                    </div>
                    <h3 className="mt-6 font-semibold text-lg text-gray-900">
                        Envoyez-nous un e-mail
                    </h3>
                    <div className="mt-2 text-lg/8 text-gray-800">
                        <Link href="mailto: info@arboml.ca" className="group relative transition duration-300">
                            info@arboml.ca
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
                <div style={{animationDelay: `0.5s`, animationFillMode: "forwards"}} className="rounded-2xl shadow-lg border-2 border-gray-800 p-8 animate-fade-right opacity-0">
                    <div className="flex items-center justify-center size-16 rounded-xl bg-green-200 border border-gray-900 text-gray-900">
                        <Phone size={30} strokeWidth={1.5}/>
                    </div>
                    <h3 className="mt-6 font-semibold text-lg text-gray-900">
                        Appelez-nous
                    </h3>
                    <div className="mt-2 text-lg/8 text-gray-800" >
                        <Link href="tel: (514) 442-8299" className="group relative transition duration-300">
                            (514) 442-8299
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-800 transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
                <div style={{animationDelay: `1s`, animationFillMode: "forwards"}} className="rounded-2xl shadow-lg border-2 border-gray-800 p-8 animate-fade-right opacity-0">
                    <div className="flex items-center justify-center size-16 rounded-xl bg-green-200 border border-gray-900 text-gray-900">
                        <MapPinnedIcon size={30} strokeWidth={1.5}/>
                    </div>
                    <h3 className="mt-6 font-semibold text-lg text-gray-900">
                        Zones de services
                    </h3>
                    <p className="mt-2 text-lg/8 text-gray-800">
                        Boucherville et toute la Rive-Sud de Montréal
                    </p>
                </div>
            </div>
        </div>
    );
}