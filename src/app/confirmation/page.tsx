import {ArrowRight, CircleCheck, House, Images, Navigation, Trees} from "lucide-react";
import Link from "next/link";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Confirmation',
    robots: {
        index: false,
        follow: true,
    }
};

const navLinks = [
    { label: "Retour à l'accueil", href: "/", icon: House },
    { label: "Nos services d'arboriculture", href: "/services", icon: Trees },
    { label: "Galerie de réalisations", href: "/galerie", icon: Images },
    { label: "Territoires desservis", href: "/territoires", icon: Navigation},
] as const;

export default async function Confirmation() {
    const cookieStore = await cookies()

    // Deny access if cookie is missing
    if (!cookieStore.get("form-submitted")) {
        redirect("/contact")
    }

    return (
        <div className="w-full overflow-hidden bg-surface py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <section className="relative flex flex-col items-center bg-surface-container-lowest p-6 text-center shadow-sm md:p-12">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-secondary-container via-secondary to-primary-container"/>
                    <div aria-hidden="true" className="relative mb-4 size-20">
                        <span className="absolute inset-0 rounded-sm bg-secondary-fixed/30 opacity-75 animate-ping"/>
                        <span className="relative flex size-full items-center justify-center rounded-sm bg-secondary-fixed shadow-sm">
                            <CircleCheck size={48} className="fill-primary text-secondary-fixed"/>
                        </span>
                    </div>

                    <p className="mb-2 inline-flex items-center gap-1 bg-surface-container px-4 py-1 text-xs font-bold font-headline uppercase tracking-widest text-primary">
                        <span aria-hidden="true" className="size-2 shrink-0 bg-secondary"/>
                        <span>Demande d&apos;estimation bien reçue</span>
                    </p>
                    <h1 className="mb-2 max-w-2xl text-3xl md:text-4xl font-semibold font-headline leading-[1.15] tracking-tight text-primary">
                        Votre demande a été transmise avec succès
                    </h1>
                    <p className="max-w-3xl text-lg leading-relaxed font-body text-on-surface-variant">
                        Nous vous remercions de nous avoir contactés. Nous analyserons les informations
                        soumises et nous vous contacterons dans les plus brefs délais.
                    </p>
                </section>

                {/*Navigation links*/}
                <nav className="mt-12 text-center">
                    <p className="text-xs font-semibold font-headline uppercase tracking-widest text-outline">
                        ARBOML • Rive-Sud de Montréal
                    </p>
                    <h2 className="mb-6 mt-1 text-3xl lg:text-4xl font-headline leading-tight font-semibold uppercase tracking-tight text-primary">
                        Continuez à explorer nos réalisations et nos solutions
                    </h2>
                    <ul className="grid gap-6 md:grid-cols-2">
                        {navLinks.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <Link href={href} className="group flex h-full items-center gap-4 border border-outline-variant bg-surface-container-lowest p-4 text-primary shadow-sm rounded-sm transition-colors duration-300 hover:border-secondary hover:bg-surface-container hover:text-secondary">
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary-container text-secondary-fixed transition-colors duration-300 group-hover:bg-secondary group-hover:text-on-secondary">
                                        <Icon size={20} aria-hidden="true" className="shrink-0" />
                                    </span>
                                    <span className="text-base font-bold font-headline tracking-wide">{label}</span>
                                    <ArrowRight aria-hidden="true" className="ml-auto size-5 shrink-0 text-outline transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1"/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}