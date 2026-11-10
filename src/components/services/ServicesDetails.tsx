import Image, {StaticImageData} from "next/image";
import {ArrowRight, CircleCheck, CircleHelp, Info, Leaf, LucideIcon} from "lucide-react";
import Link from "next/link";
import abattageImage from "../../../public/images/abattage-image.jpg";
import elagageImage from "../../../public/images/elagage-image.jpg";
import tailleImage from "../../../public/images/taille-image.jpg";
import haubanageImage from "../../../public/images/haubanage-image.jpg";
import plantationImage from "../../../public/images/plantation-image.jpg";
import diagnosticImage from "../../../public/images/diagnostic-image.jpg";


type Service = {
    id: string
    title: string
    badge: string
    description: string
    when: string[]
    noteLabel: string
    note: string
    noteIcon: LucideIcon
    cta: string
    href: string
};

type ServiceImage = {
    id: string;
    src: StaticImageData;
    alt: string;
};

const services: Service[] = [
    {
        id: "abattage",
        title: "Abattage d’arbres",
        badge: "Sécurité & Espace restreint",
        description: "Élimination sécuritaire et contrôlée d'arbres lorsque nécessaire, réalisée avec des techniques de démontage adaptées aux cours exiguës et aux contraintes urbaines.",
        when: [
            "Un arbre est mort, dépérissant ou en fin de vie.",
            "Un arbre a subi des dommages structurels majeurs (intempéries, verglas).",
            "Un arbre présente un danger potentiel imminent pour les personnes ou les bâtiments."
        ],
        noteLabel: "Note pratique :",
        note: "Dans la majorite des municipalités de la Rive-Sud de Montréal (Longueuil, Boucherville, Brossard, Saint-Julie, etc.), un permis d'abattage est généralement requis avant d'effectuer les travaux.",
        noteIcon: Info,
        cta: "Demander une estimation pour abattage",
        href: "/contact",},
    {
        id: "elagage",
        title: "Élagage",
        badge: "Santé & Prévention",
        description: "Coupe sélective et raisonnée réalisée par un élagueur qualifié selon les plus hauts standards de l’industrie. Nous Appliquons des bonnes techniques de coupe afin de maintenir la santé structurelle, l'équilibre et la vitalité de vos arbres.",
        when: [
            "Présence de branches mortes, brisées ou dépérissantes dans la cime.",
            "L'arbre présente une ramure déséquilibrée, encombrante ou problématique.",
            "Un entretien préventif est nécessaire pour favoriser une croissance vigoureuse."
        ],
        noteLabel: "Bénéfice clé :",
        note: "Un élagage professionnel respecte les zones de cicatrisation naturelle de l'arbre et renforce sa résistance aux vents et au verglas.",
        noteIcon: CircleCheck,
        cta: "Demander une estimation pour élagage",
        href: "/contact",},
    {
        id: "taille",
        title: "Taille de haies & d'arbustes",
        badge: "Esthétique & Végétalisation",
        description: "Entretien soigné et régulier de vos haies, arbustes et arbres d'ornement pour maintenir leur densité, leur géométrie et leur développement harmonieux.",
        when: [
            "Vos haies sont devenues trop volumineuses ou débordent sur le terrain.",
            "Vos arbres d'ornement ou arbustes ont besoin d'une remise en forme ou taille de formation.",
            "La végétation nécessite un rafraîchissement esthétique pour valoriser vos aménagements."
        ],
        noteLabel: "Bénéfice clé :",
        note: "Une taille régulière et exécutée au bon moment préserve l'opacité et l'intimité de vos haies tout en évitant les trous causés par le poids de la neige.",
        noteIcon: CircleCheck,
        cta: "Demander une estimation pour taille",
        href: "/contact",},
    {
        id: "haubanage",
        title: "Haubanage",
        badge: "Consolidation mécanique",
        description: "Installation de systèmes de câblage non invasifs pour sécuriser et consolider la structure des arbres matures sans altérer leur écorce ni leur port naturel.",
        when: [
            "L'arbre possède une charpentière vulnérable ou une tête affaiblie.",
            "Présence d'une fourche codominante fendue ou à écorce incluse nécessitant une sécurisation.",
            "Un soutien structurel complémentaire est recommandé à la suite d'une évaluation pour éviter l'abattage d'un arbre d'exception."
        ],
        noteLabel: "Note pratique :",
        note: "Le haubanage est une alternative préservatrice à l'abattage, dont la méthode et les tensions doivent impérativement être évaluées par un arboriste diplômé.",
        noteIcon: Info,
        cta: "Demander une estimation pour haubanage",
        href: "/contact",},
    {
        id: "plantation",
        title: "Plantation stratégique",
        badge: "Avenir & Écosystème",
        description: "Que ce soit pour créer une zone d'ombrage rafraîchissante, valoriser votre propriété ou gagner en intimité, la plantation d'arbres améliorent la qualité de l’air et enrichit votre milieu de vie. Nous vous guidons dans le choix des essences adaptées au climat québécois et aux contraintes du terrain, avec un service complet de plantation.",
        when: [
            "Remplacement d'un arbre abattu conformément aux règlements municipaux.",
            "Volonté d'ajouter de l'ombrage naturel, de la fraîcheur ou de l'intimité dans votre cour.",
            "Amélioration et valorisation de l'aménagement paysager avec des essences québécoises."
        ],
        noteLabel: "Conseil d'arboriste :",
        note: "Choisir le « bon arbre au bon endroit » selon l'ensoleillement et la nature du sol garantit sa croissance pérenne sans risquer d'endommager les fondations ou les infrastructures.",
        noteIcon: Leaf,
        cta: "Demander une estimation pour plantation",
        href: "/contact",},
    {
        id: "diagnostic",
        title: "Diagnostic arboricole ",
        badge: "Santé végétale & Inspection",
        description: "Évaluation rigoureuse et impartiale de l'état de santé, mécanique et biologique de vos végétaux pour déceler les risques de chute ou de maladies.",
        when: [
            "Le feuillage présente un jaunissement précoce, des taches anormales ou un dépérissement.",
            "Des branches maîtresses sèchent sans raison apparente ou des chancres apparaissent sur le tronc.",
            "Signes visibles d'insectes ravageurs (ex: agrile), de pourriture fongique ou présence de champignons au collet."
        ],
        noteLabel: "Note pratique :",
        note: "Une inspection préventive précoce permet d'intervenir à temps, de choisir le bon traitement et d'établir un rapport objectif en cas de besoin municipal.",
        noteIcon: Info,
        cta: "Demander un diagnostic arboricole",
        href: "/contact",}
];

