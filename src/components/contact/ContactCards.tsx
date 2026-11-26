import {ReactNode} from "react";
import {ArrowRight, BadgeCheck, LucideIcon, MailCheck, MapPin, PhoneCall, Share2} from "lucide-react";
import Link from "next/link";

const municipalities = [
    "Longueuil",
    "Boucherville",
    "Brossard",
    "Varennes",
    "Sainte-Julie",
    "Saint-Lambert",
    "Candiac",
    "Mont-Saint-Hilaire",
    "Saint-Hyacinthe",
] as const;

const socialLinks = [
    {
        title: "Facebook",
        href: "https://facebook.com",
        description: "Page officielle & chantiers récents @ArboML",
        descriptionClass: "text-on-surface-variant",
        iconPath: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
        title: "Avis Google",
        href: "https://google.com",
        description: "Note moyenne 5.0/5 ★★★★★",
        descriptionClass: "text-secondary font-semibold",
        iconPath: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
    },
] as const;

function ContactCard({ label, icon: Icon, children }: { label: string; icon: LucideIcon; children: ReactNode; }) {
    return (
        <div className="bg-surface-container-lowest shadow-sm flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between pb-2">
                <span className="text-xs uppercase font-headline font-semibold tracking-wider text-secondary">
                    {label}
                </span>
                <Icon size={20} aria-hidden="true" className="text-secondary shrink-0" />
            </div>
            {children}
        </div>
    );
}

export function PhoneCard() {
    return (
        <ContactCard label="Ligne Directe" icon={PhoneCall}>
            <div>
                <a href="tel:5144428299" className="text-2xl font-headline leading-tight font-semibold text-primary tracking-tight hover:text-secondary transition-colors duration-300">
                    (514) 442-8299
                </a>
                <p className="text-sm leading-relaxed font-body text-on-surface-variant mt-1">
                    Disponible du Lundi au Dimanche, 7h à 21h.<br />
                    <span className="text-secondary font-semibold">Urgences acceptées 24/7 pour arbres dangereux.</span>
                </p>
            </div>
        </ContactCard>
    );
}

export function EmailCard() {
    return (
        <ContactCard label="Messagerie Sécurisée" icon={MailCheck}>
            <div>
                <a href="mailto:info@arboml.ca" className="text-2xl font-headline font-semibold text-primary tracking-tight hover:text-secondary transition-colors duration-300">
                    info@arboml.ca
                </a>
                <p className="text-sm font-body leading-relaxed text-on-surface-variant mt-1">
                    Réponse dans les 24h à 48h ouvrables par un arboriste certifié.
                </p>
            </div>
        </ContactCard>
    );
}

export function SocialReviewsCard() {
    return (
        <ContactCard label="Réseaux Sociaux & Avis" icon={Share2}>
            <div>
                <h3 className="text-xl font-headline font-semibold text-primary tracking-tight">Suivez-nous &amp; avis clients</h3>
                <p className="text-sm font-body leading-relaxed text-on-surface-variant mt-1">
                    Découvrez nos réalisations récentes sur le terrain et les retours de nos clients sur la Rive-Sud.
                </p>
            </div>
            <div className="flex flex-col gap-2 pt-1">
                {socialLinks.map(({ title, href, description, descriptionClass, iconPath }) => (
                    <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-2 bg-surface-container-low hover:bg-surface-container transition-colors duration-300 group">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                                <svg aria-hidden="true" className="w-4 h-4 fill-current text-on-primary" viewBox="0 0 24 24">
                                    <path d={iconPath} />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-headline text-primary font-semibold">
                                    {title}
                                </span>
                                <span className={`text-sm font-body leading-relaxed ${descriptionClass}`}>
                                    {description}
                                </span>
                            </div>
                        </div>
                        <ArrowRight size={20} aria-hidden="true" className="text-secondary transition-transform group-hover:translate-x-1 shrink-0" />
                    </a>
                ))}
            </div>
        </ContactCard>
    );
}

export function ServiceAreaCard() {
    return (
        <div className="bg-surface-container-low p-4 shadow-sm">
            <div className="flex items-center gap-1 mb-2">
                <MapPin size={20} aria-hidden="true" className="text-secondary shrink-0" />
                <h2 className="text-xl font-headline font-semibold text-primary">Territoire Rive-Sud</h2>
            </div>
            <p className="text-sm font-body leading-relaxed text-on-surface-variant mb-4">
                Nous offrons nos services dans l’ensemble des municipalités suivantes :
            </p>
            <div className="flex flex-wrap gap-1">
                {municipalities.map((city) => (
                    <span key={city} className="text-xs font-headline px-2 py-1 bg-surface-container-lowest text-primary font-medium">
                        {city}
                    </span>
                ))}
            </div>
            <div className="mt-4 pt-1">
                <Link href="/territoires" className="inline-flex items-center gap-1 text-xs font-headline uppercase tracking-wider text-secondary hover:text-primary transition-colors duration-300 font-semibold group">
                    <span>Voir toutes les municipalités desservies</span>
                    <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1 shrink-0" />
                </Link>
            </div>
        </div>
    );
}

export function EstimateCard() {
    return (
        <div className="bg-primary-container text-on-primary flex flex-col gap-2 p-4 justify-center">
            <div className="flex items-center gap-1">
                <BadgeCheck size={24} aria-hidden="true" className="text-secondary-fixed shrink-0" />
                <h3 className="text-xl font-headline font-semibold text-on-primary">Estimation Gratuite &amp; Transparente</h3>
            </div>
            <p className="text-sm font-body leading-relaxed text-surface-container-high">
                Chaque arbre a ses particularités (proximité du bâti, lignes sous tension, santé du tronc).
                Nous nous déplaçons pour analyser la situation in situ. Devis claire, détaillé et sans aucun engagement.
            </p>
        </div>
    );
}