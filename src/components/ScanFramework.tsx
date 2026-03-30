const STEPS = [
  {
    id: "01",
    letter: "S",
    title: "Survey",
    subtitle: "Map Your Operations",
    body: "We audit your current workflows end-to-end. Where is time leaking? Where is information getting lost? We find every friction point before designing anything — so nothing is built on assumptions.",
    align: "left" as const,
  },
  {
    id: "02",
    letter: "C",
    title: "Combat",
    subtitle: "Identify the Waste",
    body: "We isolate the repetitive, manual tasks draining your team's hours — the follow-ups nobody sends, the documents nobody can find, the handoffs that always stall. Every bottleneck gets named and quantified.",
    align: "right" as const,
  },
  {
    id: "03",
    letter: "A",
    title: "Architect",
    subtitle: "Build Your System",
    body: "We design and deploy custom multi-step automation workflows tailored to your operations. Not off-the-shelf templates — purpose-built systems that integrate with the tools you already use.",
    align: "left" as const,
  },
  {
    id: "04",
    letter: "N",
    title: "Narrate",
    subtitle: "Prove the Results",
    body: "We measure before-and-after metrics so you see exactly what changed — hours saved, errors reduced, response times improved. Hard numbers, not guesswork. You'll have proof before we propose any expansion.",
    align: "right" as const,
  },
];

export function ScanFramework() {
  return (
    <section id="process" className="bg-stone-50">

      {/* ── Section header ────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="grid grid-cols-12 gap-y-5">

          {/* Eyebrow */}
          <p className="col-span-12 text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
            Our Process
          </p>

          {/* Heading + subhead — split across the grid for asymmetry */}
          <h2 className="col-span-12 lg:col-span-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-stone-950">
            The SCAN Framework
          </h2>
          <p className="col-span-12 lg:col-span-5 lg:col-start-8 self-end text-stone-500 text-base md:text-lg leading-relaxed">
            A four-step process for turning operational chaos into measurable,
            repeatable efficiency.
          </p>

        </div>
      </div>

      {/* ── Thin divider ──────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="h-px bg-stone-200" />
      </div>

      {/* ── Timeline steps ────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 py-4">
        {STEPS.map((step, index) => {
          const isRight = step.align === "right";
          const isLast = index === STEPS.length - 1;

          return (
            <div key={step.id}>
              {/*
                Each row uses a 12-col grid.
                Left-aligned steps: content in cols 1–6, number/letter in cols 8–9.
                Right-aligned steps: number/letter in cols 1–2, content in cols 5–10.
                The large letter acts as a visual anchor on the opposing side.
              */}
              <div className="grid grid-cols-12 items-center gap-y-6 py-16 md:py-20">

                {/* ── Left-aligned step ─────────────────────────────── */}
                {!isRight && (
                  <>
                    {/* Content block */}
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[var(--color-brand)] text-xs font-medium tracking-[0.15em]">
                          {step.id}
                        </span>
                        <div className="h-px flex-1 bg-stone-200" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-950">
                        {step.title}
                        <span className="block text-base md:text-lg font-medium text-[var(--color-brand)] mt-1 tracking-normal">
                          {step.subtitle}
                        </span>
                      </h3>
                      <p className="text-stone-500 text-base leading-relaxed max-w-md">
                        {step.body}
                      </p>
                    </div>

                    {/* Large decorative letter — right side */}
                    <div className="hidden md:flex col-span-6 justify-end items-center pr-4">
                      <span
                        className="text-[11rem] font-black leading-none tracking-tighter select-none"
                        style={{ color: "transparent", WebkitTextStroke: "1.5px var(--color-brand)" }}
                        aria-hidden="true"
                      >
                        {step.letter}
                      </span>
                    </div>
                  </>
                )}

                {/* ── Right-aligned step ────────────────────────────── */}
                {isRight && (
                  <>
                    {/* Large decorative letter — left side */}
                    <div className="hidden md:flex col-span-6 justify-start items-center pl-4">
                      <span
                        className="text-[11rem] font-black leading-none tracking-tighter select-none"
                        style={{ color: "transparent", WebkitTextStroke: "1.5px var(--color-brand)" }}
                        aria-hidden="true"
                      >
                        {step.letter}
                      </span>
                    </div>

                    {/* Content block */}
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[var(--color-brand)] text-xs font-medium tracking-[0.15em]">
                          {step.id}
                        </span>
                        <div className="h-px flex-1 bg-stone-200" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-950">
                        {step.title}
                        <span className="block text-base md:text-lg font-medium text-[var(--color-brand)] mt-1 tracking-normal">
                          {step.subtitle}
                        </span>
                      </h3>
                      <p className="text-stone-500 text-base leading-relaxed max-w-md">
                        {step.body}
                      </p>
                    </div>
                  </>
                )}

              </div>

              {/* Step divider — not after the last step */}
              {!isLast && (
                <div className="h-px bg-stone-100" />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Bottom padding ────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pb-8">
        <div className="h-px bg-stone-200" />
      </div>

    </section>
  );
}
