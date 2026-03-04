import Link from 'next/link'
import {MoveRight} from "lucide-react";

export default function NotFound() {
    return (
        <>
            <main className="grid min-h-screen place-items-center bg-linear-to-b from-green-300 via-green-50 to-green-50 px-4">
                <div className="text-center">
                    <p className="text-base font-semibold text-gray-900">404</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                        Page introuvable
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8">
                        Désolé, nous n&#39;avons pas trouvé la page que vous recherchez.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-2 group transition duration-300">
                        <Link href="/" className="text-sm sm:text-base font-semibold  text-gray-900">
                            Retour à la page d&#39;accueil
                        </Link>
                        <span className="transition-all ease-in-out duration-500 group-hover:translate-x-full">
                            <MoveRight strokeWidth={1.8} size={20}/>
                        </span>
                    </div>
                </div>
            </main>
        </>
    )
}