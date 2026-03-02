import ContactHero from "@/app/components/ContactHero";
import ContactForm from "@/app/components/ContactForm";
import ContactCTA from "@/app/components/ContactCTA";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact',
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