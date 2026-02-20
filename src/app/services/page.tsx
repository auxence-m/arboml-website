import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ServiceHero from "@/app/components/ServiceHero";
import ServiceDescription from "@/app/components/ServiceDescription";
import ContactCTA from "@/app/components/ContactCTA";

export default function Services() {
    return (
        <div>
            <Header />
            <main>
                <ServiceHero />
                <ServiceDescription />
                <ContactCTA />
            </main>
            <Footer />
        </div>
    );
}