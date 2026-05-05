"use client";

import { useEffect, useRef } from "react";

const STATEMENTS = [
  {
    num: "01",
    label: "[ INTEGRATION ]",
    stmtLabel: "[ STATEMENT 01 ]",
    headline: "We don't replace your tools. We make them smarter.",
    body: "Our systems integrate with the project management platforms you already use, adding the automation layer that turns manual handoffs into seamless workflows.",
  },
  {
    num: "02",
    label: "[ CUSTOMIZATION ]",
    stmtLabel: "[ STATEMENT 02 ]",
    headline: "Built for your operations, not the other way around.",
    body: "No templates. Every workflow is designed from your specific processes, your bottlenecks, your team. If it doesn't map to how you actually work, we don't build it.",
  },
  {
    num: "03",
    label: "[ MEASURABLE ROI ]",
    stmtLabel: "[ STATEMENT 03 ]",
    headline: "You see the ROI before you scale.",
    body: "We measure everything. You'll have hard before-and-after numbers: hours saved, errors reduced, response times improved. All of this before we propose any expansion.",
  },
] as const;

export function WhyAntekSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = sectionRef.current;
    if (!el) return;

    if (mq.matches) {
      el.classList.add("rp-why--visible");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("rp-why--visible");
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
        ref={sectionRef}
        className="rp-why"
        aria-labelledby="why-headline"
      >
        <div className="rp-why__inner">

          {/* ── Section headline ─────────────────────────────── */}
          <h2 id="why-headline" className="rp-why__headline">
            Why pros{" "}
            <em className="rp-why__headline-em">choose</em>{" "}
            us.
          </h2>

          {/* ── Three statement rows ─────────────────────────── */}
          <ul className="rp-why__rows" aria-label="Reasons to work with Antek">
            {STATEMENTS.map((stmt) => (
              <li key={stmt.num} className="rp-why__row">

                {/* Top hairline rule */}
                <div className="rp-why__row-rule" aria-hidden="true" />

                {/* Three-column composition */}
                <div className="rp-why__row-content">

                  {/* Left: big numeral + mono caps category tag */}
                  <div className="rp-why__left" aria-hidden="true">
                    <span className="rp-why__num">{stmt.num}</span>
                    <span className="rp-why__tag">{stmt.label}</span>
                  </div>

                  {/* Centre: statement headline + body */}
                  <div className="rp-why__right">
                    <h3 className="rp-why__stmt-headline">{stmt.headline}</h3>
                    <p className="rp-why__stmt-body">{stmt.body}</p>
                  </div>

                  {/* Far right: quiet architectural marginalia */}
                  <div className="rp-why__marginalia" aria-hidden="true">
                    <svg
                      className="rp-why__corner-svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 16 L3 3 L16 3"
                        stroke="var(--rp-rule-strong)"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                    <span className="rp-why__stmt-id">{stmt.stmtLabel}</span>
                  </div>

                </div>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── Pattern C break — tonal shift into FAQ (--rp-bg) ─────── */}
      {/* No rule. Background change + corner glyph at top of new section. */}
      <div className="rp-break-c rp-break-c--to-faq" aria-hidden="true">
        <div className="rp-break-c__inner">
          <div className="rp-break-c__corner">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 14 L2 2 L14 2"
                stroke="var(--rp-rule-strong)"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            <span className="rp-break-c__fig">[ FIG. 08 ]</span>
          </div>
        </div>
      </div>
    </>
  );
}
