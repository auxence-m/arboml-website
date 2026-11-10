import Link from "next/link";
import {ArrowRight, ChevronDown} from "lucide-react";
import Image from "next/image";
import heroImage from "../../../public/images/hero-image.jpg";


export default function Hero() {
    return (
        <section className="relative w-full bg-surface-bright pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-surface-container">
            <div className="max-w-7xl mx-auto px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-6">
                        <div>
                            <div className="inline-flex items-center gap-1 px-2 py-1 bg-surface-container text-primary font-headline text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm border border-outline-variant/50">
                                <span className="h-2 w-2 shrink-0 rounded-full bg-secondary animate-pulse"></span>
                                <span>Rive-Sud de Montréal • Arboriculture professionnelle</span>
                            </div>
                            <h1 className="font-headline text-[40px] font-bold xl:text-6xl text-primary tracking-tight leading-tight mb-4">
                                Services professionnels d’entretien d’arbres sur la Rive-Sud
                            </h1>
                            <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-2 font-medium">
                                Nous offrons des services d&#39;entretien d&#39;arbres sur toute la Rive-Sud de
                                Montréal. N&#39;hésitez pas à nous contacter par courriel, message texte ou nous
                                appeler si vous avez plus de questions. Merci.
                            </p>
                            <p className="font-body text-[15px] leading-6 text-outline mb-6 max-w-xl">
                                La santé de vos arbres est notre priorité. Une expertise certifiée alliant sécurité
                                d’intervention et respect méticuleux de votre terrain
                            </p>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
                                <Link className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-secondary-fixed hover:bg-secondary text-on-secondary-fixed font-headline text-sm leading-5 font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 "
                                    href="/contact">
                                    <span>Demander une soumission gratuite</span>
                                    <ArrowRight size={18} aria-hidden="true" className="shrink-0"/>
                                </Link>
                                <Link className="inline-flex items-center justify-center gap-1 px-7 py-4 md:ml-auto bg-surface-container hover:bg-surface-container-high text-primary font-headline text-sm leading-5 font-semibold uppercase tracking-wider transition-all duration-300 border border-outline-variant/60"
                                    href="/services">
                                    <span>Découvrir nos services</span>
                                    <ChevronDown size={18} aria-hidden="true" className="shrink-0"/>
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full bg-surface-container-low p-4 border border-surface-container-highest">
                            <div className="flex flex-col border-b sm:border-b-0 sm:border-r border-outline-variant/40 pb-2 sm:pb-0 sm:pr-3">
                                <span className="font-headline text-xs leading-4 font-semibold tracking-wider text-secondary uppercase">Silencieux</span>
                                <span className="font-body text-sm leading-5 text-on-surface-variant font-medium">Outillage 100% électrique</span>
                            </div>
                            <div className="flex flex-col border-b sm:border-b-0 sm:border-r border-outline-variant/40 pb-2 sm:pb-0 sm:pr-3">
                                <span className="font-headline text-xs leading-4 font-semibold tracking-wider text-secondary uppercase">Sécuritaire</span>
                                <span className="font-body text-sm leading-5 text-on-surface-variant font-medium">Assurance responsabilité complète</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-headline text-xs leading-4 font-semibold tracking-wider text-secondary uppercase">Actif</span>
                                <span className="font-body text-sm leading-5 text-on-surface-variant font-medium">Disponibilité 4 saisons</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative bg-surface-container-high shadow-xl overflow-hidden h-full lg:grid lg:grid-rows-[87%_13%]">
                            <div className="relative w-full max-lg:order-first">
                                <Image
                                    alt="Arboriste professionnel élagueur en hauteur effectuant un élagage sécuritaire dans un grand arbre sur la Rive-Sud de Montréal"
                                    src={heroImage}
                                    loading="eager"
                                    fetchPriority="high"
                                    placeholder="blur"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="bg-primary text-on-primary p-4 flex items-center border-t-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-secondary-fixed flex items-center justify-center text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             className="size-7 fill-current">
                                            <path d="M8.6,22.5L6.7,19.3L3.1,18.5l0.35-3.7L1,12L3.45,9.2L3.1,5.5L6.7,4.7L8.6,1.5L12,2.95L15.4,1.5l1.9,3.2l3.6,0.8L20.55,9.2L23,12l-2.45,2.8l0.35,3.7l-3.6,0.8l-1.9,3.2L12,21.05L8.6,22.5Zm0.85-2.55L12,18.85l2.6,1.1l1.4-2.4l2.75-0.65L18.5,14.1L20.35,12L18.5,9.85l0.25-2.8L16,6.45l-1.45-2.4L12,5.15L9.4,4.05L8,6.45L5.25,7.05L5.5,9.85L3.65,12L5.5,14.1L5.25,16.95L8,17.55l1.45,2.4ZM12,12Zm-1.05,3.55L16.6,9.9L15.2,8.45L10.95,12.7L8.8,10.6L7.4,12l3.55,3.55Z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-headline text-xl font-semibold tracking-tight text-secondary-fixed leading-none mb-1">Qualité
                                            BNQ
                                        </div>
                                        <div className="font-body text-sm leading-5 text-surface-container-high">Arboriculteurs
                                            diplômés certifiés
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
