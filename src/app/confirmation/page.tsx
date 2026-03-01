import {CircleCheckBig} from "lucide-react";
import Link from "next/link";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function Confirmation() {
    const cookieStore = await cookies()

    // Deny access if cookie is missing
    if (!cookieStore.get("form-submitted")) {
        redirect("/contact")
    }

    return (
        <div className="bg-linear-to-b from-green-300 via-green-50 to-green-50 mx-auto px-4 py-20 sm:py-26">
            <div className="flex items-center justify-center">
                <div className="bg-green-100 w-full max-w-xl border rounded-lg shadow-xl p-8">
                    <CircleCheckBig strokeWidth={2} size={34} className="mx-auto text-gray-900"/>
                    <div className="mt-4 text-center text-base/8">
                        <h3 className="text-lg font-bold text-gray-900">
                            Message envoyé
                        </h3>
                        <p className="mt-2 text-base/8 text-center text-gray-800">
                            Votre message a bien été envoyé. Nous vous remercions de nous avoir contactés et nous vous répondrons dans les plus brefs délais.
                        </p>
                    </div>
                    <div className="flex space-x-2 mt-4 items-center justify-center">
                        <Link href="/" className="flex items-center justify-center w-full rounded-lg px-6 py-2 text-base font-semibold bg-gray-800 hover:bg-gray-900 text-green-50 transition-colors">
                            Accueil
                        </Link>
                        <Link href="/services" className="flex items-center justify-center w-full  rounded-lg px-6 py-2 text-base font-semibold bg-green-500 hover:bg-green-600 text-gray-800 transition-colors">
                            Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}