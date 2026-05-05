"use client";

import { useRef, useEffect } from "react";
import { CalendlyButton } from "@/components/CalendlyButton";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = sectionRef.current;
    if (!el) return;
    if (mq.matches) {
      el.classList.add("rp-cta--visible");
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("rp-cta--visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="rp-cta" aria-labelledby="rp-cta-hl">
      <div className="rp-cta__inner">

        {/* ── Eyebrow ──────────────────────────────────────────── */}
        <p className="rp-cta__eyebrow">[ FIG. 09 — BOOK A FREE AUDIT ]</p>

        {/* ── Headline ─────────────────────────────────────────── */}
        <h2 id="rp-cta-hl" className="rp-cta__headline">
          Ready to see where your{" "}
          <em className="rp-cta__headline-em">hours</em>{" "}
          are going?
        </h2>

        {/* ── Subhead ──────────────────────────────────────────── */}
        <p className="rp-cta__subhead">
          Book a free operations audit. We&apos;ll map your workflows,
          identify the biggest time drains, and show you exactly what
          automation could save. No commitment, no jargon.
        </p>

        {/* ── CTA actions ──────────────────────────────────────── */}
        <div className="rp-cta__actions">
          <CalendlyButton className="rp-btn-primary rp-cta__btn">
            Book Your Free Audit
          </CalendlyButton>
          <p className="rp-cta__microcopy">
            30-MINUTE CALL · NO SALES PITCH · ACTIONABLE INSIGHTS YOU KEEP EITHER WAY
          </p>
        </div>

        {/* ── End-of-document mark ─────────────────────────────── */}
        <div className="rp-cta__end-mark" aria-hidden="true">
          <div className="rp-cta__end-rule" />
          <p className="rp-cta__end-label">
            [ END OF DOCUMENT · ANTEK AUTOMATIONS · FIG. 01–09 ]
          </p>
        </div>

      </div>
    </section>
  );
}
