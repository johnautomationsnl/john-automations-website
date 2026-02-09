import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import SubsidyBanner from "@/components/SubsidyBanner";
import Services from "@/components/Services";
import IndustryPages from "@/components/IndustryPages";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import AIScanQuiz from "@/components/AIScanQuiz";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <SubsidyBanner />
        <Services />
        <IndustryPages />
        <HowItWorks />
        <CaseStudies />
        <Pricing />
        <About />
        <AIScanQuiz />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
