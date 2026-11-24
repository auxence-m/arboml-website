import {
    EmailCard,
    EstimateCard,
    PhoneCard,
    ServiceAreaCard,
    SocialReviewsCard
} from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactMain() {
    return (
        <section className="w-full py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 flex flex-col h-full gap-4">
                        <PhoneCard />
                        <EmailCard />
                        <SocialReviewsCard />
                        <ServiceAreaCard />
                        <EstimateCard />
                    </div>
                    <div className="lg:col-span-7 h-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}