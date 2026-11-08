import Hero from "@/components/Hero";
import WhyArboML from "@/components/WhyArboML";
import EstimateCTA from "@/components/EstimateCTA";
import ServicesOverview from "@/components/ServicesOverview";
import AreasOverview from "@/components/AreasOverview";
import FAQuestions from "@/components/FAQuestions";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Services d'entretien d'arbres sur la Rive-Sud de Montréal",
    description: "Services d'entretien d'arbres (élagage, abattage, taille de haies, haubanage, plantation etc.) sur la Rive-Sud de Montréal. La soumission gratuite, contactez nous dès aujourd’hui.",
    alternates: {
        canonical: "https://www.arboml.ca/",
    }
}

export default function Home() {
    return (
        <div>
            <Hero />
            <ServicesOverview />
            <WhyArboML />
            <AreasOverview />
            <EstimateCTA />
            <FAQuestions />

        </div>
    );
}
