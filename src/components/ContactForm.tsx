"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Naam is verplicht";
  }

  if (!data.email.trim()) {
    errors.email = "E-mail is verplicht";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Voer een geldig e-mailadres in";
  }

  if (!data.company.trim()) {
    errors.company = "Bedrijfsnaam is verplicht";
  }

  if (data.phone && !/^[+]?[\d\s()-]{6,}$/.test(data.phone)) {
    errors.phone = "Voer een geldig telefoonnummer in";
  }

  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);

    // Simulate form submission (replace with actual API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SectionWrapper id="contact" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-brand-950/20 to-dark-950" />
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center p-12 rounded-2xl bg-dark-900/50 border border-dark-800"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Bedankt voor uw aanvraag!
            </h3>
            <p className="text-dark-400">
              We nemen binnen 24 uur contact met u op om uw gratis AI-Scan in te
              plannen. Check ook uw inbox voor een bevestiging.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-brand-950/20 to-dark-950" />

      <div className="relative">
        <SectionHeader
          badge="Gratis AI-Scan"
          title="Klaar om te automatiseren?"
          description="Vraag een gratis AI-Scan aan. 30 minuten gesprek + een concreet rapport met aanbevelingen voor uw bedrijf. Vrijblijvend en zonder verplichtingen."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl bg-dark-900/50 border border-dark-800 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-300 mb-2"
                >
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Uw volledige naam"
                  className={`w-full px-4 py-3 rounded-xl bg-dark-800/50 border ${
                    errors.name ? "border-red-500/50" : "border-dark-700"
                  } text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-300 mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="uw@email.nl"
                  className={`w-full px-4 py-3 rounded-xl bg-dark-800/50 border ${
                    errors.email ? "border-red-500/50" : "border-dark-700"
                  } text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-dark-300 mb-2"
                >
                  Bedrijfsnaam *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Uw bedrijfsnaam"
                  className={`w-full px-4 py-3 rounded-xl bg-dark-800/50 border ${
                    errors.company ? "border-red-500/50" : "border-dark-700"
                  } text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all`}
                />
                {errors.company && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.company}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-dark-300 mb-2"
                >
                  Telefoon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+31 6 12345678"
                  className={`w-full px-4 py-3 rounded-xl bg-dark-800/50 border ${
                    errors.phone ? "border-red-500/50" : "border-dark-700"
                  } text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark-300 mb-2"
              >
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Vertel ons kort over uw bedrijf en welke processen u wilt automatiseren..."
                className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 disabled:bg-brand-600/50 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/25 hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Versturen...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Gratis AI-Scan Aanvragen
                </>
              )}
            </button>

            <p className="text-xs text-dark-500 text-center">
              Door dit formulier in te vullen gaat u akkoord met onze
              privacyvoorwaarden. We delen uw gegevens nooit met derden.
            </p>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
