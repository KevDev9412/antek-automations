"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How is this different from BuilderTrend or Procore?",
    answer:
      "BuilderTrend and Procore are project management platforms — they organize your workflow but can't search inside PDFs or automate repetitive tasks. Our systems integrate with your existing software to add the capabilities they're missing: instant document search, automated lead follow-ups, intelligent subcontractor coordination. You keep using what works. We make it smarter.",
  },
  {
    question: "What if the automation breaks or stops working?",
    answer:
      "Every system we build includes error handling, monitoring alerts, and a manual override — so your team is never stuck waiting. We also provide 30 days of hands-on support after launch, and we'll be notified of any issues before they affect your operations.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most systems are live within 2–4 weeks. We start with a scoping audit, design the workflow, build and test it, then hand it over with full training. No lengthy IT onboarding or software migration required.",
  },
  {
    question: "Do I need to replace the software I'm already using?",
    answer:
      "No. We build around your existing stack — whether that's BuilderTrend, Procore, Google Drive, or email. Our systems add an automation layer on top of what you already have, not a replacement. Your team keeps working the way they know.",
  },
  {
    question: "Will my team actually use this?",
    answer:
      "That's the most common concern — and the reason we design for simplicity first. If you can send an email, you can use our systems. There are no new dashboards to learn and no extra logins. The automation works in the background; your team just gets faster, more accurate results.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-8 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium text-stone-950 group-hover:text-[var(--color-brand)] transition-colors duration-200">
          {question}
        </span>
        {/* Chevron — rotates when open */}
        <span
          className={`shrink-0 text-stone-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Answer — collapses/expands with max-height transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-stone-500 text-base leading-relaxed pb-6 max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function Faq() {
  // Track which item is open; null = all closed
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="bg-stone-50">

      {/* ── Section header ────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="grid grid-cols-12 items-end gap-y-5">

          <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
            <p className="text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-stone-950">
              Common questions,{" "}
              <span className="text-stone-400">straight answers.</span>
            </h2>
          </div>

          <p className="col-span-12 lg:col-span-4 lg:col-start-9 text-stone-500 text-base leading-relaxed">
            Still unsure? Book a free 30-minute audit and get your specific
            questions answered directly.
          </p>

        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="h-px bg-stone-200" />
      </div>

      {/* ── Accordion ─────────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
