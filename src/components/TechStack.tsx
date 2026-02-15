"use client";

import { Marquee } from "./magicui/marquee";
import { MessageSquare, Brain, Code2, Palette, Workflow, Zap, Terminal } from "lucide-react";

const tools = [
  { name: "WhatsApp", icon: MessageSquare, color: "text-green-400" },
  { name: "OpenAI", icon: Brain, color: "text-brand-400" },
  { name: "Next.js", icon: Code2, color: "text-warm-200" },
  { name: "Tailwind", icon: Palette, color: "text-cyan-400" },
  { name: "Make", icon: Workflow, color: "text-purple-400" },
  { name: "Zapier", icon: Zap, color: "text-orange-400" },
  { name: "Python", icon: Terminal, color: "text-yellow-400" },
];

function ToolCard({ name, icon: Icon, color }: typeof tools[0]) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-warm-800/40 bg-dark-900/60 px-5 py-3 backdrop-blur-sm">
      <Icon className={`w-5 h-5 ${color}`} />
      <span className="text-sm font-medium text-warm-300">{name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="relative py-12 overflow-hidden border-t border-warm-900/30">
      <div className="absolute inset-0 warm-gradient-bg opacity-50" />
      <div className="relative z-10">
        <p className="text-center text-xs font-mono tracking-[0.2em] uppercase text-warm-600 mb-6">
          Technologieën die wij inzetten
        </p>
        <Marquee pauseOnHover className="[--duration:25s]">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
