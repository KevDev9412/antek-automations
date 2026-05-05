"use client";

import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    num: "01",
    title: "Critical Info, Scattered Everywhere",
    body: "Project details buried across email threads, shared drives, and personal devices. Your team wastes hours hunting for answers that should take seconds.",
  },
  {
    num: "02",
    title: "Leads Slip Through the Cracks",
    body: "Follow-ups get lost in the day-to-day. By the time someone circles back, the client has already moved on to another builder.",
  },
  {
    num: "03",
    title: "Coordination That Costs You Time",
    body: "Vendor schedules, permit tracking, subcontractor updates. Managed manually, full of gaps, and always reactive. Every delay compounds.",
  },
] as const;

export function FrictionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setVisible(true); return; }

    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const vis = visible ? " rp-friction--visible" : "";

  return (
    <>
      <section
        ref={sectionRef}
        className={`rp-friction${vis}`}
        aria-labelledby="friction-headline"
      >
        <div className="rp-friction__inner">

          {/* Eyebrow */}
          <p className="rp-friction__eyebrow">[ 02 / Sound Familiar? ]</p>

          {/* Headline */}
          <h2 id="friction-headline" className="rp-friction__headline">
            Running a construction business means managing thousands of moving parts.
            <br />
            {" "}Most of them{" "}
            <em className="rp-friction__headline-em">manually.</em>
          </h2>

          {/* Three friction cards */}
          <div className="rp-friction__cards" role="list">
            {CARDS.map((card) => (
              <article
                key={card.num}
                className="rp-friction__card"
                role="listitem"
              >
                <div className="rp-friction__card-num" aria-hidden="true">
                  {card.num}
                </div>
                <div className="rp-friction__card-rule" aria-hidden="true" />
                <h3 className="rp-friction__card-title">{card.title}</h3>
                <p className="rp-friction__card-body">{card.body}</p>
              </article>
            ))}
          </div>

          {/* Bridge statement */}
          <div className="rp-friction__bridge">
            <p className="rp-friction__bridge-text">
              <span className="rp-friction__bridge-muted">
                Your project management software organizes tasks.{" "}
              </span>
              <span className="rp-friction__bridge-strong">
                But the manual hand-offs in between still drain your time and profit.{" "}
              </span>
              <span className="rp-friction__bridge-muted">
                We bridge them.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* Pattern A break — entering SCAN section */}
      <div className="rp-break-a rp-break-a--scan" aria-hidden="true">
        <div className="rp-break-a__inner">
          <div className="rp-break-a__rule" />
          <div className="rp-break-a__meta">
            <span className="rp-break-a__number">03 / OUR PROCESS</span>
          </div>
        </div>
      </div>
    </>
  );
}
