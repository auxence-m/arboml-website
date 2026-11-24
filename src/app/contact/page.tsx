import ContactHero from "@/components/contact/ContactHero";
import {Metadata} from "next";
import ContactMain from "@/components/contact/ContactMain";

export const metadata: Metadata = {
    title: "Contactez-nous",
    description: "Contactez ArboML pour vos besoins en entretien, élagage, abattage et plantation d’arbres sur la Rive-Sud de Montréal. Demandez une soumission gratuite dès aujourd’hui.",
    alternates: {
        canonical: "https://www.arboml.ca/contact",
    }
};

export default function Contact() {
    return (
        <div>
            <ContactHero />
            <ContactMain />
        </div>
    );
}