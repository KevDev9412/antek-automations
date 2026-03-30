const PAIN_POINTS = [
  {
    number: "01",
    heading: "Critical Info, Scattered Everywhere",
    body: "Project details buried across email threads, shared drives, and personal devices. Your team wastes hours hunting for answers that should take seconds.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
        <path d="M17 14v6M14 17h6" />
      </svg>
    ),
  },
  {
    number: "02",
    heading: "Leads Slip Through the Cracks",
    body: "Follow-ups get lost in the day-to-day. By the time someone circles back, the client has already moved on to another builder.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="9" y2="10" strokeWidth="2.5" />
        <line x1="12" y1="10" x2="12" y2="10" strokeWidth="2.5" />
        <line x1="15" y1="10" x2="15" y2="10" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    number: "03",
    heading: "Coordination That Costs You Time",
    body: "Vendor schedules, permit tracking, subcontractor updates — managed manually, full of gaps, and always reactive. Every delay compounds.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export function PainPoints() {
  return (
    <section id="pain-points" className="bg-stone-950 text-stone-50">

      {/* ── Section header ────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-5">

            {/* Eyebrow */}
            <p className="text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
              Sound Familiar?
            </p>

            {/* Section heading — large, left-anchored */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Running a home building company{" "}
              <span className="text-stone-500">means managing thousands of moving parts.</span>{" "}
              Most of them manually.
            </h2>

          </div>
        </div>
      </div>

      {/* ── Thin divider ──────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="h-px bg-stone-800" />
      </div>

      {/* ── Pain point cards ──────────────────────────────────────────── */}
      {/*
        Asymmetric grid: cards share equal columns but are visually
        staggered by the top border accent and offset number treatment.
      */}
      <div className="px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-stone-800">
          {PAIN_POINTS.map(({ number, heading, body, icon }) => (
            <div
              key={number}
              className="flex flex-col gap-6 px-0 py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 border-t border-stone-800 md:border-t-0"
            >
              {/* Number + icon row */}
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-brand)] text-xs font-medium tracking-[0.15em]">
                  {number}
                </span>
                <span className="text-stone-600">
                  {icon}
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-semibold leading-snug tracking-tight text-stone-50">
                {heading}
              </h3>

              {/* Body */}
              <p className="text-stone-400 text-sm md:text-base leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Closing statement ─────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="h-px bg-stone-800 mb-12" />
        <div className="grid grid-cols-12">
          <p className="col-span-12 lg:col-span-8 text-stone-400 text-lg md:text-xl leading-relaxed">
            Your project management software organizes tasks.{" "}
            <span className="text-stone-50 font-medium">
              But the manual hand-offs in between still drain your time and
              profit.
            </span>{" "}
            We bridge them.
          </p>
        </div>
      </div>

    </section>
  );
}
