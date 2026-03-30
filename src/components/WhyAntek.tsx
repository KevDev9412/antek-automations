const DIFFERENTIATORS = [
  {
    id: "01",
    statement: "We don't replace your tools. We make them smarter.",
    detail:
      "Our systems integrate with the project management platforms you already use — adding the automation layer that turns manual handoffs into seamless workflows.",
  },
  {
    id: "02",
    statement: "Built for your operations, not the other way around.",
    detail:
      "No templates. Every workflow is designed from your specific processes, your bottlenecks, your team. If it doesn't map to how you actually work, we don't build it.",
  },
  {
    id: "03",
    statement: "You see the ROI before you scale.",
    detail:
      "We measure everything. You'll have hard before-and-after numbers — hours saved, errors reduced, response times improved — before we propose any expansion.",
  },
];

export function WhyAntek() {
  return (
    <section className="bg-stone-950 text-stone-50">

      {/* ── Section header ────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="grid grid-cols-12 items-end gap-y-5">

          <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
            <p className="text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
              Why Antek
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Why builders{" "}
              <span className="text-stone-500">choose us.</span>
            </h2>
          </div>

        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="h-px bg-stone-800" />
      </div>

      {/* ── Stacked value props ───────────────────────────────────────── */}
      {/*
        Each row: number tag + bold statement (left, 7 cols) and
        supporting detail (right, 4 cols), bottom-aligned.
        Separated by thin stone-800 dividers.
      */}
      <div className="px-8 md:px-16 lg:px-24">
        {DIFFERENTIATORS.map(({ id, statement, detail }, index) => (
          <div key={id}>
            <div className="grid grid-cols-12 items-end gap-y-6 py-14 md:py-16">

              {/* Left — number + statement */}
              <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
                <span className="text-[var(--color-brand)] text-xs font-medium tracking-[0.15em]">
                  {id}
                </span>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight text-stone-50">
                  {statement}
                </p>
              </div>

              {/* Right — supporting detail */}
              <p className="col-span-12 lg:col-span-4 lg:col-start-9 text-stone-400 text-base leading-relaxed">
                {detail}
              </p>

            </div>

            {/* Divider between rows — not after the last */}
            {index < DIFFERENTIATORS.length - 1 && (
              <div className="h-px bg-stone-800" />
            )}
          </div>
        ))}
      </div>

      {/* ── Bottom border ─────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pb-8">
        <div className="h-px bg-stone-800" />
      </div>

    </section>
  );
}
