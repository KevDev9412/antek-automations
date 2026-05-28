"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { CalendlyButton } from "@/components/CalendlyButton";

/* ── Timing constants ───────────────────────────────────────────── */
const STEP_MS  = 560;
const CYCLE_MS = 4200;
const PAUSE_MS = 2000;
const N        = 6;

/* ── Icon path data (24 × 24, 2px stroke) ──────────────────────── */
const ICON: Record<string, string[]> = {
  mail:      [
    "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z",
    "M3 7l9 6 9-6",
  ],
  doc:       [
    "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",
    "M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2H9z",
    "M9 12h6",
    "M9 16h4",
  ],
  database:  [
    "M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0-16 0",
    "M4 6v6a8 3 0 0 0 16 0V6",
    "M4 12v6a8 3 0 0 0 16 0v-6",
  ],
  shield:    [
    "M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7L12 3z",
    "M9 12l2 2 4-4",
  ],
  fileCert:  [
    "M14 3v4a1 1 0 0 0 1 1h4",
    "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z",
    "M9 13h3",
    "M9 17h6",
  ],
  send:      [
    "M22 2L11 13",
    "M22 2L15 22l-4-9-9-4z",
  ],
  userCheck: [
    "M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0",
    "M6 21v-2a4 4 0 0 1 4-4h4",
    "M15 19l2 2 4-4",
  ],
  clipboard: [
    "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",
    "M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2H9z",
    "M9 12h6",
    "M9 16h4",
  ],
  folder:    [
    "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",
  ],
  calendar:  [
    "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z",
    "M16 3v4",
    "M8 3v4",
    "M4 11h16",
  ],
  chart:     [
    "M3 3v18h18",
    "M7 16v-3",
    "M11 16V8",
    "M15 16v-5",
    "M19 16v-9",
  ],
  alert:     [
    "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
    "M12 9v4",
    "M12 17h.01",
  ],
  notes:     [
    "M14 3v4a1 1 0 0 0 1 1h4",
    "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z",
    "M9 13h6",
    "M9 17h6",
  ],
  user:      [
    "M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
    "M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2",
  ],
  check:     ["M5 13l4 4L19 7"],
};

/* ── Workflow definitions ───────────────────────────────────────── */
const WORKFLOWS = [
  {
    label: "↳ COI REQUEST · LIVE AUTOMATION",
    nodes: [
      { icon: "mail",      l1: "Email",       l2: "received"   },
      { icon: "doc",       l1: "Parsed &",    l2: "classified" },
      { icon: "database",  l1: "AMS",         l2: "lookup"     },
      { icon: "shield",    l1: "Coverage",    l2: "validated"  },
      { icon: "fileCert",  l1: "COI",         l2: "generated"  },
      { icon: "send",      l1: "Sent in",     l2: "28s"        },
    ],
  },
  {
    label: "↳ NEW SUBMISSION · LIVE AUTOMATION",
    nodes: [
      { icon: "mail",      l1: "Submission",  l2: "received"   },
      { icon: "doc",       l1: "Parsed &",    l2: "classified" },
      { icon: "userCheck", l1: "Producer",    l2: "matched"    },
      { icon: "clipboard", l1: "ACORD",       l2: "extracted"  },
      { icon: "folder",    l1: "File",        l2: "pre-staged" },
      { icon: "send",      l1: "Routed in",   l2: "12s"        },
    ],
  },
  {
    label: "↳ RENEWAL RISK · LIVE AUTOMATION",
    nodes: [
      { icon: "calendar",  l1: "Book",        l2: "scanned"    },
      { icon: "chart",     l1: "Risk",        l2: "scored"     },
      { icon: "alert",     l1: "Flags",       l2: "raised"     },
      { icon: "notes",     l1: "Talking pts", l2: "generated"  },
      { icon: "user",      l1: "Producer",    l2: "alerted"    },
      { icon: "check",     l1: "Done",        l2: "auto"       },
    ],
  },
] as const;

/* ── Tiny checkmark SVG for done badge ─────────────────────────── */
function CheckMark() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <path d="M1.5 4.5l2 1.5L6.5 2"
        stroke="white" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Node icon ──────────────────────────────────────────────────── */
