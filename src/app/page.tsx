import Hero from "@/components/homepage/Hero";
import WhyArboML from "@/components/homepage/WhyArboML";
import HomeCTA from "@/components/homepage/HomeCTA";
import ServicesList from "@/components/homepage/ServicesList";
import AreasOverview from "@/components/homepage/AreasOverview";
import FAQuestions from "@/components/homepage/FAQuestions";
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
            <ServicesList />
            <WhyArboML />
            <AreasOverview />
            <HomeCTA />
            <FAQuestions />

        </div>
    );
}
