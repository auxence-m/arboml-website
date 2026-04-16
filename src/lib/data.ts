import {LucideIcon, Axe, Scissors, Sprout, Link, Layers, Search} from "lucide-react";

type Service = {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
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
        imageWidth: 4032,
        imageHeight: 2268,
        icon: Axe,
    },
    {
        id: "elagage",
        name: "Élagage",
        description: "Nous offrons un service professionnel effectué par un élagueur diplômé selon les plus hauts standards de l’industrie.\n" +
            "\n" +
            "Nous utilisons les bonnes techniques de coupe afin de maintenir la santé structurelle de vos arbres.",
        imageSrc: "/elagage-image.jpg",
        imageWidth: 4032,
        imageHeight: 2268,
        icon: Scissors,
    },
    {
        id: "tailles",
        name: "Tailles",
        description: "Nous offrons un service professionnel de tailles (taille de haies, tailles de formation, etc.) effectué par un élagueur diplômé.",
        imageSrc: "/taille-image.jpg",
        imageWidth: 4032,
        imageHeight: 2268,
        icon: Scissors,
    },
    {
        id: "haubanage",
        name: "Haubanage",
        description: "Nous offrons le service d’haubanage pour consolider et renforcer la structure de vos arbres lorsque requis.",
        imageSrc: "/haubanage-image.jpg",
        imageWidth: 2048,
        imageHeight: 1536,
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
        imageWidth: 4032,
        imageHeight: 2268,
        icon: Sprout,
    },
    {
        id: "fertilisation-decompaction-sol",
        name: "Fertilisation et décompactions de sol",
        description: "Nous offrons un service de fertilisation adapté au besoin de vos arbres et arbustes pour une croissance optimale.",
        imageSrc: "/fertilisation-image.jpg",
        imageWidth: 4032,
        imageHeight: 3024,
        icon: Layers,
    },
    {
        id: "diagnostic",
        name: "Diagnostic",
        description: "Si vous croyez qu’un de vos arbres ou arbustes à un problème (maladies ou insectes), nous sommes en mesure de vous fournir un diagnostic et de vous suggérer les traitements appropriés.",
        imageSrc: "/diagnostic-image.jpg",
        imageWidth: 1536,
        imageHeight: 864,
        icon: Search,
    },
]