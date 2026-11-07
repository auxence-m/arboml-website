import Hero from "@/components/Hero";
import About from "@/components/About";
import EstimateCTA from "@/components/EstimateCTA";
import Questions from "@/components/Questions";
import {Metadata} from "next";
import ServicesOverview from "@/components/ServicesOverview";

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
            <About />
            <EstimateCTA />
            <Questions />
        </div>
    );
}
