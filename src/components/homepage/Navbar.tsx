"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendlyButton } from "@/components/CalendlyButton";

const NAV_LINKS = [
  { label: "Home",       href: "/",             figure: "[ 01 ]" },
  { label: "Services",   href: "/#services",    figure: "[ 02 ]" },
  { label: "Process",    href: "/#process",     figure: "[ 03 ]" },
  { label: "Case Study", href: "/#case-study",  figure: "[ 04 ]" },
  { label: "FAQ",        href: "/#faq",         figure: "[ 05 ]" },
  { label: "Contact",    href: "/#contact",     figure: "[ 06 ]" },
];

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header>
      <nav
        className={`rp-nav${scrolled ? " rp-nav--scrolled" : ""}`}
        aria-label="Main navigation"
      >
        <div className="rp-nav__inner">
          {/* Logo + wordmark — icon left, wordmark right, 5px gap */}
          <a href="/" className="rp-nav__logo-link" aria-label="Antek Automations home">
            <Image
              src="/Icon.png"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="rp-nav__logo-img"
              style={{ width: "40px", height: "auto" }}
              unoptimized
            />
            <span className="rp-nav__wordmark">Antek Automations</span>
          </a>

          {/* Centre nav — hidden on mobile via CSS */}
          <ul className="rp-nav__links" role="list">
            {NAV_LINKS.map(({ label, href, figure }) => (
              <li key={label}>
                <a href={href} className="rp-nav__link" data-figure={figure}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right cluster: desktop CTA + mobile hamburger */}
          <div className="rp-nav__right">
            <CalendlyButton className="rp-nav__cta">
              Book a Call
            </CalendlyButton>

            <button
              className={`rp-nav__hamburger${menuOpen ? " rp-nav__hamburger--open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="rp-mobile-menu"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span className="rp-nav__ham-bar" aria-hidden="true" />
              <span className="rp-nav__ham-bar" aria-hidden="true" />
              <span className="rp-nav__ham-bar" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile drawer — absolutely positioned below the nav bar */}
        <div
          id="rp-mobile-menu"
          className={`rp-nav__mobile-menu${menuOpen ? " rp-nav__mobile-menu--open" : ""}`}
          aria-hidden={menuOpen ? undefined : "true"}
        >
          <ul className="rp-nav__mobile-links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="rp-nav__mobile-link"
                  tabIndex={menuOpen ? undefined : -1}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="rp-nav__mobile-cta-row">
            <CalendlyButton className="rp-btn-primary rp-nav__mobile-cta-btn">
              Book a Free Audit
            </CalendlyButton>
          </div>
        </div>

      </nav>
    </header>
  );
}
