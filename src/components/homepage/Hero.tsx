"use client";

import { useEffect, useRef } from "react";
import { CalendlyButton } from "@/components/CalendlyButton";

/* ─── Colour helpers (fallback values for SVG paint servers) ────── */
const C_INK      = "var(--rp-ink, #0E2A4F)";
const C_INK_MUTE = "var(--rp-ink-mute, #6B7A8F)";
const C_SURFACE  = "var(--rp-surface, #FFFFFF)";
const C_BRICK    = "var(--rp-brick, #9A4630)";
const MONO_FONT  = "var(--rp-font-mono, 'JetBrains Mono', monospace)";

/* ─────────────────────────────────────────────────────────────────
   SCHEMATIC GEOMETRY
   ViewBox: 500 × 390
   Outer border: x=58 y=55 w=344 h=210  (bottom edge y=265)
   Nodes (w=80 h=52): ESTIMATE x=78, SCHEDULING x=190, INVOICING x=302
   Node centers y=121; labels y=161; sub-labels y=173
   System 01 annotation line: y=192
   NODE A/B callouts at node top-left / top-right corners
   Title block: x=284 y=290 w=196 h=76  (bottom edge y=366)
───────────────────────────────────────────────────────────────── */

function Schematic() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    svgRef.current.querySelectorAll('[data-animate]').forEach(el => {
      (el as HTMLElement).style.animationPlayState = 'running';
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 390"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
      role="img"
      aria-label="Automation workflow schematic, three-stage brokerage pipeline: Submission, Servicing, Renewal"
    >
      <defs>
        {/* Blueprint dot grid */}
        <pattern id="rp-dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="0.8" fill={C_INK} />
        </pattern>

        {/* Connector arrowhead */}
        <marker id="rp-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M 0 0.5 L 6 3.5 L 0 6.5 Z" style={{ fill: C_INK }} />
        </marker>

        {/* Dimension arrowheads */}
        <marker id="rp-dim-s" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
          <path d="M 5 0 L 0 3 L 5 6 Z" style={{ fill: C_INK_MUTE }} />
        </marker>
        <marker id="rp-dim-e" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 5 3 L 0 6 Z" style={{ fill: C_INK_MUTE }} />
        </marker>

        {/* Title block clip paths — one per cell, prevents text overflow */}
        <clipPath id="rp-tb-r1">
          <rect x="285" y="290" width="194" height="14" />
        </clipPath>
        <clipPath id="rp-tb-r2">
          <rect x="285" y="304" width="194" height="14" />
        </clipPath>
        <clipPath id="rp-tb-r3l">
          <rect x="285" y="318" width="96" height="14" />
        </clipPath>
        <clipPath id="rp-tb-r3r">
          <rect x="383" y="318" width="96" height="14" />
        </clipPath>
        <clipPath id="rp-tb-r4l">
          <rect x="285" y="332" width="96" height="14" />
        </clipPath>
        <clipPath id="rp-tb-r4r">
          <rect x="383" y="332" width="96" height="14" />
        </clipPath>
        <clipPath id="rp-tb-r5">
          <rect x="285" y="346" width="194" height="20" />
        </clipPath>
      </defs>

      {/* ── Paper surface + dot grid ──────────────────────── */}
      <rect x="0" y="0" width="500" height="390" fill={C_SURFACE} />
      <rect x="0" y="0" width="500" height="390" fill="url(#rp-dot-grid)" opacity="0.06" />

      {/* ══════════════════════════════════════════════════════
          OUTER BORDER — draws in first (0s → 0.6s)
      ══════════════════════════════════════════════════════ */}
      <rect
        x={58} y={55} width={344} height={210}
        pathLength={100}
        stroke={C_INK} strokeWidth="1.5"
        data-animate="true"
        style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
          animation: 'svga-draw 0.6s ease-out 0s forwards',
          animationPlayState: 'paused' }}
      />

      {/* ══════════════════════════════════════════════════════
          WORKFLOW NODES — ESTIMATE · SCHEDULING · INVOICING
          Node rect: w=80, h=52. Centers y=121.
          Left edges: 78, 190, 302. Right edges: 158, 270, 382.
      ══════════════════════════════════════════════════════ */}

      {/* Node 1: ESTIMATE */}
      <rect x={78} y={95} width={80} height={52}
            pathLength={100} stroke={C_INK} strokeWidth="1.5"
            data-animate="true"
            style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
              animation: 'svga-draw 0.35s ease-out 0.5s forwards',
              animationPlayState: 'paused' }} />

      {/* Node 2: SCHEDULING */}
      <rect x={190} y={95} width={80} height={52}
            pathLength={100} stroke={C_INK} strokeWidth="1.5"
            data-animate="true"
            style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
              animation: 'svga-draw 0.35s ease-out 0.7s forwards',
              animationPlayState: 'paused' }} />

      {/* Node 3: INVOICING */}
      <rect x={302} y={95} width={80} height={52}
            pathLength={100} stroke={C_INK} strokeWidth="1.5"
            data-animate="true"
            style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
              animation: 'svga-draw 0.35s ease-out 0.9s forwards',
              animationPlayState: 'paused' }} />

      {/* ── Connector arrows ─────────────────────────────── */}
      {/* ESTIMATE → SCHEDULING */}
      <line x1={159} y1={121} x2={188} y2={121}
            pathLength={100} stroke={C_INK} strokeWidth="1.2"
            markerEnd="url(#rp-arrow)"
            data-animate="true"
            style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
              animation: 'svga-draw 0.2s ease-out 0.62s forwards',
              animationPlayState: 'paused' }} />
      {/* SCHEDULING → INVOICING */}
      <line x1={271} y1={121} x2={300} y2={121}
            pathLength={100} stroke={C_INK} strokeWidth="1.2"
            markerEnd="url(#rp-arrow)"
            data-animate="true"
            style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
              animation: 'svga-draw 0.2s ease-out 0.82s forwards',
              animationPlayState: 'paused' }} />

      {/* ── Node labels ──────────────────────────────────── */}
      <g data-animate="true"
         style={{ opacity: 0, animation: 'svga-fade 0.3s ease-out 0.7s forwards',
                  animationPlayState: 'paused' }}>
        <text x={118} y={161} textAnchor="middle"
              style={{ fontFamily: MONO_FONT, fontSize: "9px", fontWeight: 500,
                       fill: C_INK, letterSpacing: "0.07em" }}>
          SUBMISSION
        </text>
        <text x={118} y={173} textAnchor="middle"
              style={{ fontFamily: MONO_FONT, fontSize: "7.5px",
                       fill: C_INK_MUTE, letterSpacing: "0.04em" }}>
          quotes / coverage
        </text>
      </g>
      <g data-animate="true"
         style={{ opacity: 0, animation: 'svga-fade 0.3s ease-out 0.9s forwards',
                  animationPlayState: 'paused' }}>
        <text x={230} y={161} textAnchor="middle"
              style={{ fontFamily: MONO_FONT, fontSize: "9px", fontWeight: 500,
                       fill: C_INK, letterSpacing: "0.07em" }}>
          SERVICING
        </text>
        <text x={230} y={173} textAnchor="middle"
              style={{ fontFamily: MONO_FONT, fontSize: "7.5px",
                       fill: C_INK_MUTE, letterSpacing: "0.04em" }}>
          COI / endorsements
        </text>
      </g>
      <g data-animate="true"
         style={{ opacity: 0, animation: 'svga-fade 0.3s ease-out 1.1s forwards',
                  animationPlayState: 'paused' }}>
        <text x={342} y={161} textAnchor="middle"
              style={{ fontFamily: MONO_FONT, fontSize: "9px", fontWeight: 500,
                       fill: C_INK, letterSpacing: "0.07em" }}>
          RENEWAL
        </text>
        <text x={342} y={173} textAnchor="middle"
              style={{ fontFamily: MONO_FONT, fontSize: "7.5px",
                       fill: C_INK_MUTE, letterSpacing: "0.04em" }}>
          retention / upsell
        </text>
      </g>

      {/* ══════════════════════════════════════════════════════
          SYSTEM 01 ANNOTATION — dimension-style, below nodes,
          with dashed extensions to outer border bottom edge
      ══════════════════════════════════════════════════════ */}
      <g data-animate="true"
         style={{ opacity: 0, animation: 'svga-fade 0.3s ease-out 1.4s forwards',
                  animationPlayState: 'paused' }}>
        {/* Annotation label */}
        <text x={230} y={186} textAnchor="middle"
              style={{ fontFamily: MONO_FONT, fontSize: "9px",
                       fill: C_INK_MUTE, letterSpacing: "0.06em" }}>
          [ SYSTEM 01 ]
        </text>
        {/* Short end ticks */}
        <line x1={78} y1={190} x2={78} y2={193}
              stroke={C_INK_MUTE} strokeWidth="0.7" />
        <line x1={382} y1={190} x2={382} y2={193}
              stroke={C_INK_MUTE} strokeWidth="0.7" />
        {/* Dimension arrow line */}
        <line x1={83} y1={192} x2={377} y2={192}
              stroke={C_INK_MUTE} strokeWidth="0.8"
              markerStart="url(#rp-dim-s)" markerEnd="url(#rp-dim-e)" />
        {/* Dashed extension lines down to outer border */}
        <line x1={78} y1={193} x2={78} y2={265}
              stroke={C_INK_MUTE} strokeWidth="0.6" strokeDasharray="4 3" />
        <line x1={382} y1={193} x2={382} y2={265}
              stroke={C_INK_MUTE} strokeWidth="0.6" strokeDasharray="4 3" />
      </g>

      {/* ══════════════════════════════════════════════════════
          DIMENSION LINES — reference outer border
      ══════════════════════════════════════════════════════ */}

      {/* Top horizontal — marks outer border width */}
      <g>
        {/* Extension ticks */}
        <line x1={58}  y1={44} x2={58}  y2={32}
              stroke={C_INK_MUTE} strokeWidth="0.7"
              data-animate="true"
              style={{ opacity: 0, animation: 'svga-fade 0.3s ease-out 1.4s forwards',
                animationPlayState: 'paused' }} />
        <line x1={402} y1={44} x2={402} y2={32}
              stroke={C_INK_MUTE} strokeWidth="0.7"
              data-animate="true"
              style={{ opacity: 0, animation: 'svga-fade 0.3s ease-out 1.4s forwards',
                animationPlayState: 'paused' }} />
        {/* Animated dimension line */}
        <line x1={63} y1={36} x2={397} y2={36}
              pathLength={100}
              stroke={C_INK_MUTE} strokeWidth="0.8"
              markerStart="url(#rp-dim-s)" markerEnd="url(#rp-dim-e)"
              data-animate="true"
              style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
                animation: 'svga-draw 0.35s ease-out 1.0s forwards',
                animationPlayState: 'paused' }} />
        {/* Label */}
        <text x={230} y={29} textAnchor="middle"
              data-animate="true"
              style={{ fontFamily: MONO_FONT, fontSize: "9px",
                       fill: C_INK_MUTE, letterSpacing: "0.05em",
                       opacity: 0, animation: 'svga-fade 0.3s ease-out 1.4s forwards',
                       animationPlayState: 'paused' }}>
          {`[ 36'-0" ]`}
        </text>
      </g>

      {/* Left vertical — marks outer border height */}
      <g>
        <line x1={46} y1={55}  x2={34} y2={55}
              stroke={C_INK_MUTE} strokeWidth="0.7"
              data-animate="true"
              style={{ opacity: 0, animation: 'svga-fade 0.3s ease-out 1.4s forwards',
                animationPlayState: 'paused' }} />
        <line x1={46} y1={265} x2={34} y2={265}
              stroke={C_INK_MUTE} strokeWidth="0.7"
              data-animate="true"
              style={{ opacity: 0, animation: 'svga-fade 0.3s ease-out 1.4s forwards',
                animationPlayState: 'paused' }} />
        <line x1={38} y1={60} x2={38} y2={260}
              pathLength={100}
              stroke={C_INK_MUTE} strokeWidth="0.8"
              markerStart="url(#rp-dim-s)" markerEnd="url(#rp-dim-e)"
              data-animate="true"
              style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
                animation: 'svga-draw 0.35s ease-out 1.1s forwards',
                animationPlayState: 'paused' }} />
        <text x={38} y={162} textAnchor="middle"
              transform="rotate(-90, 38, 162)"
              data-animate="true"
              style={{ fontFamily: MONO_FONT, fontSize: "9px",
                       fill: C_INK_MUTE, letterSpacing: "0.05em",
                       opacity: 0, animation: 'svga-fade 0.3s ease-out 1.4s forwards',
                       animationPlayState: 'paused' }}>
          {`[ 20'-0" ]`}
        </text>
      </g>

      {/* ══════════════════════════════════════════════════════
          NODE A CALLOUT (navy) — ESTIMATE node top-left corner
      ══════════════════════════════════════════════════════ */}
      <g>
        {/* Leader lines draw in at 1.6s */}
        <line x1={78} y1={95} x2={54} y2={63}
              pathLength={100} stroke={C_INK} strokeWidth="0.8"
              data-animate="true"
              style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
                animation: 'svga-draw 0.25s ease-out 1.6s forwards',
                animationPlayState: 'paused' }} />
        <line x1={54} y1={63} x2={14} y2={63}
              pathLength={100} stroke={C_INK} strokeWidth="0.8"
              data-animate="true"
              style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
                animation: 'svga-draw 0.25s ease-out 1.6s forwards',
                animationPlayState: 'paused' }} />
        {/* Circle + label fade in at 1.8s */}
        <g data-animate="true"
           style={{ opacity: 0, animation: 'svga-fade 0.25s ease-out 1.8s forwards',
                    animationPlayState: 'paused' }}>
          <circle cx={78} cy={95} r="7"
                  fill="none" stroke={C_INK} strokeWidth="1" />
          <text x={16} y={76}
                style={{ fontFamily: MONO_FONT, fontSize: "8.5px",
                         fill: C_INK, letterSpacing: "0.04em" }}>
            NODE A
          </text>
        </g>
      </g>

      {/* ══════════════════════════════════════════════════════
          NODE B CALLOUT (brick) — INVOICING node top-right corner
          Outer group fades in at 1.8s; inner group pulses at 2.5s
      ══════════════════════════════════════════════════════ */}
      <g>
        {/* Leader lines draw in at 1.6s */}
        <line x1={382} y1={95} x2={416} y2={63}
              pathLength={100} stroke={C_BRICK} strokeWidth="0.8"
              data-animate="true"
              style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
                animation: 'svga-draw 0.25s ease-out 1.6s forwards',
                animationPlayState: 'paused' }} />
        <line x1={416} y1={63} x2={454} y2={63}
              pathLength={100} stroke={C_BRICK} strokeWidth="0.8"
              data-animate="true"
              style={{ strokeDasharray: 100, strokeDashoffset: 100, fill: 'none',
                animation: 'svga-draw 0.25s ease-out 1.6s forwards',
                animationPlayState: 'paused' }} />
        {/* Circle + label — fade in, then pulse */}
        <g data-animate="true"
           style={{ opacity: 0, animation: 'svga-fade 0.25s ease-out 1.8s forwards',
                    animationPlayState: 'paused' }}>
          <g data-animate="true"
             style={{ animation: 'svga-node-b-pulse 8s ease-in-out 2.5s infinite',
                      animationPlayState: 'paused' }}>
            <circle cx={382} cy={95} r="7"
                    fill="none" stroke={C_BRICK} strokeWidth="1" />
            <text x={420} y={76}
                  style={{ fontFamily: MONO_FONT, fontSize: "8.5px",
                           fill: C_BRICK, letterSpacing: "0.04em" }}>
              NODE B
            </text>
          </g>
        </g>
      </g>

      {/* ══════════════════════════════════════════════════════
          TITLE BLOCK — fades in at 2.0s
          clipPath on every cell prevents text overflow
      ══════════════════════════════════════════════════════ */}
      <g data-animate="true"
         style={{ opacity: 0, animation: 'svga-fade 0.4s ease-out 2.0s forwards',
                  animationPlayState: 'paused' }}>
        {/* Outer border */}
        <rect x={284} y={290} width={196} height={76}
              fill="none" stroke={C_INK} strokeWidth="1" />
        {/* Horizontal rules */}
        <line x1={284} y1={304} x2={480} y2={304} stroke={C_INK} strokeWidth="0.5" />
        <line x1={284} y1={318} x2={480} y2={318} stroke={C_INK} strokeWidth="0.5" />
        <line x1={284} y1={332} x2={480} y2={332} stroke={C_INK} strokeWidth="0.5" />
        <line x1={284} y1={346} x2={480} y2={346} stroke={C_INK} strokeWidth="0.5" />
        {/* Vertical divider */}
        <line x1={382} y1={318} x2={382} y2={366} stroke={C_INK} strokeWidth="0.5" />

        {/* Row 1: Company name */}
        <text x={289} y={301} clipPath="url(#rp-tb-r1)"
              style={{ fontFamily: MONO_FONT, fontSize: "9px", fontWeight: 500,
                       fill: C_INK, letterSpacing: "0.05em" }}>
          ANTEK AUTOMATIONS
        </text>
        {/* Row 2: Drawing title */}
        <text x={289} y={315} clipPath="url(#rp-tb-r2)"
              style={{ fontFamily: MONO_FONT, fontSize: "8px",
                       fill: C_INK, letterSpacing: "0.025em" }}>
          BROKERAGE WORKFLOW
        </text>
        {/* Row 3 left: DWG NO */}
        <text x={289} y={329} clipPath="url(#rp-tb-r3l)"
              style={{ fontFamily: MONO_FONT, fontSize: "7.5px",
                       fill: C_INK, letterSpacing: "0.02em" }}>
          DWG NO. AA-2026-002
        </text>
        {/* Row 3 right: FIG */}
        <text x={387} y={329} clipPath="url(#rp-tb-r3r)"
              style={{ fontFamily: MONO_FONT, fontSize: "7.5px",
                       fill: C_INK, letterSpacing: "0.02em" }}>
          FIG. 01
        </text>
        {/* Row 4 left: Scale */}
        <text x={289} y={343} clipPath="url(#rp-tb-r4l)"
              style={{ fontFamily: MONO_FONT, fontSize: "7.5px",
                       fill: C_INK, letterSpacing: "0.02em" }}>
          {`SCALE: 1/4"=1'-0"`}
        </text>
        {/* Row 4 right: Sheet */}
        <text x={387} y={343} clipPath="url(#rp-tb-r4r)"
              style={{ fontFamily: MONO_FONT, fontSize: "7.5px",
                       fill: C_INK, letterSpacing: "0.02em" }}>
          SHEET 1/1
        </text>
        {/* Row 5: Rev + date */}
        <text x={289} y={358} clipPath="url(#rp-tb-r5)"
              style={{ fontFamily: MONO_FONT, fontSize: "7px",
                       fill: C_INK_MUTE, letterSpacing: "0.02em" }}>
          REV. 03 · 2026-05-03
        </text>
      </g>
    </svg>
  );
}