const images: ServiceImage[] = [
    {
        id: "abattage",
        src: abattageImage,
        alt: "Photographie professionnelle d'un arboriste certifié ArboML effectuant un abattage technique par démontage contrôlé dans une cour résidentielle de la Rive-Sud."
    },
    {
        id: "elagage",
        src: elagageImage,
        alt: "Gros plan naturaliste sur une coupe d'élagage propre et soignée d'un érable."
    },
    {
        id: "taille",
        src: tailleImage,
        alt: "Tailles d'un arbustes effectuée sur la Rive-Sud de Montréal"
    },
    {
        id: "haubanage",
        src: haubanageImage,
        alt: "Détail technique d'un système de haubanage dynamique installé dans la couronne supérieure d'un grand érable."
    },
    {
        id: "plantation",
        src: plantationImage,
        alt: "Jeune arbre indigène vigoureux dans la cours avant d'une maison dans un quartier de la Rive-Sud de Montreal."
    },
    {
        id: "diagnostic",
        src: diagnosticImage,
        alt: "Vue de pres du tronc malade d'un arbre dans la cours avant d'une maison dans un quartier de la Rive-Sud de Montreal. "
    },
]


export default function ServicesDetails() {
    return (
        <div className="mx-auto max-w-7xl space-y-12 px-8 py-16 lg:py-24">
            {services.map((service, index) => {

                const image = images.find((image) => image.id === service.id);

                if (!image) {
                    throw new Error(`Missing image for service: ${service.id}`);
                }

                return (
                    <section key={service.id} id={service.id} className="scroll-mt-28 border border-surface-dim bg-surface-container-lowest p-6 shadow-sm transition-shadow duration-300 hover:shadow-md lg:p-12">
                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
                            <div className="flex h-full flex-col justify-between lg:col-span-7">
                                <div>
                                    <div className="font-headline mb-2 flex flex-wrap items-center gap-2">
                                        <span className="text-xl font-bold text-secondary">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="bg-surface-container px-2 py-1 text-[11px] font-semibold tracking-wider text-primary uppercase">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <h2 className="font-headline mb-2 text-3xl leading-tight font-semibold tracking-tight text-primary uppercase sm:text-[40px]">
                                        {service.title}
                                    </h2>

                                    <p className="font-body mb-4 text-lg leading-relaxed text-on-surface-variant">
                                        {service.description}
                                    </p>

                                    <div className="mb-4 border-l-2 border-secondary bg-surface p-4">
                                        <h3 className="mb-1 flex items-center gap-1.5 text-sm font-bold font-headline tracking-wide text-primary uppercase">
                                            <CircleHelp size={18} aria-hidden="true" className="shrink-0 text-secondary" />
                                            Quand envisager ce service
                                        </h3>
                                        <ul className="space-y-1.5 text-[15px] font-body text-on-surface">
                                            {service.when.map((reason) => (
                                                <li key={reason} className="flex items-start gap-2">
                                                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                                    <span>{reason}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-6 bg-surface-container-low p-4">
                                        <div className="flex items-start gap-2">
                                            <service.noteIcon size={20} aria-hidden="true" className="shrink-0 text-secondary" />
                                            <p className="text-sm font-body text-on-surface">
                                                <strong className="font-semibold text-primary">{service.noteLabel}</strong>{" "}
                                                {service.note}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-1">
                                    <Link href={service.href} className="group inline-flex items-center justify-center gap-1 bg-primary px-6 py-2 text-center text-sm font-bold font-headline tracking-wider text-on-primary uppercase shadow-sm transition-colors duration-300 hover:bg-on-secondary-fixed-variant">
                                        <span>{service.cta}</span>
                                        <ArrowRight size={18} aria-hidden="true" className="shrink-0 text-secondary-fixed transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            <div className={`group relative lg:col-span-5 ${index % 2 === 1 ? "lg:order-first" : ""}`}>
                                <div className="relative h-80 w-full overflow-hidden bg-primary-container lg:h-96">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        fetchPriority="high"
                                        placeholder="blur"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}