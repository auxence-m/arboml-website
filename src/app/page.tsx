import Hero from "@/components/Hero";
import About from "@/components/About";
import EstimateCTA from "@/components/EstimateCTA";
import Questions from "@/components/Questions";
import {Metadata} from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "/",
    }
}

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <EstimateCTA />
            <Questions />
        </div>
    );
}
