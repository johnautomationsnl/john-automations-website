"use client";

import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-warm-800/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <span className="text-white font-display font-800 text-sm">M</span>
              </div>
              <span className="font-display text-lg font-700 text-warm-50">
                Melvin<span className="text-brand-400">.</span>
              </span>
            </a>
            <p className="text-warm-500 text-sm leading-relaxed max-w-md mb-6 font-light">
              AI-specialist voor het Nederlandse MKB. Wij bouwen op maat
              gemaakte AI-oplossingen en automatiseringen die uw bedrijf
              transformeren.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="mailto:melvinthewebdesigner@gmail.com"
                aria-label="E-mail"
                className="w-9 h-9 rounded-lg bg-dark-800/40 hover:bg-brand-900/30 border border-warm-800/10 hover:border-brand-800/20 flex items-center justify-center text-warm-500 hover:text-brand-400 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/melvin-jongen-86039a3ab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-dark-800/40 hover:bg-brand-900/30 border border-warm-800/10 hover:border-brand-800/20 flex items-center justify-center text-warm-500 hover:text-brand-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/melvin.automations"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-dark-800/40 hover:bg-brand-900/30 border border-warm-800/10 hover:border-brand-800/20 flex items-center justify-center text-warm-500 hover:text-brand-400 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/AutomationsJohn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-lg bg-dark-800/40 hover:bg-brand-900/30 border border-warm-800/10 hover:border-brand-800/20 flex items-center justify-center text-warm-500 hover:text-brand-400 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-mono tracking-[0.15em] uppercase text-warm-400 mb-4">
              Navigatie
            </h3>
            <ul className="space-y-2.5">
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
                    className="text-sm text-warm-600 hover:text-brand-400 transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-mono tracking-[0.15em] uppercase text-warm-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:melvinthewebdesigner@gmail.com"
                  className="text-sm text-warm-600 hover:text-brand-400 transition-colors font-light"
                >
                  melvinthewebdesigner@gmail.com
                </a>
              </li>
              <li className="text-sm text-warm-600 font-light">Nederland</li>
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
        <div className="mt-10 pt-8 border-t border-warm-800/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-warm-700 font-light">
            &copy; {new Date().getFullYear()} Melvin Automations. Alle rechten
            voorbehouden.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/voorwaarden"
              className="text-[11px] text-warm-600 hover:text-brand-400 transition-colors font-light"
            >
              Algemene Voorwaarden
            </a>
            <p className="text-[11px] text-warm-800 font-mono tracking-wider">
              AI-Specialist &middot; Custom Software &middot; Automatisering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
