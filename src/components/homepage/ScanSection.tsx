"use client";

import { useEffect, useRef, useState } from "react";
import { CalendlyButton } from "@/components/CalendlyButton";

const STEPS = [
  {
    num: "01",
    letter: "S",
    name: "Survey",
    descriptor: "Map Your Operations",
    body: "We audit your current workflows end-to-end. Where is time leaking? Where is information getting lost? We find every friction point before designing anything, so nothing is built on assumptions.",
  },
  {
    num: "02",
    letter: "C",
    name: "Combat",
    descriptor: "Identify the Waste",
    body: "We isolate the repetitive, manual tasks draining your team's hours: the follow-ups nobody sends, the documents nobody can find, the handoffs that always stall. Every bottleneck gets named and quantified.",
  },
  {
    num: "03",
    letter: "A",
    name: "Architect",
    descriptor: "Build Your System",
    body: "We design and deploy custom multi-step automation workflows tailored to your operations. Not off-the-shelf templates. Purpose-built systems that integrate with the tools you already use.",
  },
  {
    num: "04",
    letter: "N",
    name: "Narrate",
    descriptor: "Prove the Results",
    body: "We measure before-and-after metrics so you see exactly what changed: hours saved, errors reduced, response times improved. Hard numbers, not guesswork. You'll have proof before we propose any expansion.",
  },
] as const;

export function ScanSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setVisible(true); return; }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section
        id="process"
        ref={sectionRef}
        className={`rp-scan${visible ? " rp-scan--visible" : ""}`}
        aria-labelledby="scan-headline"
      >
        <div className="rp-scan__inner">

          <h2 id="scan-headline" className="rp-scan__headline">
            A four-step process for turning operational{" "}
            <em className="rp-scan__headline-em">friction</em>{" "}
            into measurable, repeatable efficiency.
          </h2>

          <ol className="rp-scan__steps" aria-label="SCAN framework steps">
            {STEPS.map((step) => (
              <li key={step.num} className="rp-scan__step">
                <div className="rp-scan__step-rule" aria-hidden="true" />
                <div className="rp-scan__step-row">

                  {/* Layered monogram: hollow letter + overlapping brick numeral */}
                  <div className="rp-scan__monogram" aria-hidden="true">
                    <span className="rp-scan__letter">{step.letter}</span>
                    <span className="rp-scan__num">{step.num}</span>
                  </div>

                  {/* Typography stack */}
                  <div className="rp-scan__copy">
                    <h3 className="rp-scan__step-name">{step.name}</h3>
                    <p className="rp-scan__descriptor">{step.descriptor}</p>
                    <p className="rp-scan__body">{step.body}</p>
                  </div>

                </div>
              </li>
            ))}
          </ol>

          <div className="rp-scan__cta-block">
            <p className="rp-scan__cta-line">
              Ready to see where your operations are leaking{" "}
              <em className="rp-scan__cta-em">profit</em>?
            </p>
            <CalendlyButton className="rp-btn-primary">
              Book a Workflow Audit
            </CalendlyButton>
          </div>

        </div>
      </section>

      {/* Pattern B break — asymmetric brick rule, signals dark case study below */}
      <div className="rp-break-b" aria-hidden="true">
        <div className="rp-break-b__inner">
          <div className="rp-break-b__rule" />
          <p className="rp-break-b__eyebrow">[ Case Study · Document Search ]</p>
        </div>
      </div>
    </>
  );
}
