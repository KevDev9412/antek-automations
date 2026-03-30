import { CalendlyButton } from "@/components/CalendlyButton";

export function ScanCta() {
  return (
    <div className="bg-stone-50 px-8 md:px-16 lg:px-24 py-20">
      <div className="h-px bg-stone-200 mb-20" />

      <div className="flex flex-col items-center text-center gap-6">
        <p className="text-stone-950 text-2xl md:text-3xl font-semibold leading-snug tracking-tight max-w-xl">
          Ready to see where your operations are leaking profit?
        </p>
        <CalendlyButton className="inline-flex items-center justify-center w-full sm:w-auto bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white text-sm font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer">
          Book a Workflow Audit
        </CalendlyButton>
      </div>

      <div className="h-px bg-stone-200 mt-20" />
    </div>
  );
}