/* ─── Hero component ────────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="rp-hero" aria-labelledby="rp-hero-headline">
      {/* Drafting-paper grid texture */}
      <div className="rp-hero__grid" aria-hidden="true" />

      <div className="rp-hero__inner">
        {/* ── Left column: copy ──────────────────────────────── */}
        <div className="rp-hero__copy">
          <span className="rp-hero__eyebrow" aria-hidden="true">
            [ Workflow Automation · Insurance Brokerages ]
          </span>

          <h1 className="rp-hero__headline" id="rp-hero-headline">
            Your <span style={{ color: C_BRICK }}>policies</span> are complex.
            <br />
            Your operations{" "}
            <em><span style={{ color: C_BRICK }}>don&rsquo;t</span>&nbsp;have to be.</em>
          </h1>

          <p className="rp-hero__subhead">
            We map where time and margin are leaking across your AMS, your inbox,
            and your carrier portals, then build the automation that closes those{" "}
            <span style={{ color: C_BRICK, fontWeight: 600 }}>gaps</span>.
            {" "}Your tools keep working. Your team stops doing the work between them.
          </p>

          <div className="rp-hero__ctas">
            <CalendlyButton className="rp-btn-primary">
              Book a Free Audit
            </CalendlyButton>
            <a href="#process" className="rp-btn-secondary">
              See how it works&nbsp;→
            </a>
          </div>

          {/* Inline stat line */}
          <p className="rp-hero__stat-line" style={{
            fontFamily: MONO_FONT,
            fontSize: "13px",
            letterSpacing: "0.05em",
            color: C_INK,
            margin: 0,
            lineHeight: 1.4,
          }}>
            <span style={{ color: C_BRICK }}>↳</span>
            {" "}COI REQUEST · TRIAGED · DRAFTED · SENT IN &lt;30s{"  "}·{"  "}TYPICAL AUTOMATION
          </p>
        </div>

        {/* ── Right column: schematic ────────────────────────── */}
        <div className="rp-hero__schematic-outer" aria-hidden="true">
          <div className="rp-schematic__frame">

            {/* Annotation header */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              marginBottom: "10px",
              borderBottom: `1px solid var(--rp-rule, #E2DED4)`,
            }}>
              <span className="rp-schematic__annotation">
                [ FIG. 01 / BROKERAGE WORKFLOW ]
              </span>
              {/* LIVE indicator — pulses via rp-live-indicator CSS class */}
              <span className="rp-live-indicator" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: MONO_FONT,
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: C_BRICK,
              }}>
                <span style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: C_BRICK,
                  flexShrink: 0,
                }} />
                LIVE
              </span>
            </div>

            <Schematic />

          </div>
        </div>
      </div>
    </section>
  );
}
