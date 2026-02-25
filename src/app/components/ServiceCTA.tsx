import Link from "next/link";

export default function ServiceCTA() {
    return (
        <div className="bg-green-50 pb-20 sm:pb-24">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                        Prêt à commencer  ?
                    </h1>
                    <p className="mt-6 text-lg/8 text-stone-900">
                       Contacter notre équipe pour une évaluation gratuite et des conseils adaptés à vos arbres
                    </p>
                    <div className="mt-6 flex justify-center">
                        <Link href="#" className="rounded-full px-8 py-2.5 text-md/6 font-semibold bg-gray-800 hover:bg-gray-900 hover:border-transparent transition-colors text-green-300">
                            Contactez-nous
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}