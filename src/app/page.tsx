import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import AIScanQuiz from "@/components/AIScanQuiz";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Services />
        <HowItWorks />
        <AIScanQuiz />
      </main>
      <Footer />
    </>
  );
}
