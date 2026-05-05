"use client";

import { useEffect, useRef } from "react";
import { CalendlyButton } from "@/components/CalendlyButton";

const SERVICES = [
  {
    fig: "[ FIG. 06.01 ]",
    num: "01",
    name: "Lead Follow-Up & Nurture",
    body: "Automated response sequences so no enquiry goes cold. Every prospect gets a timely, professional follow-up without manual effort.",
  },
  {
    fig: "[ FIG. 06.02 ]",
    num: "02",
    name: "Document Search & Retrieval",
    body: "Intelligent search across every file and every project in plain English. Find permits, specs, and approvals in seconds, not minutes.",
  },
  {
    fig: "[ FIG. 06.03 ]",
    num: "03",
    name: "Subcontractor Coordination",
    body: "Automated scheduling, reminders, and status updates across your trades, so the right people have the right information at the right time.",
  },
  {
    fig: "[ FIG. 06.04 ]",
    num: "04",
    name: "Permit & Compliance Tracking",
    body: "Deadline monitoring and document routing so nothing expires or gets missed, across every active project, without manual chasing.",
  },
  {
    fig: "[ FIG. 06.05 ]",
    num: "05",
    name: "Client Communication",
    body: "Templated updates, milestone notifications, and approval workflows that keep clients informed and reduce back-and-forth.",
  },
  {
    fig: "[ FIG. 06.06 ]",
    num: "06",
    name: "Reporting & Metrics",
    body: "Automated dashboards that surface where time is going and where it's being saved, so every decision is backed by real data.",
  },
] as const;

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = sectionRef.current;
    if (!el) return;

    if (mq.matches) {
      el.classList.add("rp-services--visible");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("rp-services--visible");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section
        id="services"
        ref={sectionRef}
        className="rp-services"
        aria-labelledby="services-headline"
      >
        <div className="rp-services__inner">

          {/* ── Section header ──────────────────────────────── */}
          <div className="rp-services__header">
            <div className="rp-services__header-left">
              <h2 id="services-headline" className="rp-services__headline">
                Custom workflows built<br />
                around how you<br />
                <em className="rp-services__headline-em">actually</em> operate.
              </h2>
            </div>
            <div className="rp-services__header-right">
              <p className="rp-services__subhead">
                Every engagement starts with your operations, not a pre-built
                template. We map the gaps first, then build exactly what&rsquo;s
                needed, nothing more.
              </p>
            </div>
          </div>

          {/* ── Hairline rule after header ──────────────────── */}
          <div className="rp-services__header-rule" aria-hidden="true" />

          {/* ── Service cards grid ──────────────────────────── */}
          <ul className="rp-services__grid" aria-label="Services">
            {SERVICES.map((service) => (
              <li key={service.num} className="rp-services__card">

                {/* Figure marker */}
                <span className="rp-services__card-fig" aria-hidden="true">
                  {service.fig}
                </span>

                {/* Hairline rule */}
                <div className="rp-services__card-rule" aria-hidden="true" />

                {/* Brick label */}
                <span className="rp-services__card-label" aria-hidden="true">
                  AUTOMATION {service.num}
                </span>

                {/* Service name */}
                <h3 className="rp-services__card-name">{service.name}</h3>

                {/* Body */}
                <p className="rp-services__card-body">{service.body}</p>

                {/* Corner bracket glyph */}
                <span className="rp-services__card-corner" aria-hidden="true">
                  ┐
                </span>

              </li>
            ))}
          </ul>

          {/* ── Bridge statement ────────────────────────────── */}
          <div className="rp-services__bridge">
            <p className="rp-services__bridge-quote">
              We build the rails, but you{" "}
              <em className="rp-services__bridge-em">steer</em> the ship.
            </p>
            <p className="rp-services__bridge-body">
              Every automation includes manual overrides and human-approval
              checks to keep you in total control. Every system includes error
              handling, manual override capability, and 30 days of hands-on
              support, so your team is never left to figure it out alone.
            </p>
          </div>

          {/* ── CTA ─────────────────────────────────────────── */}
          <div className="rp-services__cta-block">
            <p className="rp-services__cta-prompt">
              Tired of chasing manual updates?
            </p>
            <CalendlyButton className="rp-btn-primary">
              BRIDGE YOUR GAPS →
            </CalendlyButton>
          </div>

        </div>
      </section>

      {/* ── Pattern A break — 05 / Why Antek ─────────────── */}
      <div className="rp-break-a rp-break-a--why-antek" aria-hidden="true">
        <div className="rp-break-a__inner">
          <div className="rp-break-a__rule" />
          <div className="rp-break-a__meta">
            <span className="rp-break-a__number">05 / Why Antek</span>
          </div>
        </div>
      </div>
    </>
  );
}
