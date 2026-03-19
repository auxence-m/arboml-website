import ServiceHero from "@/app/components/ServiceHero";
import ServiceDescription from "@/app/components/ServiceDescription";
import ServiceCTA from "@/app/components/ServiceCTA";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Services',
    alternates: {
        canonical: "/services",
    }
};

export default function Services() {
    return (
        <div>
            <ServiceHero />
            <ServiceDescription />
            <ServiceCTA />
        </div>
    );
}