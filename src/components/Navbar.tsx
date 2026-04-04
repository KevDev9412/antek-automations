import Image from "next/image";
import { CalendlyButton } from "@/components/CalendlyButton";

const NAV_LINKS = [
  { label: "Home",       href: "/"             },
  { label: "Services",   href: "/#capabilities" },
  { label: "Process",    href: "/#process"      },
  { label: "Case Study", href: "/#case-study"   },
  { label: "FAQ",        href: "/#faq"          },
  { label: "Contact",    href: "/#contact"      },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-7 border-b border-stone-100 bg-stone-50">

      {/* Wordmark — icon + text */}
      <a
        href="/"
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
        href="/#contact"
        className="md:hidden text-sm text-stone-500 hover:text-stone-950 transition-colors duration-200"
      >
        Contact →
      </a>

    </nav>
  );
}
