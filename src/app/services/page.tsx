import ServiceHero from "@/components/ServiceHero";
import ServiceDescription from "@/components/ServiceDescription";
import ServiceCTA from "@/components/ServiceCTA";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Nos services',
    description: "Découvrez les services d’entretien, d’élagage, d’abattage, de plantation d’arbres et de tailles de haies de ArboML sur la Rive-Sud de Montréal. Demandez une soumission gratuite dès aujourd’hui.",
    alternates: {
        canonical: "https://www.arboml.ca/services",
    }
};

export default function Services() {
    return (
        <div>
            <ServiceHero />
            <ServiceDescription />
            <ServiceCTA />
        </div>
    );
}