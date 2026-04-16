import ServiceHero from "@/components/ServiceHero";
import ServiceDescription from "@/components/ServiceDescription";
import ServiceCTA from "@/components/ServiceCTA";
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