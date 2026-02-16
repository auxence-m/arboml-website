import Link from "next/link";

export default function EstimateCTA() {
    return (
        <div className="bg-linear-to-r from-green-50 via-green-300 to-green-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                        Obtenez votre estimation gratuite
                    </p>
                    <p className="mt-6 text-lg/8 text-stone-900">
                        Offrez à vos arbres et arbustes les soins professionnels qu’ils méritent. Remplissez notre formulaire en ligne ou contactez-nous directement pour obtenir une estimation gratuite et sans engagement.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <Link href="#" className="rounded-full px-8 py-2.5 text-md/6 font-semibold bg-gray-800 hover:bg-gray-900 hover:border-transparent transition-colors text-green-300">
                            Soumission Gratuite
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}