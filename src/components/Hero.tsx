import Image from "next/image";
import { BlueprintGraphic } from "@/components/BlueprintGraphic";
import { CalendlyButton } from "@/components/CalendlyButton";

const CREDENTIALS = [
  { src: "/images/ibm-logo.png",          alt: "IBM"          },
  { src: "/images/google-cloud-logo.png", alt: "Google Cloud" },
];

const NAV_LINKS = [
  { label: "Home",       href: "#"             },
  { label: "Services",   href: "#capabilities" },
  { label: "Process",    href: "#process"      },
  { label: "Case Study", href: "#case-study"   },
  { label: "FAQ",        href: "#faq"          },
  { label: "Contact",    href: "#contact"      },
];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-stone-50 flex flex-col">

      {/* ── Navigation bar ────────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-7 border-b border-stone-100">

        {/* Wordmark — icon + text */}
        <a
          href="#"
          className="flex items-center gap-0 text-stone-950 hover:text-stone-700 transition-colors duration-200"
          aria-label="Antek Automations — home"
        >
          <Image
            src="/Icon.png"
            alt=""
            width={36}
            height={36}
            className="flex-shrink-0"
            style={{ height: "36px", width: "auto" }}
            aria-hidden="true"
            unoptimized
          />
          <span className="font-extrabold tracking-tight text-base leading-none font-serif">
            Antek Automations
          </span>
        </a>

        {/* Centre nav links — hidden on mobile, visible md+ */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-stone-500 hover:text-stone-950 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA — amber accent, used sparingly */}
        <CalendlyButton className="hidden md:inline-flex items-center bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer">
          Book a Call
        </CalendlyButton>

        {/* Mobile: simple text link fallback */}
        <a
          href="#contact"
          className="md:hidden text-sm text-stone-500 hover:text-stone-950 transition-colors duration-200"
        >
          Contact →
        </a>

      </nav>

      {/* ── Hero content ──────────────────────────────────────────────── */}
      {/*
        Asymmetric layout: content is left-anchored within a 12-col grid.
        The empty right columns act as breathing room — luxury whitespace.
      */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 pb-28 md:pb-20 pt-8">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-7 xl:col-span-6 flex flex-col gap-8">

            {/* Eyebrow — amber accent, strictly contained */}
            <p className="text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em]">
              Workflow Automation for Custom Home Builders
            </p>

            {/* Display headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.02] tracking-tight text-stone-950">
              Your Builds<br className="hidden sm:block" /> Are Complex.
              <br />
              {/* Outlined in amber — transparent fill, brand-colour stroke */}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px var(--color-brand)",
                }}
              >
                Your Operations
              </span>
              <br />
              Shouldn&rsquo;t Be.
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-stone-500 leading-relaxed max-w-lg mt-2 md:mt-0">
              We design and deploy custom automated systems that eliminate{" "}
              {/* $100k+ — amber, slightly larger, semibold for emphasis */}
              <span
                className="font-semibold text-[var(--color-brand)]"
                style={{ fontSize: "1.15em" }}
              >
                $100k+
              </span>{" "}
              in annual operational friction — so your team spends less time
              chasing information and more time building.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
              {/* Primary — amber/copper, used sparingly per design system */}
              <CalendlyButton className="inline-flex items-center justify-center w-full sm:w-auto bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white text-sm font-semibold px-7 py-4 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer">
                Book a Free Operations Audit
              </CalendlyButton>

              {/* Secondary — text-only, no colour accent */}
              <a
                href="#process"
                className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-950 py-4 transition-colors duration-200 group"
              >
                See How It Works
                <span className="inline-block group-hover:translate-y-0.5 transition-transform duration-200">
                  ↓
                </span>
              </a>
            </div>

            {/* ── Credentials — mobile only (SVG hidden on mobile) ──────── */}
            <div className="lg:hidden flex flex-col items-start gap-4 pt-4">
              <p className="text-stone-400 text-sm font-semibold uppercase tracking-widest">
                Certified By:
              </p>
              <div className="flex items-center gap-8">
                {CREDENTIALS.map(({ src, alt }) => (
                  <Image
                    key={alt}
                    src={src}
                    alt={alt}
                    width={160}
                    height={52}
                    className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ))}
              </div>
            </div>

          </div>

          {/* ── Blueprint graphic + credentials — right-hand column ───── */}
          {/* Hidden on mobile/tablet; appears lg+ in the empty right cols */}
          <div className="hidden lg:flex flex-col lg:col-span-5 xl:col-span-6 items-center justify-center gap-8 pl-8 xl:pl-12 h-full">
            <BlueprintGraphic className="w-full max-w-lg opacity-90" />

            {/* Credentials — desktop, aligned beneath SVG */}
            <div className="flex flex-col items-start gap-4 w-full max-w-lg">
              <p className="text-stone-400 text-sm font-semibold uppercase tracking-widest">
                Certified By:
              </p>
              <div className="flex items-center gap-8">
                {CREDENTIALS.map(({ src, alt }) => (
                  <Image
                    key={alt}
                    src={src}
                    alt={alt}
                    width={160}
                    height={52}
                    className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom divider ────────────────────────────────────────────── */}
      <div className="px-6 md:px-16 lg:px-24 pb-8">
        <div className="h-px bg-stone-200" />
      </div>

    </section>
  );
}
