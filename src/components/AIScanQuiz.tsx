"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Mail,
  Building2,
  Users,
  Clock,
  ListChecks,
  Bot,
  User,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface QuizAnswers {
  branche: string;
  medewerkers: string;
  adminUren: string;
  taken: string[];
  aiGebruik: string;
  naam: string;
  email: string;
  bedrijf: string;
  telefoon: string;
}

/* ------------------------------------------------------------------ */
/*  Step definitions                                                   */
/* ------------------------------------------------------------------ */

const BRANCHES = [
  "Makelaardij",
  "Bouw",
  "Retail",
  "Horeca",
  "Dienstverlening",
  "Anders",
];

const MEDEWERKERS = ["1 – 5", "6 – 15", "16 – 50", "50+"];

const ADMIN_UREN = ["0 – 5 uur", "5 – 15 uur", "15 – 30 uur", "30+ uur"];

const TAKEN = [
  "Klantcommunicatie",
  "Offertes",
  "Planning",
  "Facturatie",
  "Klantenwerving",
  "Data invoer",
];

const AI_GEBRUIK = ["Ja, actief", "Een beetje", "Nee", "Weet ik niet"];

const TOTAL_STEPS = 6;

/* ------------------------------------------------------------------ */
/*  Score & recommendations logic                                      */
/* ------------------------------------------------------------------ */

function calculateScore(answers: QuizAnswers): number {
  let adminScore = 0;
  switch (answers.adminUren) {
    case "0 – 5 uur":
      adminScore = 15;
      break;
    case "5 – 15 uur":
      adminScore = 30;
      break;
    case "15 – 30 uur":
      adminScore = 50;
      break;
    case "30+ uur":
      adminScore = 65;
      break;
  }

  const taskScore = answers.taken.length * 5;

  let aiScore = 0;
  switch (answers.aiGebruik) {
    case "Ja, actief":
      aiScore = 0;
      break;
    case "Een beetje":
      aiScore = 5;
      break;
    case "Nee":
      aiScore = 15;
      break;
    case "Weet ik niet":
      aiScore = 10;
      break;
  }

  const raw = adminScore + taskScore + aiScore;
  const normalized = Math.round(25 + ((raw - 15) / (110 - 15)) * 72);
  return Math.max(25, Math.min(97, normalized));
}

const TASK_RECOMMENDATIONS: Record<string, string> = {
  Klantcommunicatie:
    "AI-chatbot voor 24/7 klantcommunicatie. Bespaar tot 10 uur per week op e-mails en berichten.",
  Offertes:
    "Geautomatiseerde offerte-generator. Van aanvraag naar professionele offerte in minuten.",
  Planning:
    "Slimme planning-assistent. Automatisch roosteren, afspraken inplannen en herinneringen versturen.",
  Facturatie:
    "Automatische facturatie-flow. Facturen aanmaken, versturen en opvolgen zonder handwerk.",
  Klantenwerving:
    "AI-gestuurde leadgeneratie. Automatisch nieuwe klanten identificeren en bereiken.",
  "Data invoer":
    "Intelligente data-extractie. Documenten en formulieren automatisch verwerken en invoeren.",
};

const GENERIC_RECOMMENDATIONS = [
  "Workflow-automatisering op maat. Verbind uw bestaande tools en elimineer handmatige tussenstappen.",
  "AI-dashboard met real-time inzichten. Krijg direct overzicht van uw belangrijkste bedrijfsdata.",
  "Slimme e-mailautomatisering. Automatisch opvolgen, categoriseren en beantwoorden van berichten.",
];

function getRecommendations(answers: QuizAnswers): string[] {
  const recs: string[] = [];

  for (const task of answers.taken) {
    if (TASK_RECOMMENDATIONS[task] && recs.length < 3) {
      recs.push(TASK_RECOMMENDATIONS[task]);
    }
  }

  let i = 0;
  while (recs.length < 3 && i < GENERIC_RECOMMENDATIONS.length) {
    recs.push(GENERIC_RECOMMENDATIONS[i]);
    i++;
  }

  return recs.slice(0, 3);
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function ProgressBar({ step }: { step: number }) {
  const progress = ((step + 1) / TOTAL_STEPS) * 100;
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-[11px] font-mono tracking-wider uppercase text-warm-600 mb-2">
        <span>
          Stap {step + 1} van {TOTAL_STEPS}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1 w-full bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
        selected
          ? "bg-brand-900/20 border-brand-700/40 text-warm-100 shadow-lg shadow-brand-900/10"
          : "bg-dark-800/20 border-warm-800/15 text-warm-400 hover:border-warm-700/25 hover:bg-dark-800/30"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            selected ? "border-brand-400 bg-brand-500" : "border-warm-700"
          }`}
        >
          {selected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-2 h-2 bg-white rounded-full"
            />
          )}
        </div>
        <span className="font-medium text-sm">{label}</span>
      </div>
    </motion.button>
  );
}

function MultiSelectButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
        selected
          ? "bg-brand-900/20 border-brand-700/40 text-warm-100 shadow-lg shadow-brand-900/10"
          : "bg-dark-800/20 border-warm-800/15 text-warm-400 hover:border-warm-700/25 hover:bg-dark-800/30"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
            selected
              ? "border-brand-400 bg-brand-500"
              : "border-warm-700"
          }`}
        >
          {selected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
        </div>
        <span className="font-medium text-sm">{label}</span>
      </div>
    </motion.button>
  );
}

