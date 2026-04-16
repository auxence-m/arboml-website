import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactCTA from "@/components/ContactCTA";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact',
    alternates: {
        canonical: "/contact",
    }
};

export default function Contact() {
    return (
        <div>
            <ContactHero />
            <ContactForm />
            <ContactCTA />
        </div>
    );
}