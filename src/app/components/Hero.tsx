import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="bg-linear-to-b from-green-300 via-green-300 to-green-50 mx-auto py-20 sm:py-26">
            <div className="mx-auto text-center px-4 lg:max-w-7xl">
                <h1 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                    Services d&#39;entretien d&#39;arbres et d&#39;arbustes à Boucherville et sur la Rive-Sud de Montréal
                </h1>
                <p className="mt-4 text-lg/8 text-gray-800 uppercase tracking-tight">
                    La santé de vos arbres et arbustes est notre priorité
                </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:gap-x-16 lg:max-w-7xl lg:grid-cols-2">
                <div style={{animationDelay: "0.8s", animationFillMode: "forwards"}} className="relative text-center lg:text-left my-auto animate-fade-right opacity-0 ">
                    <p className="text-lg/8 text-pretty text-gray-900">
                        Nous offrons des services d&#39;entretien d&#39;arbres et arbustes (élagage, abattage, taille de haies,
                        etc.) à Boucherville et sur toute la Rive-Sud de Montréal.
                        N&#39;hésitez pas à nous contacter par courriel, message texte ou nous appeler si vous avez plus de
                        questions. Merci.
                    </p>
                    <div className="mt-10 flex gap-x-6 justify-center lg:justify-start">
                        <Link href="/services" className="text-sm sm:text-base rounded-full bg-gray-800 px-6 py-2.5 font-medium hover:bg-gray-900 transition-colors text-green-300">
                            Nos Services
                        </Link>
                        <Link href="#" className="text-sm sm:text-base rounded-full bg-green-500 px-6 py-2.5 font-medium hover:bg-green-600 transition-colors text-gray-900">
                            Contactez-nous <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
                <div className="relative max-lg:order-first">
                    <Image
                        alt="hero image"
                        src="/hero-image.jpg"
                        width={2432}
                        height={1442}
                        priority
                        className="rounded-xl size-full object-cover animate-fade-up"
                    />
                </div>
            </div>
        </div>
    );
}
