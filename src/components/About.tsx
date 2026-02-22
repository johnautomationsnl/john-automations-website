"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Users, Coffee } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const highlights = [
  {
    icon: MapPin,
    label: "Zuid-Limburg",
    desc: "Lokaal & persoonlijk",
  },
  {
    icon: Zap,
    label: "AI-First",
    desc: "Altijd de nieuwste technologie",
  },
  {
    icon: Users,
    label: "MKB-Focus",
    desc: "Gebouwd voor ondernemers",
  },
  {
    icon: Coffee,
    label: "Persoonlijk",
    desc: "Geen callcenter, direct contact",
  },
];

export default function About() {
  return (
    <SectionWrapper id="over" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/5 to-transparent" />

      <div className="relative">
        <SectionHeader
          badge="Over Melvin Automations"
          title="De mens achter de technologie"
          description=""
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-9 rounded-2xl warm-card"
          >
            <div className="space-y-4 text-warm-400 leading-relaxed font-light">
              <p className="text-base sm:text-lg">
                Hey! Ik ben <span className="text-warm-100 font-medium">Melvin</span>. Ik bouw
                AI-automatiseringen voor ondernemers in het MKB. Gewoon vanuit{" "}
                <span className="text-brand-400">Zuid-Limburg</span>, voor bedrijven zoals die van jou.
              </p>
              <p className="text-base sm:text-lg">
                Ik zie elke dag hoe ondernemers{" "}
                <span className="text-warm-100">uren verspillen</span> aan dingen die een computer
                in seconden kan afhandelen. Van leads opvolgen tot gegevens overtypen. Dat kan zoveel
                beter. En dat is precies wat ik bouw.
              </p>
              <p className="text-base sm:text-lg">
                Geen standaard pakketten. Alles wat ik maak is{" "}
                <span className="text-brand-400">specifiek voor jouw bedrijf</span>.
                En het mooiste: jij hoeft nergens verstand van te hebben. Dat is mijn werk, niet het jouwe.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-warm-800/15">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-900/20 flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <p className="text-sm font-medium text-warm-200">{item.label}</p>
                  <p className="text-[11px] text-warm-600 mt-0.5 font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
