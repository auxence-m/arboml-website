import ServicesHero from "@/components/services/ServicesHero";
import ServicesDetails from "@/components/services/ServicesDetails";
import ServicesCTA from "@/components/services/ServicesCTA";
import {Metadata} from "next";
import ServicesAreas from "@/components/services/ServicesAreas";

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
            <ServicesHero />
            <ServicesDetails />
            <ServicesCTA />
            <ServicesAreas />
        </div>
    );
}