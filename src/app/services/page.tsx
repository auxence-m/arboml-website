import ServiceHero from "@/components/services/ServiceHero";
import ServicesDetails from "@/components/services/ServicesDetails";
import ServiceCTA from "@/components/services/ServiceCTA";
import {Metadata} from "next";
import ServiceCoverage from "@/components/services/ServiceCoverage";

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
            <ServicesDetails />
            <ServiceCoverage />
            <ServiceCTA />
        </div>
    );
}