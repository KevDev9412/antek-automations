import type { Metadata } from "next";
import { CalendlyButton } from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Renovation Operations Automation | Antek Automations",
  description:
    "Stop losing margins to admin overhead. We build custom workflow systems for renovation firms with 10–50 employees — automatically bridging your field team, project software, and finance.",
  keywords: [
    "Renovation Operations Automation",
    "Construction Workflow Systems",
    "Margin Protection for GCs",
  ],
  openGraph: {
    title: "Renovation Operations Automation | Antek Automations",
    description:
      "Stop losing margins to admin overhead. We build custom workflow systems for renovation firms with 10–50 employees — automatically bridging your field team, project software, and finance.",
    type: "website",
    url: "https://www.antekautomations.com/renovations",
    images: [{ url: "https://www.antekautomations.com/Icon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renovation Operations Automation | Antek Automations",
    description:
      "Stop losing margins to admin overhead. We build custom workflow systems for renovation firms with 10–50 employees — automatically bridging your field team, project software, and finance.",
  },
};

/* ─────────────────────────────────────────────────────────────────────────
   Animated SVG: Connected Workflow Diagram
   Hub-and-spoke showing automated connections between Field, PM Software,
   Client Comms, and Finance. Uses SVG SMIL animations — no JavaScript.
───────────────────────────────────────────────────────────────────────── */
function ConnectedWorkflowGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 380"
      width="100%"
      height="100%"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: "block" }}
    >
      <style>{`
        .node-box   { fill: #fafaf9; stroke: #d6d3d1; stroke-width: 0.75; }
        .node-label { font-family: var(--font-geist-sans, sans-serif); font-weight: 600; fill: #1c1917; font-size: 10px; }
        .node-sub   { font-family: var(--font-geist-sans, sans-serif); fill: #78716c; font-size: 8.5px; }
        .hub-ring   { stroke: var(--color-brand); stroke-width: 1.5; fill: none; }
        .hub-fill   { fill: var(--color-brand); opacity: 0.08; }
        .hub-text   { font-family: var(--font-geist-sans, sans-serif); font-weight: 700; fill: var(--color-brand); font-size: 9.5px; letter-spacing: 0.8px; }
        .hub-sub    { font-family: var(--font-geist-sans, sans-serif); fill: #78716c; font-size: 8px; letter-spacing: 0.5px; }
        .conn-line  { stroke: #d6d3d1; stroke-width: 0.75; stroke-dasharray: 5 4; }
        .dot        { fill: var(--color-brand); opacity: 0.85; }
        .grid-line  { stroke: #e7e5e4; stroke-width: 0.4; }
      `}</style>

      {/* ── 1. Background grid ────────────────────────────────────────── */}
      <g className="grid-line">
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`v${i}`} x1={i * 30} y1={0} x2={i * 30} y2={380} />
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 30} x2={440} y2={i * 30} />
        ))}
      </g>

      {/* ── 2. Connection lines (behind everything) ───────────────────── */}
      {/* Field Team → Hub */}
      <line className="conn-line" x1={140} y1={60} x2={180} y2={190} />
      {/* PM Software → Hub */}
      <line className="conn-line" x1={140} y1={187} x2={180} y2={190} />
      {/* Client Comms → Hub */}
      <line className="conn-line" x1={140} y1={318} x2={180} y2={190} />
      {/* Finance & Admin → Hub */}
      <line className="conn-line" x1={310} y1={190} x2={280} y2={190} />

      {/* ── 3. Animated dots travelling along connection lines ─────────── */}
      {/* Field → Hub */}
      <circle r="4" className="dot">
        <animateMotion dur="2.2s" repeatCount="indefinite" begin="0s"
          path="M 140 60 L 180 190" />
      </circle>
      {/* Hub → Field (return) */}
      <circle r="3" className="dot" style={{ opacity: 0.45 }}>
        <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.1s"
          path="M 180 190 L 140 60" />
      </circle>

      {/* PM Software → Hub */}
      <circle r="4" className="dot">
        <animateMotion dur="1.6s" repeatCount="indefinite" begin="0.4s"
          path="M 140 187 L 180 190" />
      </circle>

      {/* Client Comms → Hub */}
      <circle r="4" className="dot">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.8s"
          path="M 140 318 L 180 190" />
      </circle>
      {/* Hub → Client Comms (return) */}
      <circle r="3" className="dot" style={{ opacity: 0.45 }}>
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.6s"
          path="M 180 190 L 140 318" />
      </circle>

      {/* Finance → Hub */}
      <circle r="4" className="dot">
        <animateMotion dur="1.4s" repeatCount="indefinite" begin="0.2s"
          path="M 310 190 L 280 190" />
      </circle>
      {/* Hub → Finance (return) */}
      <circle r="3" className="dot" style={{ opacity: 0.45 }}>
        <animateMotion dur="1.4s" repeatCount="indefinite" begin="0.9s"
          path="M 280 190 L 310 190" />
      </circle>

      {/* ── 4. Hub circle ─────────────────────────────────────────────── */}
      {/* Pulsing outer ring */}
      <circle cx={230} cy={190} r={52} className="hub-ring" style={{ opacity: 0 }}>
        <animate attributeName="r"       values="52;68;52" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5"  dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Inner fill + ring */}
      <circle cx={230} cy={190} r={50} className="hub-fill" />
      <circle cx={230} cy={190} r={50} className="hub-ring" />

      {/* Hub text */}
      <text x={230} y={186} textAnchor="middle" className="hub-text">AUTOMATED</text>
      <text x={230} y={200} textAnchor="middle" className="hub-sub">WORKFLOW</text>

      {/* ── 5. Peripheral node boxes ──────────────────────────────────── */}
      {/* Field Team */}
      <rect x={20} y={35} width={120} height={50} rx={5} className="node-box" />
      <text x={80} y={57} textAnchor="middle" className="node-label">Field Team</text>
      <text x={80} y={72} textAnchor="middle" className="node-sub">Updates &amp; Changes</text>

      {/* PM Software */}
      <rect x={20} y={162} width={120} height={50} rx={5} className="node-box" />
      <text x={80} y={184} textAnchor="middle" className="node-label">PM Software</text>
      <text x={80} y={199} textAnchor="middle" className="node-sub">Buildertrend / CoConstruct</text>

      {/* Client Comms */}
      <rect x={20} y={293} width={120} height={50} rx={5} className="node-box" />
      <text x={80} y={315} textAnchor="middle" className="node-label">Client Comms</text>
      <text x={80} y={330} textAnchor="middle" className="node-sub">Approvals &amp; Updates</text>

      {/* Finance & Admin */}
      <rect x={310} y={165} width={120} height={50} rx={5} className="node-box" />
      <text x={370} y={187} textAnchor="middle" className="node-label">Finance</text>
      <text x={370} y={202} textAnchor="middle" className="node-sub">&amp; Admin</text>

      {/* ── 6. Accent dot at key node ──────────────────────────────────── */}
      <circle cx={20} cy={162} r={3.5} fill="var(--color-brand)" />
      <circle cx={310} cy={190} r={3.5} fill="var(--color-brand)" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SVG: Phone mockup — Morning Brief dashboard
