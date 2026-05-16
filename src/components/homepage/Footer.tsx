"use client";

import { CalendlyButton } from "@/components/CalendlyButton";

const NAV_LINKS = [
  { label: "Home",       href: "#home"       },
  { label: "Services",   href: "#services"   },
  { label: "Process",    href: "#process"    },
  { label: "Case Study", href: "#case-study" },
  { label: "FAQ",        href: "#faq"        },
  { label: "Contact",    href: "#contact"    },
] as const;

export function Footer() {
  return (
    <footer className="rp-footer">
      <div className="rp-footer__inner">

        {/* ── Three-column body ─────────────────────────────────── */}
        <div className="rp-footer__cols">

          {/* Left — brand */}
          <div className="rp-footer__col rp-footer__col--brand">
            <p className="rp-footer__wordmark">Antek Automations</p>
            <p className="rp-footer__blurb">
              Workflow automation for independent insurance brokerages.
              Less manual work, more time on what actually grows your book.
            </p>
          </div>

          {/* Middle — navigation */}
          <div className="rp-footer__col rp-footer__col--nav">
            <p className="rp-footer__col-label">[ Navigation ]</p>
            <nav aria-label="Footer navigation">
              <ul className="rp-footer__links">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="rp-footer__link">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right — contact */}
          <div className="rp-footer__col rp-footer__col--contact">
            <p className="rp-footer__col-label">[ Get in Touch ]</p>
            <a
              href="mailto:info@antekautomations.com"
              className="rp-footer__contact-link"
            >
              info@antekautomations.com
            </a>
            <a href="tel:5873273536" className="rp-footer__contact-link">
              587-327-3536
            </a>
            <CalendlyButton className="rp-footer__cta-tertiary">
              BOOK A FREE AUDIT →
            </CalendlyButton>
          </div>

        </div>

        {/* ── Divider ───────────────────────────────────────────── */}
        <div className="rp-footer__divider" aria-hidden="true" />

        {/* ── Bottom row ────────────────────────────────────────── */}
        <div className="rp-footer__bottom">
          <p className="rp-footer__copy">
            © 2026 Antek Automations. All rights reserved.
          </p>
          <p className="rp-footer__tagline">
            BUILT FOR BROKERAGES THAT MEAN BUSINESS.
          </p>
        </div>

      </div>
    </footer>
  );
}
