"use client";

import { Zap, Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-4">
              <div className="relative">
                <Zap className="w-7 h-7 text-brand-400" />
                <div className="absolute inset-0 w-7 h-7 bg-brand-400/20 rounded-full blur-lg" />
              </div>
              <span className="text-lg font-bold text-white">
                John<span className="text-brand-400">Automations</span>
              </span>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed max-w-md mb-6">
              AI-specialist voor het Nederlandse MKB. Wij bouwen op maat
              gemaakte AI-oplossingen en automatiseringen die uw bedrijf
              transformeren.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:john.automations.nl@gmail.com"
                aria-label="E-mail"
                className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-brand-500/10 border border-dark-700 hover:border-brand-500/30 flex items-center justify-center text-dark-400 hover:text-brand-400 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/john-berends"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-brand-500/10 border border-dark-700 hover:border-brand-500/30 flex items-center justify-center text-dark-400 hover:text-brand-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/john.automations"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-brand-500/10 border border-dark-700 hover:border-brand-500/30 flex items-center justify-center text-dark-400 hover:text-brand-400 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/AutomationsJohn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-brand-500/10 border border-dark-700 hover:border-brand-500/30 flex items-center justify-center text-dark-400 hover:text-brand-400 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Navigatie
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#pijnpunten", label: "Uitdagingen" },
                { href: "#oplossing", label: "Oplossing" },
                { href: "#diensten", label: "Diensten" },
                { href: "#werkwijze", label: "Werkwijze" },
                { href: "#contact", label: "AI-Scan" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:john.automations.nl@gmail.com"
                  className="text-sm text-dark-400 hover:text-brand-400 transition-colors"
                >
                  john.automations.nl@gmail.com
                </a>
              </li>
              <li className="text-sm text-dark-400">Nederland</li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
                >
                  Gratis AI-Scan Aanvragen
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500">
            &copy; {new Date().getFullYear()} John Automations. Alle rechten
            voorbehouden.
          </p>
          <p className="text-xs text-dark-600">
            AI-Specialist &middot; Custom Software &middot; Automatisering
          </p>
        </div>
      </div>
    </footer>
  );
}
