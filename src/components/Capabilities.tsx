import { CalendlyButton } from "@/components/CalendlyButton";

const CAPABILITIES = [
  {
    title: "Lead Follow-Up & Nurture",
    description:
      "Automated response sequences so no enquiry goes cold — every prospect gets a timely, professional follow-up without manual effort.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Document Search & Retrieval",
    description:
      "Intelligent search across every file and every project in plain English. Find permits, specs, and approvals in seconds, not minutes.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
        <line x1="11" y1="8" x2="11" y2="14" />
      </svg>
    ),
  },
  {
    title: "Subcontractor Coordination",
    description:
      "Automated scheduling, reminders, and status updates across your trades — so the right people have the right information at the right time.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="17" cy="21" r="1" /><circle cx="7" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: "Permit & Compliance Tracking",
    description:
      "Deadline monitoring and document routing so nothing expires or gets missed — across every active project, without manual chasing.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
  {
    title: "Client Communication",
    description:
      "Templated updates, milestone notifications, and approval workflows that keep clients informed and reduce back-and-forth.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Reporting & Metrics",
    description:
      "Automated dashboards that surface where time is going — and where it's being saved — so every decision is backed by real data.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6"  y1="20" x2="6"  y2="14" />
        <line x1="2"  y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-stone-50">

      {/* ── Section header ────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="grid grid-cols-12 gap-y-5 items-end">

          {/* Left — heading */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
            <p className="text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
              What We Automate
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-stone-950">
              Custom workflows built around{" "}
              <span className="text-stone-400">how you actually operate.</span>
            </h2>
          </div>

          {/* Right — context note */}
          <p className="col-span-12 lg:col-span-4 lg:col-start-9 text-stone-500 text-base leading-relaxed">
            Every engagement starts with your operations, not a pre-built
            template. We map the gaps first, then build exactly what&rsquo;s
            needed — nothing more.
          </p>

        </div>
      </div>

      {/* ── Thin divider ──────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="h-px bg-stone-200" />
      </div>

      {/* ── Capability cards ──────────────────────────────────────────── */}
      {/*
        gap-px + bg-stone-200 on the grid parent renders the background
        colour through the gaps, creating hairline dividers between every
        cell — no conditional padding or border logic needed.
        Each card gets identical p-10 so all columns align perfectly.
      */}
      <div className="px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {CAPABILITIES.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-stone-50 flex flex-col gap-5 p-10"
            >
              {/* Icon */}
              <span className="text-[var(--color-brand)]">{icon}</span>

              {/* Title */}
              <h3 className="text-lg font-semibold tracking-tight text-stone-950 leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-stone-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Anchor line ───────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pb-10 text-center">
        <p className="text-stone-950 text-base md:text-lg font-semibold leading-relaxed max-w-2xl mx-auto">
          We build the rails, but you steer the ship. Every automation includes
          manual overrides and human-approval checks to keep you in total
          control.
        </p>
      </div>

      {/* ── Support footnote ──────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pb-16">
        <div className="h-px bg-stone-200 mb-10" />
        <div className="grid grid-cols-12">
          <p className="col-span-12 lg:col-span-8 text-stone-500 text-base leading-relaxed">
            Every system includes error handling, manual override capability,
            and{" "}
            <span className="text-stone-950 font-medium">
              30 days of hands-on support
            </span>{" "}
            — so your team is never left to figure it out alone.
          </p>
        </div>
      </div>

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pb-24 flex flex-col items-center text-center gap-6">
        <div className="h-px bg-stone-200 w-full mb-4" />
        <p className="text-stone-950 text-2xl md:text-3xl font-semibold leading-snug tracking-tight max-w-xl">
          Tired of chasing manual updates?
        </p>
        <CalendlyButton className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white text-sm font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer">
          Let&rsquo;s Bridge Your Gaps &rarr;
        </CalendlyButton>
      </div>

    </section>
  );
}