function NodeIcon({ name, isDone, isActive }: {
  name: string;
  isDone: boolean;
  isActive: boolean;
}) {
  const stroke = isDone ? "#1a2744" : isActive ? "#8b5e3c" : "#9a8f80";
  const paths  = ICON[name] ?? ICON.check;
  return (
    <svg
      width="20" height="20" viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "stroke 0.35s", flexShrink: 0 }}
      aria-hidden="true"
    >
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/* ── Hero ───────────────────────────────────────────────────────── */
export function Hero() {
  const [wfIdx,     setWfIdx]     = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [elapsed,   setElapsed]   = useState(0);
  const [isPausing, setIsPausing] = useState(false);

  const rafRef        = useRef<number>(0);
  const startRef      = useRef<number | null>(null);
  const pauseStartRef = useRef<number | null>(null);
  const wfRef         = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDoneCount(N);
      setElapsed(CYCLE_MS);
      return;
    }

    let alive = true;

    function tick(now: number) {
      if (!alive) return;

      /* Pausing between cycles */
      if (pauseStartRef.current !== null) {
        if (now - pauseStartRef.current >= PAUSE_MS) {
          wfRef.current         = (wfRef.current + 1) % 3;
          startRef.current      = null;
          pauseStartRef.current = null;
          setWfIdx(wfRef.current);
          setDoneCount(0);
          setElapsed(0);
          setIsPausing(false);
        }
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      /* Active cycle */
      if (startRef.current === null) startRef.current = now;
      const ms = now - startRef.current;

      setElapsed(Math.min(ms, CYCLE_MS));
      setDoneCount(Math.min(Math.floor(ms / STEP_MS), N));

      if (ms >= CYCLE_MS) {
        pauseStartRef.current = now;
        setIsPausing(true);
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      alive = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const wf         = WORKFLOWS[wfIdx];
  const timerPct   = `${(elapsed / CYCLE_MS) * 100}%`;
  const timerLabel = `${(elapsed / 1000).toFixed(1)}s`;

  return (
    <section className="rp-hero" aria-labelledby="rp-hero-headline">
      <div className="rp-hero__grid" aria-hidden="true" />

      <div className="rp-hero__centered">

        {/* Eyebrow badge */}
        <div className="rp-hero__badge">
          <span className="rp-hero__badge-dot" aria-hidden="true" />
          <span className="rp-hero__badge-text">
            Workflow Automation · Insurance Brokerages
          </span>
        </div>

        {/* H1 — insurance copy, unchanged */}
        <h1 className="rp-hero__headline" id="rp-hero-headline">
          Your <span style={{ color: "#9A4630" }}>policies</span> are complex.
          <br />
          Your operations{" "}
          <em><span style={{ color: "#9A4630" }}>don&rsquo;t</span>&nbsp;have to be.</em>
        </h1>

        {/* Subheadline — insurance copy, unchanged */}
        <p className="rp-hero__subhead">
          We map where time and margin are leaking across your AMS, your inbox,
          and your carrier portals, then build the automation that closes those{" "}
          <span style={{ color: "#9A4630", fontWeight: 600 }}>gaps</span>.
        </p>

        {/* Workflow label — cycles with each animation */}
        <p className="rp-hero__wf-label" aria-live="polite">
          {wf.label}
        </p>

        {/* Pipeline */}
        <div
          className="rp-hero__pipeline"
          role="img"
          aria-label={`Live automation demo: ${wf.label}`}
        >
          {wf.nodes.map((node, i) => {
            const isDone     = doneCount > i;
            const isActive   = !isPausing && doneCount < N && doneCount === i;
            const connFilled = doneCount >= i;

            return (
              <Fragment key={i}>
                {i > 0 && (
                  <div className="rp-pipe__conn-wrap" aria-hidden="true">
                    <div className="rp-pipe__conn">
                      <div
                        className="rp-pipe__conn-fill"
                        style={{ width: connFilled ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                )}
                <div className="rp-pipe__item">
                  <div className={[
                    "rp-pipe__circle",
                    isDone   ? "rp-pipe__circle--done"   : "",
                    isActive ? "rp-pipe__circle--active" : "",
                  ].filter(Boolean).join(" ")}>
                    {isDone && (
                      <span className="rp-pipe__badge" aria-hidden="true">
                        <CheckMark />
                      </span>
                    )}
                    <NodeIcon name={node.icon} isDone={isDone} isActive={isActive} />
                  </div>
                  <div className={[
                    "rp-pipe__label",
                    isDone   ? "rp-pipe__label--done"   : "",
                    isActive ? "rp-pipe__label--active" : "",
                  ].filter(Boolean).join(" ")}>
                    <span>{node.l1}</span>
                    <span>{node.l2}</span>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* Processing timer */}
        <div className="rp-hero__timer" aria-hidden="true">
          <span className="rp-hero__timer-label">↳ PROCESSING</span>
          <div className="rp-hero__timer-track">
            <div className="rp-hero__timer-fill" style={{ width: timerPct }} />
          </div>
          <span className="rp-hero__timer-val">{timerLabel}</span>
        </div>

        {/* CTAs */}
        <div className="rp-hero__actions">
          <CalendlyButton className="rp-btn-audit">
            Book a Free Audit
          </CalendlyButton>
          <a href="#process" className="rp-hero__see-how">
            See how it works →
          </a>
        </div>

      </div>
    </section>
  );
}
