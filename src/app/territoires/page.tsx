import {Metadata} from "next";
import CitiesHero from "@/components/cities/CitiesHero";
import CitiesDirectory from "@/components/cities/CitiesDirectory";
import CitiesCTA from "@/components/cities/CitiesCTA";
import CitiesFAQ from "@/components/cities/CitiesFAQ";


export const metadata: Metadata = {
    title: "",
    description: "",
    alternates: {
        canonical: "https://www.arboml.ca/territoires",
    }
};


export default function Territoires() {
    return (
        <div>
            <CitiesHero />
            <CitiesDirectory />
            <CitiesCTA />
            <CitiesFAQ />
        </div>
    )
}