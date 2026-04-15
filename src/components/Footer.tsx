import { CalendlyButton } from "@/components/CalendlyButton";

const FOOTER_LINKS = [
  { label: "Home",       href: "#"             },
  { label: "Services",   href: "#capabilities" },
  { label: "Process",    href: "#process"      },
  { label: "Case Study", href: "#case-study"   },
  { label: "FAQ",        href: "#faq"          },
  { label: "Contact",    href: "#contact"      },
];

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800">

      {/* ── Main footer columns ───────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Col 1 — Wordmark + tagline */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a
              href="#"
              className="text-stone-50 font-medium tracking-tight text-base hover:text-stone-300 transition-colors duration-200 font-serif"
            >
              Antek Automations
            </a>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Workflow automation for residential construction — less manual chaos,
              more time building.
            </p>
          </div>

          {/* Col 2 — Nav links */}
          <nav
            aria-label="Footer navigation"
            className="md:col-span-3 md:col-start-6"
          >
            <p className="text-stone-500 text-xs uppercase tracking-[0.15em] mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-stone-400 hover:text-stone-50 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Contact + CTA */}
          <div className="md:col-span-3 md:col-start-10 flex flex-col gap-5">
            <p className="text-stone-500 text-xs uppercase tracking-[0.15em]">
              Get in Touch
            </p>
            <a
              href="mailto:kevin@antekautomations.com"
              className="text-sm text-stone-400 hover:text-stone-50 transition-colors duration-200 break-all"
            >
              kevin@antekautomations.com
            </a>
            <a
              href="tel:5873273536"
              className="text-sm text-stone-400 hover:text-stone-50 transition-colors duration-200"
            >
              587-327-3536
            </a>
            <CalendlyButton className="mt-2 inline-flex items-center text-[var(--color-brand)] text-sm font-semibold hover:opacity-80 transition-opacity duration-200 cursor-pointer">
              Book a Free Audit →
            </CalendlyButton>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 py-6 border-t border-stone-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-stone-600 text-xs">
            &copy; {new Date().getFullYear()} Antek Automations. All rights reserved.
          </p>
          <p className="text-stone-700 text-xs">
            Built for builders who mean business.
          </p>
        </div>
      </div>

    </footer>
  );
}