───────────────────────────────────────────────────────────────────────── */
function MorningBriefGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 390"
      width="100%"
      height="100%"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: "block" }}
    >
      <style>{`
        .phone-body  { fill: #1c1917; rx: 22; }
        .phone-screen{ fill: #fafaf9; }
        .brief-header{ fill: #1c1917; }
        .ph-label    { font-family: var(--font-geist-sans, sans-serif); }
        .ok-dot      { fill: #4ade80; }
        .warn-dot    { fill: var(--color-brand); }
        .row-hl      { fill: oklch(0.66 0.17 55 / 0.08); }
      `}</style>

      {/* Phone shell */}
      <rect x={0} y={0} width={220} height={390} rx={22} className="phone-body" />

      {/* Notch */}
      <rect x={75} y={0} width={70} height={18} rx={9} fill="#1c1917" />
      <rect x={88} y={5} width={44} height={8} rx={4} fill="#292524" />

      {/* Screen */}
      <rect x={10} y={18} width={200} height={354} rx={14} className="phone-screen" />

      {/* ─ Status bar ─ */}
      <text x={22} y={35} className="ph-label" fontSize={8} fontWeight={600} fill="#78716c">9:41</text>
      <text x={178} y={35} className="ph-label" fontSize={8} fill="#78716c" textAnchor="end">●●●●</text>

      {/* ─ App header ─ */}
      <rect x={10} y={42} width={200} height={40} rx={0} className="brief-header" />
      <rect x={10} y={68} width={200} height={14} className="brief-header" />
      <text x={110} y={59} textAnchor="middle" className="ph-label" fontSize={10} fontWeight={700} fill="#fafaf9" letterSpacing={0.5}>Morning Brief</text>
      <text x={110} y={74} textAnchor="middle" className="ph-label" fontSize={7.5} fill="#a8a29e">Fri, Apr 4 · 3 active projects</text>

      {/* ─ Divider ─ */}
      <line x1={22} y1={88} x2={198} y2={88} stroke="#e7e5e4" strokeWidth={0.75} />

      {/* ─ Project rows ─ */}
      {/* Row 1: ON TRACK */}
      <circle cx={28} cy={108} r={4.5} className="ok-dot" />
      <text x={40} y={105} className="ph-label" fontSize={9} fontWeight={600} fill="#1c1917">Vista Heights</text>
      <text x={40} y={116} className="ph-label" fontSize={7.5} fill="#78716c">Phase 3 framing · On schedule</text>
      <line x1={22} y1={124} x2={198} y2={124} stroke="#e7e5e4" strokeWidth={0.5} />

      {/* Row 2: ACTION NEEDED (highlighted) */}
      <rect x={10} y={127} width={200} height={33} rx={0} className="row-hl" />
      <circle cx={28} cy={143} r={4.5} className="warn-dot" />
      <text x={40} y={140} className="ph-label" fontSize={9} fontWeight={700} fill="#1c1917">Riverside Reno</text>
      <text x={40} y={151} className="ph-label" fontSize={7.5} fill="var(--color-brand)" fontWeight={600}>⚠ Sub delayed · Action needed</text>
      <line x1={22} y1={160} x2={198} y2={160} stroke="#e7e5e4" strokeWidth={0.5} />

      {/* Row 3: ON TRACK */}
      <circle cx={28} cy={178} r={4.5} className="ok-dot" />
      <text x={40} y={175} className="ph-label" fontSize={9} fontWeight={600} fill="#1c1917">Oak Park Addition</text>
      <text x={40} y={186} className="ph-label" fontSize={7.5} fill="#78716c">Permit approved · On track</text>
      <line x1={22} y1={196} x2={198} y2={196} stroke="#e7e5e4" strokeWidth={0.5} />

      {/* Row 4: APPROVAL NEEDED */}
      <rect x={10} y={198} width={200} height={33} rx={0} className="row-hl" />
      <circle cx={28} cy={214} r={4.5} className="warn-dot" />
      <text x={40} y={211} className="ph-label" fontSize={9} fontWeight={700} fill="#1c1917">Mapleview Kitchen</text>
      <text x={40} y={222} className="ph-label" fontSize={7.5} fill="var(--color-brand)" fontWeight={600}>🔔 Change order pending approval</text>
      <line x1={22} y1={232} x2={198} y2={232} stroke="#e7e5e4" strokeWidth={0.5} />

      {/* ─ Summary ─ */}
      <rect x={10} y={232} width={200} height={60} fill="#fafaf9" />
      <text x={110} y={252} textAnchor="middle" className="ph-label" fontSize={8.5} fontWeight={700} fill="var(--color-brand)">2 projects need your attention</text>
      <text x={110} y={266} textAnchor="middle" className="ph-label" fontSize={7.5} fill="#78716c">Everything else is running on autopilot</text>

      {/* CTA pill */}
      <rect x={55} y={276} width={110} height={22} rx={11} fill="var(--color-brand)" />
      <text x={110} y={291} textAnchor="middle" className="ph-label" fontSize={8.5} fontWeight={700} fill="white">Review Now →</text>

      {/* Bottom home button */}
      <circle cx={110} cy={374} r={12} stroke="#44403c" strokeWidth={1} fill="none" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Page data
