import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import EstimateCTA from "@/app/components/EstimateCTA";
import Questions from "@/app/components/Questions";

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
