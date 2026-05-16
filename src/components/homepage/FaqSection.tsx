"use client";

import { useState, useRef, useEffect, useId } from "react";

const FAQS = [
  {
    fig: "[ Q.01 ]",
    question: "How is this different from Applied Epic or AMS360?",
    answer:
      "Applied Epic and AMS360 are agency management systems. They hold your policies, your clients, and your records. We aren't another system. We're the automation layer that sits across your AMS, your inbox, and your carrier portals, and handles the work that moves between them. Your AMS keeps doing what it does. We handle the part where a person used to copy information between it and everything else.",
  },
  {
    fig: "[ Q.02 ]",
    question: "What if the automation breaks or stops working?",
    answer:
      "Every system we build includes monitoring and alert logic. If something stops running, we know before you do. Our standard engagement includes a 90-day support window after launch, plus ongoing retainer options for teams that want continuous coverage and regular iteration.",
  },
  {
    fig: "[ Q.03 ]",
    question: "How long does setup take?",
    answer:
      "Most initial automations are live within three to five weeks. The first two weeks are discovery and mapping: we document your actual workflows before writing a single line of logic. Simpler systems move faster. Complex multi-system orchestrations can take six to eight weeks.",
  },
  {
    fig: "[ Q.04 ]",
    question: "Do I need to replace the software I'm already using?",
    answer:
      "No. We build around what you have. Our systems connect to the tools your team already uses. The only thing that changes is how much manual coordination those tools require from your people. No rip-and-replace, no retraining on a new platform.",
  },
  {
    fig: "[ Q.05 ]",
    question: "Will my team actually use this?",
    answer:
      "That depends on how it is built. We design automations to reduce friction, not add it. Most of our systems run in the background: your team does not need to learn a new tool, they just stop doing the manual steps. For the parts that do require interaction, we keep the interface minimal and the training short.",
  },
] as const;

export function FaqSection() {
  const uid = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const [openSet, setOpenSet] = useState<ReadonlySet<number>>(new Set());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = sectionRef.current;
    if (!el) return;

    if (mq.matches) {
      el.classList.add("rp-faq--visible");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("rp-faq--visible");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function toggle(idx: number) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  }

  return (
    <>
      <section
        id="faq"
        ref={sectionRef}
        className="rp-faq"
        aria-labelledby={`${uid}faq-hl`}
      >
        <div className="rp-faq__inner">

          {/* ── Eyebrow ──────────────────────────────────────── */}
          <p className="rp-faq__eyebrow">[ 06 / FAQ ]</p>

          {/* ── Headline ─────────────────────────────────────── */}
          <h2 id={`${uid}faq-hl`} className="rp-faq__headline">
            Common questions.{" "}
            <em className="rp-faq__headline-em">Straight</em>{" "}
            answers.
          </h2>

          {/* ── Subhead ──────────────────────────────────────── */}
          <p className="rp-faq__subhead">
            Still unsure? Book a free 30-minute audit and get your specific
            questions answered directly.
          </p>

          {/* ── Accordion ────────────────────────────────────── */}
          <ul
            className="rp-faq__list"
            aria-label="Frequently asked questions"
          >
            {FAQS.map((faq, idx) => {
              const isOpen = openSet.has(idx);
              const btnId  = `${uid}btn${idx}`;
              const panelId = `${uid}panel${idx}`;

              return (
                <li key={idx} className="rp-faq__item">
                  <button
                    id={btnId}
                    className={`rp-faq__row${isOpen ? " rp-faq__row--open" : ""}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(idx)}
                  >
                    <span className="rp-faq__row-left">
                      <span className="rp-faq__fig" aria-hidden="true">
                        {faq.fig}
                      </span>
                      <span className="rp-faq__question">{faq.question}</span>
                    </span>
                    <span className="rp-faq__icon" aria-hidden="true">+</span>
                  </button>

                  <div
                    id={panelId}
                    className={`rp-faq__panel${isOpen ? " rp-faq__panel--open" : ""}`}
                    role="region"
                    aria-labelledby={btnId}
                  >
                    <div className="rp-faq__panel-inner">
                      <p className="rp-faq__answer">{faq.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

        </div>
      </section>

      {/* ── Pattern B break — asymmetric brick rule → Final CTA ───── */}
      <div className="rp-break-b rp-break-b--to-cta" aria-hidden="true">
        <div className="rp-break-b__inner">
          <div className="rp-break-b__line">
            <div className="rp-break-b__rule" />
            <p className="rp-break-b__eyebrow">[ GET STARTED ]</p>
          </div>
        </div>
      </div>
    </>
  );
}