───────────────────────────────────────────────────────────────────────── */
const FRICTION_ITEMS = [
  {
    number: "15%+",
    unit: "of project revenue",
    title: "Profit Leakage",
    body: "Change orders discussed in text threads, logged nowhere. By the time someone remembers to bill it, the client has moved on — and you have absorbed the cost. Every unbilled scope addition is a direct transfer from your margin to your overhead.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    number: "8–12 hrs",
    unit: "per admin per week",
    title: "The Admin Tax",
    body: "Re-entering the same job data across Buildertrend, QuickBooks, and spreadsheets. Double-entry is not a workflow — it is a tax your office team pays every single day. It erodes morale, introduces errors, and costs you a full day of productive capacity weekly.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "2–3 days",
    unit: "average delay cascade",
    title: "The Sub-Contractor Edge",
    body: "A missed schedule notification to one trade cascades across your entire project. Automated schedule updates and reminders mean your subs show up on the right day — without 10 phone calls from your PM. One automated message stops a two-day domino effect.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const RENO_STEPS = [
  {
    id: "01",
    letter: "S",
    title: "Survey",
    subtitle: "Map Your Renovation Operations",
    body: "We spend time inside your operation before we touch a single tool. Where are change orders falling through the cracks? Where is your office team duplicating data? Where are subcontractors going silent? We map every friction point before designing anything — so nothing gets built on assumptions.",
  },
  {
    id: "02",
    letter: "C",
    title: "Combat",
    subtitle: "Isolate the Margin Killers",
    body: "We quantify exactly what each bottleneck is costing you — in hours, in dollars, and in team bandwidth. The unbilled change orders. The manual data entry loops. The follow-up calls that should never happen. Every waste point gets named, measured, and prioritised before we build.",
  },
  {
    id: "03",
    letter: "A",
    title: "Architect",
    subtitle: "Build the Invisible Bridge",
    body: "We do not replace Buildertrend, CoConstruct, or QuickBooks. We build the automated layer between them so they actually work together. Custom workflows that move data, fire notifications, and route approvals without anyone touching a keyboard. Purpose-built — not off-the-shelf.",
  },
  {
    id: "04",
    letter: "N",
    title: "Narrate",
    subtitle: "Prove the Results in Hard Numbers",
    body: "We measure before-and-after metrics so you can see exactly what changed: hours saved per week, errors eliminated, response times improved, revenue recovered from previously unbilled scope. Hard numbers you can put in front of your business partner or accountant.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   Page component
───────────────────────────────────────────────────────────────────────── */
export default function RenovationsPage() {
  return (
    <main>

      {/* ══════════════════════════════════════════════════════════════════
          HERO — Split layout
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-stone-50">
        <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-12 items-center gap-y-12">

            {/* Left: copy */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-8">

              <p className="text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
                For Renovation Firms with 10–50 Employees
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.04] tracking-tight text-stone-950">
                Reclaim Your Margins.
                <br />
                Automate Your{" "}
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px var(--color-brand)",
                  }}
                >
                  Operations.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-stone-500 leading-relaxed max-w-lg">
                We build the automated systems that bridge the gap between your
                field team, your office, and your bottom line — so the right
                information flows to the right people without anyone chasing it.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <CalendlyButton className="inline-flex items-center justify-center w-full sm:w-auto bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white text-sm font-semibold px-7 py-4 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer">
                  Book a Free Margin Audit
                </CalendlyButton>
                <a
                  href="#reno-process"
                  className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-950 py-4 transition-colors duration-200 group"
                >
                  See How It Works
                  <span className="inline-block group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
                </a>
              </div>

              {/* Trust signal */}
              <p className="text-stone-400 text-xs font-medium uppercase tracking-widest pt-2">
                No pitch. No obligation. 30-minute deep dive.
              </p>

            </div>

            {/* Right: animated SVG */}
            <div className="hidden lg:flex col-span-12 lg:col-span-6 items-center justify-center pl-8 xl:pl-16">
              <ConnectedWorkflowGraphic className="w-full max-w-md opacity-90" />
            </div>

          </div>
        </div>

        <div className="px-6 md:px-16 lg:px-24 pb-8">
          <div className="h-px bg-stone-200" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          THE "STUPIDITY TAX" GRID — Dark section for impact
      ══════════════════════════════════════════════════════════════════ */}
      <section id="stupidity-tax" className="bg-stone-950">
        <div className="px-8 md:px-16 lg:px-24 pt-24 pb-16">
          <div className="grid grid-cols-12 gap-y-5">

            <p className="col-span-12 text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
              The Brutal Truth
            </p>

            <h2 className="col-span-12 lg:col-span-7 text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight text-stone-50">
              The &ldquo;Stupidity Tax&rdquo; Your Business Pays Every Week.
            </h2>

            <p className="col-span-12 lg:col-span-4 lg:col-start-9 self-end text-stone-400 text-base leading-relaxed">
              These are not rare edge cases. They are the daily operational drag
              that compounds into real money — and your team does not even notice
              them anymore.
            </p>

          </div>
        </div>

        <div className="px-8 md:px-16 lg:px-24">
          <div className="h-px bg-stone-800" />
        </div>

        {/* Cards grid */}
        <div className="px-8 md:px-16 lg:px-24 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800">
            {FRICTION_ITEMS.map(({ number, unit, title, body, icon }) => (
              <div
                key={title}
                className="bg-stone-950 flex flex-col gap-6 p-10 group hover:bg-stone-900 transition-colors duration-300 border-l-2 border-transparent hover:border-[var(--color-brand)]"
              >
                <span className="text-[var(--color-brand)]">{icon}</span>

                {/* Stat */}
                <div>
                  <p className="text-4xl md:text-5xl font-black tracking-tight text-stone-50 leading-none">
                    {number}
                  </p>
                  <p className="text-stone-500 text-sm mt-1">{unit}</p>
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-stone-200 leading-snug">
                  {title}
                </h3>

                <p className="text-stone-400 text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 md:px-16 lg:px-24 pb-8">
          <div className="h-px bg-stone-800" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          THE SCAN FRAMEWORK — Reno Edition (vertical construction timeline)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="reno-process" className="bg-stone-50">

        <div className="px-8 md:px-16 lg:px-24 pt-24 pb-16">
          <div className="grid grid-cols-12 gap-y-5">

            <p className="col-span-12 text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
              Our Method
            </p>

            <h2 className="col-span-12 lg:col-span-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-stone-950">
              The SCAN Framework
            </h2>

            <p className="col-span-12 lg:col-span-5 lg:col-start-8 self-end text-stone-500 text-base md:text-lg leading-relaxed">
              Four stages. Real deliverables. No guesswork. Applied specifically
              to the operational reality of renovation contracting.
            </p>

          </div>
        </div>

        <div className="px-8 md:px-16 lg:px-24">
          <div className="h-px bg-stone-200" />
        </div>

        {/* Vertical construction timeline */}
        <div className="px-8 md:px-16 lg:px-24 py-16">
          <div className="relative">

            {/* Vertical spine line — desktop only */}
            <div
              className="hidden md:block absolute left-[2.25rem] top-0 bottom-0 w-px bg-stone-200"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-0">
              {RENO_STEPS.map((step, index) => {
                const isLast = index === RENO_STEPS.length - 1;
                return (
                  <div key={step.id} className="relative flex gap-0 md:gap-10">

                    {/* Step marker column — desktop */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0 w-[4.5rem]">
                      {/* Circle on the spine */}
                      <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 border-2 border-[var(--color-brand)] mt-10 flex-shrink-0">
                        <span className="text-[var(--color-brand)] text-xs font-black leading-none">
                          {step.letter}
                        </span>
                      </div>
                    </div>

                    {/* Content block */}
                    <div className={`flex-1 flex flex-col gap-5 py-10 ${!isLast ? "border-b border-stone-100" : ""}`}>

                      {/* Step number + title header */}
                      <div className="flex items-start gap-6 flex-wrap">

                        {/* Mobile: letter badge */}
                        <div className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 border-2 border-[var(--color-brand)] flex-shrink-0">
                          <span className="text-[var(--color-brand)] text-xs font-black leading-none">
                            {step.letter}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1">
                          <span className="text-[var(--color-brand)] text-xs font-medium tracking-[0.15em]">
                            {step.id}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-950">
                            {step.title}
                            <span className="block text-base md:text-lg font-medium text-[var(--color-brand)] mt-1 tracking-normal">
                              {step.subtitle}
                            </span>
                          </h3>
                        </div>

                      </div>

                      {/* Phase bar — evokes a Gantt / construction schedule */}
                      <div className="flex items-center gap-3 max-w-sm">
                        <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[var(--color-brand)]"
                            style={{ width: `${[85, 70, 90, 75][index]}%`, opacity: 0.6 }}
                          />
                        </div>
                        <span className="text-stone-400 text-xs font-medium whitespace-nowrap">
                          Phase {index + 1} of 4
                        </span>
                      </div>

                      {/* Body text */}
                      <p className="text-stone-500 text-base leading-relaxed max-w-2xl">
                        {step.body}
                      </p>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="px-8 md:px-16 lg:px-24 pb-8">
          <div className="h-px bg-stone-200" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MANAGEMENT BY EXCEPTION — Blueprint grid background accent
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="management-brief"
        className="bg-stone-50"
        style={{
          backgroundImage:
            "linear-gradient(#e7e5e420 1px, transparent 1px), linear-gradient(90deg, #e7e5e420 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div className="px-8 md:px-16 lg:px-24 py-24">
          <div className="grid grid-cols-12 items-center gap-y-16">

            {/* Left: copy */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-8">

              <p className="text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
                Intelligent Alerting
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-stone-950">
                Your Morning Brief.
                <br />
                Delivered Before{" "}
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px var(--color-brand)",
                  }}
                >
                  Coffee.
                </span>
              </h2>

              <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
                Stop waking up and opening four apps to piece together where your
                projects stand. Management by exception means you only see what
                needs you — everything else runs on autopilot.
              </p>

              {/* Feature list */}
              <ul className="flex flex-col gap-4">
                {[
                  "Automated project status summaries delivered every morning",
                  "Only flagged projects — behind schedule, overdue sign-offs, or pending approvals — reach your inbox",
                  "Delivered to your phone, Slack, or email — wherever you already live",
                  "No dashboard to log into. No app to open. Just clarity, on demand.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ background: "var(--color-brand)" }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-stone-600 text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <CalendlyButton className="inline-flex items-center justify-center border-2 border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white text-sm font-semibold px-8 py-4 rounded-lg transition-colors duration-200 cursor-pointer">
                  See It In Action &rarr;
                </CalendlyButton>
              </div>

            </div>

            {/* Right: phone mockup */}
            <div className="hidden lg:flex col-span-12 lg:col-span-5 lg:col-start-8 items-center justify-center">
              <MorningBriefGraphic className="w-full max-w-[220px] drop-shadow-xl opacity-90" />
            </div>

          </div>
        </div>

        <div className="px-8 md:px-16 lg:px-24 pb-8">
          <div className="h-px bg-stone-200" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA CLOSER — Dark, high-contrast
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-950">
        <div className="px-8 md:px-16 lg:px-24 py-24 md:py-28">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">

              <p className="text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
                Next Step
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-stone-50">
                Ready to Stop Paying the Stupidity Tax?
              </h2>

              <p className="text-stone-400 text-lg leading-relaxed max-w-xl">
                Book a free 30-minute operations audit. We will map exactly where
                your hours and margins are leaking — and tell you precisely what
                we would automate first, and what the ROI looks like.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <CalendlyButton className="inline-flex items-center justify-center w-full sm:w-auto bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white text-sm font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer">
                  Book Your Free Operations Audit
                </CalendlyButton>
                <p className="text-stone-600 text-sm self-center">
                  No pitch. No obligation. Just an honest diagnosis.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
