"use client";

import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    num: "01",
    title: "Submissions Sitting in Inboxes",
    body: "New commercial submissions, COI requests, and renewal questions land in shared inboxes and wait their turn. The same client data gets typed into Epic or AMS360, then again into a carrier portal, then again into a follow-up email. Nothing's broken. Everything's slow.",
  },
  {
    num: "02",
    title: "Renewals That Quietly Walk Away",
    body: "Most brokerages lose accounts not to price, but to silence. By the time someone follows up on a stale renewal, the client has already taken a quote from somewhere else. Your AMS shows the policy as active. It can't tell you the relationship is over.",
  },
  {
    num: "03",
    title: "The 20-Minute Tasks That Add Up",
    body: "A COI request. A loss run pull. An endorsement update. Each one takes twenty minutes and pulls a senior CSR away from the work that actually grows the book. Across a week, that's a full day of capacity lost to tasks that should run themselves.",
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

          {/* Two-column header: headline left, subhead right */}
          <div className="rp-friction__header">
            <div className="rp-friction__header-left">
              <p className="rp-friction__eyebrow">[ 02 / Sound Familiar? ]</p>
              <h2 id="friction-headline" className="rp-friction__headline">
                Still moving by{" "}
                <em className="rp-friction__headline-em">hand.</em>
              </h2>
            </div>
            <div className="rp-friction__header-right">
              <p className="rp-friction__subhead">
                Running a brokerage means managing thousands of client touchpoints.
                Most of them still need someone in the middle to move them.
              </p>
            </div>
          </div>

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
                Your AMS handles policies.{" "}
              </span>
              <span className="rp-friction__bridge-muted">
                Your inbox handles communication.{" "}
              </span>
              <span className="rp-friction__bridge-strong">
                The manual work between them is where the hours go.{" "}
              </span>
              <span className="rp-friction__bridge-muted">
                That's the gap we close.
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
