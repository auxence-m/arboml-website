import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import EstimateCTA from "@/app/components/EstimateCTA";
import Questions from "@/app/components/Questions";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <EstimateCTA/>
                <Questions/>
            </main>
            <Footer/>
        </div>
    );
}
