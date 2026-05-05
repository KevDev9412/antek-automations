"use client";

import { useEffect, useRef, useState } from "react";

/* ── Count-up hook ──────────────────────────────────────────────────
   Counts from 0 → target once `triggered` flips true.
   Skipped entirely when reducedMotion is true (value snaps to target).
─────────────────────────────────────────────────────────────────── */
function useCountUp(
  target: number,
  duration: number,
  triggered: boolean,
  reducedMotion: boolean
): number {
  const [value, setValue] = useState(0);
  const frame = useRef<number>(0);

  useEffect(() => {
    if (reducedMotion) { setValue(target); return; }
    if (!triggered) return;
    setValue(0);
    const start = performance.now();
    function step(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (t < 1) frame.current = requestAnimationFrame(step);
    }
    frame.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame.current);
  }, [triggered, target, duration, reducedMotion]);

  return value;
}

/* ── Individual stat column ─────────────────────────────────────── */
function StatItem({
  prefix = "",
  target,
  suffix,
  labelLines,
  sublabelLines,
  colorVar,
  triggered,
  reducedMotion,
  delay,
}: {
  prefix?: string;
  target: number;
  suffix: string;
  labelLines: string[];
  sublabelLines: string[];
  colorVar: string;
  triggered: boolean;
  reducedMotion: boolean;
  delay: number;
}) {
  const [fire, setFire] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    if (reducedMotion) { setFire(true); return; }
    const id = setTimeout(() => setFire(true), delay);
    return () => clearTimeout(id);
  }, [triggered, delay, reducedMotion]);

  const count = useCountUp(target, 1100, fire, reducedMotion);

  return (
    <div className="rp-stat__item">
      <div className="rp-stat__number" style={{ color: colorVar }}>
        {prefix}{count}{suffix}
      </div>
      <div className="rp-stat__label">
        {labelLines.map((line, i) => (
          <span key={i} className="rp-stat__label-line">{line}</span>
        ))}
      </div>
      <div className="rp-stat__sublabel">
        <span className="rp-stat__arrow" aria-hidden="true">↳</span>
        <span className="rp-stat__sublabel-text">
          {sublabelLines.map((line, i) => (
            <span key={i} className="rp-stat__sublabel-line">{line}</span>
          ))}
        </span>
      </div>
    </div>
  );
}

/* ── StatRow ────────────────────────────────────────────────────── */
export function StatRow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect prefers-reduced-motion on client
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setTriggered(true);
    }
  }, []);

  // Trigger count-up on first scroll into view
  useEffect(() => {
    if (reducedMotion) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

  return (
    <>
      {/* ── Pattern A break: numbered section marker ─────────────── */}
      <div className="rp-break-a" aria-hidden="true">
        <div className="rp-break-a__inner">
          <div className="rp-break-a__rule" />
          <div className="rp-break-a__meta">
            <span className="rp-break-a__number">01 / RESULTS</span>
          </div>
        </div>
      </div>

      {/* ── Stat row ─────────────────────────────────────────────── */}
      <section
        ref={sectionRef}
        className="rp-stat-row"
        aria-label="Results at a glance"
      >
        <div className="rp-stat-row__inner">
          <StatItem
            target={4}
            suffix="-WEEK"
            labelLines={["DEPLOYMENT", "TIMELINE"]}
            sublabelLines={["Kickoff to", "live ops"]}
            colorVar="var(--rp-ink)"
            triggered={triggered}
            reducedMotion={reducedMotion}
            delay={0}
          />

          <div className="rp-stat__divider" aria-hidden="true" />

          <StatItem
            prefix="$"
            target={100}
            suffix="K+"
            labelLines={["AVG. ANNUAL", "SAVINGS"]}
            sublabelLines={["Per typical", "engagement"]}
            colorVar="var(--rp-brick)"
            triggered={triggered}
            reducedMotion={reducedMotion}
            delay={140}
          />

          <div className="rp-stat__divider" aria-hidden="true" />

          <StatItem
            target={30}
            suffix="-DAY"
            labelLines={["HANDS-ON", "SUPPORT"]}
            sublabelLines={["Full team", "on-call"]}
            colorVar="var(--rp-ink)"
            triggered={triggered}
            reducedMotion={reducedMotion}
            delay={280}
          />
        </div>
      </section>

      {/* ── Pattern C break: tonal shift + corner glyph ──────────── */}
      <div className="rp-break-c" aria-hidden="true">
        <div className="rp-break-c__inner">
          {/* Corner glyph — architectural right-angle mark */}
          <div className="rp-break-c__corner">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M2 16 L2 2 L16 2"
                stroke="var(--rp-rule-strong)"
                strokeWidth="1"
                strokeLinecap="square"
              />
            </svg>
            <span className="rp-break-c__fig">[ FIG. 03 ]</span>
          </div>
        </div>
      </div>
    </>
  );
}