function AnimatedScore({ score }: { score: number }) {
  const [displayScore, setDisplayScore] = useState(0);

  useState(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= score) {
        current = score;
        clearInterval(interval);
      }
      setDisplayScore(current);
    }, 20);
    return () => clearInterval(interval);
  });

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;

  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg className="w-40 h-40 -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          className="text-dark-800"
          strokeWidth="6"
          fill="none"
        />
        <motion.circle
          cx="60"
          cy="60"
          r="54"
          stroke="url(#scoreGradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          style={{ strokeDasharray: circumference }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a6b52" />
            <stop offset="100%" stopColor="#3ba683" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="font-display text-4xl font-800 text-warm-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {displayScore}%
        </motion.span>
        <span className="text-[10px] font-mono tracking-wider uppercase text-warm-600 mt-1">potentieel</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step icon map                                                      */
/* ------------------------------------------------------------------ */

const STEP_ICONS = [Building2, Users, Clock, ListChecks, Bot, User];

/* ------------------------------------------------------------------ */
/*  Slide animation variants                                           */
/* ------------------------------------------------------------------ */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function AIScanQuiz() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>({
    branche: "",
    medewerkers: "",
    adminUren: "",
    taken: [],
    aiGebruik: "",
    naam: "",
    email: "",
    bedrijf: "",
    telefoon: "",
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>(
    {}
  );

  const canProceed = useCallback((): boolean => {
    switch (step) {
      case 0:
        return answers.branche !== "";
      case 1:
        return answers.medewerkers !== "";
      case 2:
        return answers.adminUren !== "";
      case 3:
        return answers.taken.length > 0;
      case 4:
        return answers.aiGebruik !== "";
      case 5:
        return answers.naam.trim() !== "" && answers.email.trim() !== "";
      default:
        return false;
    }
  }, [step, answers]);

  const goNext = () => {
    if (step === 5) {
      const errs: Record<string, string> = {};
      if (!answers.naam.trim()) errs.naam = "Naam is verplicht";
      if (!answers.email.trim()) errs.email = "E-mail is verplicht";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email))
        errs.email = "Voer een geldig e-mailadres in";
      if (Object.keys(errs).length > 0) {
        setContactErrors(errs);
        return;
      }
      setContactErrors({});
      setDone(true);
      return;
    }
    if (!canProceed()) return;
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step === 0) return;
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const toggleTask = (task: string) => {
    setAnswers((prev) => ({
      ...prev,
      taken: prev.taken.includes(task)
        ? prev.taken.filter((t) => t !== task)
        : [...prev.taken, task],
    }));
  };

  const score = calculateScore(answers);
  const recommendations = getRecommendations(answers);

  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmitForm = async () => {
    setSubmitStatus("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/melvinthewebdesigner@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `🤖 AI-Scan aanvraag ${answers.bedrijf || answers.naam} (Score: ${score}%)`,
          Naam: answers.naam,
          Email: answers.email,
          Bedrijf: answers.bedrijf || "Niet ingevuld",
          Telefoon: answers.telefoon || "Niet ingevuld",
          Branche: answers.branche,
          Medewerkers: answers.medewerkers,
          "Admin-uren per week": answers.adminUren,
          "Tijdrovende taken": answers.taken.join(", "),
          "AI-gebruik": answers.aiGebruik,
          "Automatiseringsscore": `${score}%`,
          "Aanbevelingen": recommendations.join(" | "),
          _template: "table",
        }),
      });
      const data = await response.json();
      if (data.success === "true" || data.success === true) {
        setSubmitStatus("sent");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  /* ---------------------------------------------------------------- */
  /*  Results screen                                                   */
  /* ---------------------------------------------------------------- */

  if (done) {
    return (
      <SectionWrapper id="contact" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-brand-950/10 to-dark-950" />
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl warm-card backdrop-blur-xl shadow-2xl shadow-brand-900/5">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-mono tracking-[0.15em] uppercase text-brand-400 bg-brand-900/20 border border-brand-800/20 rounded-full mb-5"
                >
                  <Sparkles className="w-3 h-3" />
                  Uw AI-Scan Resultaat
                </motion.div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-800 text-warm-50 mb-2">
                  Automatiseringspotentieel
                </h2>
                <p className="text-sm sm:text-base text-warm-500 font-light">
                  Op basis van uw antwoorden zien we volop kansen
                </p>
              </div>

              {/* Score circle */}
              <AnimatedScore score={score} />

              {/* Recommendations */}
              <div className="mt-10 space-y-3">
                <h3 className="font-display text-lg font-700 text-warm-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-400" />
                  Onze top 3 aanbevelingen
                </h3>
                {recommendations.map((rec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.15 }}
                    className="flex gap-3 p-4 rounded-xl bg-dark-800/30 border border-warm-800/10"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-900/30 flex items-center justify-center mt-0.5">
                      <span className="text-[10px] font-mono font-medium text-brand-400">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-warm-300 text-sm leading-relaxed font-light">
                      {rec}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="mt-10 text-center"
              >
                {submitStatus === "sent" ? (
                  <div className="p-6 rounded-xl bg-brand-900/15 border border-brand-800/20">
                    <CheckCircle2 className="w-8 h-8 text-brand-400 mx-auto mb-3" />
                    <p className="text-warm-100 font-medium mb-1">Verstuurd!</p>
                    <p className="text-sm text-warm-500 font-light">
                      We nemen zo snel mogelijk contact met u op voor een gratis AI-Scan gesprek.
                    </p>
                  </div>
                ) : submitStatus === "error" ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-accent-900/15 border border-accent-800/20">
                      <p className="text-sm text-accent-300 font-light">
                        Er ging iets mis. Probeer het opnieuw of mail ons direct.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleSubmitForm}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all"
                      >
                        Opnieuw proberen
                      </button>
                      <a
                        href="mailto:melvinthewebdesigner@gmail.com"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-warm-800/20 text-warm-400 hover:text-warm-200 rounded-xl transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        Direct mailen
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={handleSubmitForm}
                      disabled={submitStatus === "sending"}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 disabled:bg-brand-800 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-600/20 hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:cursor-wait min-h-[56px]"
                    >
                      {submitStatus === "sending" ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Versturen...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          Gratis AI-Scan Gesprek Inplannen
                        </>
                      )}
                    </button>
                    <p className="text-[11px] font-mono tracking-wider text-warm-700 mt-4">
                      30 minuten vrijblijvend gesprek + concreet rapport
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Quiz steps                                                       */
  /* ---------------------------------------------------------------- */

  const StepIcon = STEP_ICONS[step];

  const stepTitles = [
    "In welke branche is uw bedrijf actief?",
    "Hoeveel medewerkers heeft uw bedrijf?",
    "Hoeveel uur per week besteedt u aan administratie?",
    "Welke taken kosten de meeste tijd?",
    "Maakt u al gebruik van AI-tools?",
    "Uw contactgegevens",
  ];

  const stepDescriptions = [
    "Dit helpt ons om branche-specifieke aanbevelingen te doen.",
    "De bedrijfsgrootte bepaalt welke automatiseringen het meest impact hebben.",
    "Hoe meer administratie, hoe groter het besparingspotentieel.",
    "Selecteer alle taken die van toepassing zijn.",
    "We stemmen onze aanbevelingen af op uw huidige situatie.",
    "Vul uw gegevens in zodat we contact kunnen opnemen.",
  ];

  return (
    <SectionWrapper id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-brand-950/10 to-dark-950" />

      <div className="relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-brand-400 bg-brand-900/20 border border-brand-800/20 rounded-full mb-5">
            Gratis AI-Scan
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-800 text-warm-50 text-balance">
            Ontdek uw automatiseringspotentieel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-warm-500 max-w-2xl mx-auto text-balance px-2 font-light">
            Beantwoord 6 korte vragen en ontvang direct een persoonlijke
            AI-score met concrete aanbevelingen voor uw bedrijf.
          </p>
        </motion.div>

        {/* Quiz card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-5 sm:p-8 md:p-10 rounded-2xl warm-card backdrop-blur-xl shadow-2xl shadow-brand-900/5">
            <ProgressBar step={step} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* Step header */}
                <div className="flex items-start sm:items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-brand-900/20 border border-brand-800/20 flex items-center justify-center">
                    <StepIcon className="w-5 h-5 text-brand-400" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-700 text-warm-100">
                    {stepTitles[step]}
                  </h3>
                </div>
                <p className="text-sm text-warm-500 mb-6 ml-0 sm:ml-[52px] font-light">
                  {stepDescriptions[step]}
                </p>

                {/* Step content */}
                <div className="space-y-3">
                  {step === 0 &&
                    BRANCHES.map((b) => (
                      <OptionButton
                        key={b}
                        label={b}
                        selected={answers.branche === b}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, branche: b }))
                        }
                      />
                    ))}

                  {step === 1 &&
                    MEDEWERKERS.map((m) => (
                      <OptionButton
                        key={m}
                        label={m}
                        selected={answers.medewerkers === m}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, medewerkers: m }))
                        }
                      />
                    ))}

                  {step === 2 &&
                    ADMIN_UREN.map((u) => (
                      <OptionButton
                        key={u}
                        label={u}
                        selected={answers.adminUren === u}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, adminUren: u }))
                        }
                      />
                    ))}

                  {step === 3 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {TAKEN.map((t) => (
                        <MultiSelectButton
                          key={t}
                          label={t}
                          selected={answers.taken.includes(t)}
                          onClick={() => toggleTask(t)}
                        />
                      ))}
                    </div>
                  )}

                  {step === 4 &&
                    AI_GEBRUIK.map((a) => (
                      <OptionButton
                        key={a}
                        label={a}
                        selected={answers.aiGebruik === a}
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, aiGebruik: a }))
                        }
                      />
                    ))}

                  {step === 5 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-warm-400 mb-2">
                          Naam *
                        </label>
                        <input
                          type="text"
                          value={answers.naam}
                          onChange={(e) => {
                            setAnswers((prev) => ({
                              ...prev,
                              naam: e.target.value,
                            }));
                            setContactErrors((prev) => ({
                              ...prev,
                              naam: "",
                            }));
                          }}
                          placeholder="Uw volledige naam"
                          className={`w-full px-4 py-3 rounded-xl bg-dark-800/30 border ${
                            contactErrors.naam
                              ? "border-accent-600/50"
                              : "border-warm-800/20"
                          } text-warm-100 placeholder-warm-700 focus:outline-none focus:border-brand-600/50 focus:ring-1 focus:ring-brand-600/20 transition-all`}
                        />
                        {contactErrors.naam && (
                          <p className="mt-1 text-xs text-accent-400">
                            {contactErrors.naam}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-warm-400 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          value={answers.email}
                          onChange={(e) => {
                            setAnswers((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }));
                            setContactErrors((prev) => ({
                              ...prev,
                              email: "",
                            }));
                          }}
                          placeholder="uw@email.nl"
                          className={`w-full px-4 py-3 rounded-xl bg-dark-800/30 border ${
                            contactErrors.email
                              ? "border-accent-600/50"
                              : "border-warm-800/20"
                          } text-warm-100 placeholder-warm-700 focus:outline-none focus:border-brand-600/50 focus:ring-1 focus:ring-brand-600/20 transition-all`}
                        />
                        {contactErrors.email && (
                          <p className="mt-1 text-xs text-accent-400">
                            {contactErrors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-warm-400 mb-2">
                          Bedrijfsnaam
                        </label>
                        <input
                          type="text"
                          value={answers.bedrijf}
                          onChange={(e) =>
                            setAnswers((prev) => ({
                              ...prev,
                              bedrijf: e.target.value,
                            }))
                          }
                          placeholder="Uw bedrijfsnaam"
                          className="w-full px-4 py-3 rounded-xl bg-dark-800/30 border border-warm-800/20 text-warm-100 placeholder-warm-700 focus:outline-none focus:border-brand-600/50 focus:ring-1 focus:ring-brand-600/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-warm-400 mb-2">
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          value={answers.telefoon}
                          onChange={(e) =>
                            setAnswers((prev) => ({
                              ...prev,
                              telefoon: e.target.value,
                            }))
                          }
                          placeholder="+31 6 12345678"
                          className="w-full px-4 py-3 rounded-xl bg-dark-800/30 border border-warm-800/20 text-warm-100 placeholder-warm-700 focus:outline-none focus:border-brand-600/50 focus:ring-1 focus:ring-brand-600/20 transition-all"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-warm-800/10">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-warm-500 hover:text-warm-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Vorige
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-6 py-2.5 bg-brand-600 hover:bg-brand-500 disabled:bg-dark-700 disabled:text-warm-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/20 hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed"
              >
                {step === 5 ? "Bekijk resultaat" : "Volgende"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
