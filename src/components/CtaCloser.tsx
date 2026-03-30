import { CalendlyButton } from "@/components/CalendlyButton";

export function CtaCloser() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-brand)] text-white"
    >
      <div className="px-8 md:px-16 lg:px-24 py-28 md:py-36">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 xl:col-span-7 flex flex-col gap-8">

            {/* Eyebrow */}
            <p className="text-white/70 text-xs font-medium uppercase tracking-[0.18em]">
              Get Started
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight">
              Ready to see where your hours are going?
            </h2>

            {/* Subhead */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
              Book a free operations audit. We&rsquo;ll map your workflows,
              identify the biggest time drains, and show you exactly what
              automation could save — no commitment, no jargon.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col sm:flex-row items-start gap-5 pt-2">
              {/* Primary — dark button on amber background */}
              <CalendlyButton className="inline-flex items-center justify-center w-full sm:w-auto bg-stone-950 hover:bg-stone-800 text-white text-sm font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer">
                Book Your Free Audit
              </CalendlyButton>

              {/* Trust signals */}
              <p className="text-white/60 text-sm leading-relaxed self-center">
                30-minute call &middot; No sales pitch &middot; Actionable
                insights you keep either way
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
