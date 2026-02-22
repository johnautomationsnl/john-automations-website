import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import StatsBar from "@/components/StatsBar";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import AIEmployee from "@/components/AIEmployee";
import Services from "@/components/Services";
import WhatsAppAssistant from "@/components/WhatsAppAssistant";
import IndustryPages from "@/components/IndustryPages";
import HowItWorks from "@/components/HowItWorks";
import WhyCustom from "@/components/WhyCustom";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import AIScanQuiz from "@/components/AIScanQuiz";
import DemoCTA from "@/components/DemoCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <StatsBar />
        <PainPoints />
        <Solution />
        <AIEmployee />
        <Services />
        <WhatsAppAssistant />
        <IndustryPages />
        <HowItWorks />
        <WhyCustom />
        <CaseStudies />
        <About />
        <AIScanQuiz />
        <DemoCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
