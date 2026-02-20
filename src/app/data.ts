import {LucideIcon, Axe, Scissors, Sprout, Link, Layers, Bandage, Search} from "lucide-react";

type Service = {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    icon: LucideIcon
}

export const services: Service[] = [
    {
        id: "abattage",
        name: "Abattage",
        description: "Lorsque nécessaire, nous sommes en mesure d’effectuer l’abattage de tout arbre.\n" +
            "\n" +
            "Un permis est parfois exigé par les municipalités.",
        imageSrc: "/abattage-image.jpg",
        icon: Axe,
    },
    {
        id: "elagage",
        name: "Élagage",
        description: "Nous offrons un service professionnel effectué par un élagueur diplômé selon les plus hauts standards de l’industrie.\n" +
            "\n" +
            "Nous utilisons les bonnes techniques de coupe afin de maintenir la santé structurelle de vos arbres.",
        imageSrc: "/elagage-image.jpg",
        icon: Scissors,
    },
    {
        id: "taille-haies",
        name: "Taille de haies",
        description: "Nous offrons un service professionnel de taille de haies effectué par un élagueur diplômé.",
        imageSrc: "/taille-image.jpg",
        icon: Scissors,
    },
    {
        id: "haubanage",
        name: "Haubanage",
        description: "Nous offrons le service d’haubanage pour consolider et renforcer la structure de vos arbres lorsque requis.",
        imageSrc: "/haubanage-image.jpg",
        icon: Link,
    },
    {
        id: "plantation-arbres-arbustes",
        name: "Plantations d’arbres et arbustes",
        description: "Que ce soit pour faire de l’ombre, embellir, ou favoriser l’intimité, la plantation d’arbres et arbustes est une solution à envisager. Ils améliorent la qualité de l’air et rendent les milieux de vie plus sain et plus conviviaux.\n" +
            "\n" +
            "Nous pouvons vous aider à choisir la bonne essence d’arbre ou d’arbuste à planter selon l’endroit.\n" +
            "\n" +
            "Nous offrons le service complet de plantation.",
        imageSrc: "/plantation-image.jpg",
        icon: Sprout,
    },
    {
        id: "fertilisation-decompaction-sol",
        name: "Fertilisation et décompactions de sol",
        description: "Nous offrons un service de fertilisation adapté au besoin de vos arbres et arbustes pour une croissance optimale.",
        imageSrc: "/fertilisation-image.jpg",
        icon: Layers,
    },
    {
        id: "traitement-plaies",
        name: "Traitement de plaies",
        description: "Parfois des blessures se forment sur le tronc et les branches des arbres. Il est alors nécessaire de les traiter afin de prévenir l’infestation d’insectes ou de champignons pouvant mettre en danger leur santé structurelle.",
        imageSrc: "/plaies-image.jpg",
        icon: Bandage,
    },
    {
        id: "diagnostic",
        name: "Diagnostic",
        description: "Si vous croyez qu’un de vos arbres ou arbustes à un problème (maladies ou insectes), nous sommes en mesure de vous fournir un diagnostic et de vous suggérer les traitements appropriés.",
        imageSrc: "/diagnostic-image.jpg",
        icon: Search,
    },
]