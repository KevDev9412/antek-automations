"use client";

import { useEffect, useRef, useState } from "react";

const QUERY = "Apex Construction needs a COI for the Harbor Way project. Coverage in place?";
const ANSWER =
  "Confirmed. Apex's GL policy with Meridian Mutual ($5M limit, expires Aug 2026) satisfies the $5M GL plus waiver of subrogation required by Westbridge Properties Ltd. COI generated and sent to Jennifer Reyes at 11:47am.";

const DOCS = [
  { name: "Apex_Policy_GL-2025-0847.pdf",     date: "GL-2025-0847",   tag: "Active Policy" },
  { name: "Project_Requirements_Harbor.eml",  date: "Inbound Email",  tag: "Email Source"  },
  { name: "COI_Apex_Westbridge_2026.pdf",      date: "11:47am",        tag: "Generated"     },
] as const;

type Phase = "idle" | "typing" | "answer" | "docs" | "done";

export function CaseStudySection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const mockupRef   = useRef<HTMLDivElement>(null);
  const [phase,       setPhase]       = useState<Phase>("idle");
  const [queryChars,  setQueryChars]  = useState(0);
  const [visibleDocs, setVisibleDocs] = useState(0);

  /* ── Scroll-driven parallax — direct DOM mutation, no re-render ── */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const section = sectionRef.current;
    const mockup  = mockupRef.current;
    if (!section || !mockup) return;

    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        // Single-column stacked layout below 900px — disable parallax
        // to prevent the mockup from translating into the copy above it
        if (window.innerWidth < 900) {
          mockup.style.transform = "";
          return;
        }
        const rect          = section.getBoundingClientRect();
        const viewH         = window.innerHeight;
        const sectionH      = rect.height;
        const rawProgress   = (viewH - rect.top) / (viewH + sectionH);
        const progress      = Math.min(1, Math.max(0, rawProgress));
        const translateY    = -180 + progress * 360;
        mockup.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  /* ── Intersection observer — starts animation sequence ── */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = sectionRef.current;
    if (!el) return;

    if (mq.matches) {
      setQueryChars(QUERY.length);
      setVisibleDocs(DOCS.length);
      setPhase("done");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          setTimeout(() => setPhase("typing"), 300);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Typing phase ── */
  useEffect(() => {
    if (phase !== "typing") return;
    const ms = Math.round(1500 / QUERY.length);
    let char = 0;
    const iv = setInterval(() => {
      char++;
      setQueryChars(char);
      if (char >= QUERY.length) {
        clearInterval(iv);
        setTimeout(() => setPhase("answer"), 250);
      }
    }, ms);
    return () => clearInterval(iv);
  }, [phase]);

  /* ── Answer pause before docs ── */
  useEffect(() => {
    if (phase !== "answer") return;
    const t = setTimeout(() => setPhase("docs"), 450);
    return () => clearTimeout(t);
  }, [phase]);

  /* ── Docs stagger ── */
  useEffect(() => {
    if (phase !== "docs") return;
    let count = 0;
    const iv = setInterval(() => {
      count++;
      setVisibleDocs(count);
      if (count >= DOCS.length) {
        clearInterval(iv);
        setTimeout(() => setPhase("done"), 150);
      }
    }, 150);
    return () => clearInterval(iv);
  }, [phase]);

  const mockupVisible = phase !== "idle";
  const showAnswer    = phase === "answer" || phase === "docs" || phase === "done";
  const showStatus    = phase === "done";

  return (
    <>
      <section
        id="case-study"
        ref={sectionRef}
        className="rp-cs"
        aria-labelledby="cs-headline"
      >
        <div className="rp-cs__inner">

          {/* ── Left copy column ─────────────────────────── */}
          <div className="rp-cs__copy">

            <p className="rp-cs__eyebrow">[ Case Study · Submission to Quote ]</p>

            <h2 id="cs-headline" className="rp-cs__headline">
              A commercial COI request, handled before anyone on the team has{" "}
              <em className="rp-cs__headline-em">finished their coffee.</em>
            </h2>

            <div className="rp-cs__body-group">
              <p className="rp-cs__body">
                An independent brokerage was losing real hours every week to a
                workflow every brokerage knows. A commercial client emails in
                asking for a Certificate of Insurance for a new project. A senior
                CSR reads it, pulls up the existing policy in their AMS, checks
                if coverage meets the project requirements, generates the COI from
                a template, drafts a reply, and sends it. About twenty-five
                minutes of careful work. Across forty weekly requests, that's two
                full days of senior staff time, every week.
              </p>
              <p className="rp-cs__body">
                We built a custom system that watches the brokerage's general
                inbox, classifies what comes in, pulls the structured data out,
                looks up the client's existing policy in their AMS, validates
                coverage against project requirements, generates the COI on the
                firm's own template, drafts a personalized reply, and sends it.
                Under thirty seconds. The original CSR gets a notification telling
                them the work is done.
              </p>
              <p className="rp-cs__body">
                The same architecture handles other inbound work too. New
                submissions get routed to the right producer with everything
                pre-staged. Renewal questions get answered or escalated based on
                what the policy actually says. Claims notifications get logged
                into the AMS and the right person gets the heads up.
              </p>
            </div>

            <blockquote className="rp-cs__quote">
              <span className="rp-cs__quote-mark" aria-hidden="true">&ldquo;</span>
              <p className="rp-cs__quote-text">
                If you can send an email, you can use it.
              </p>
            </blockquote>

            <p className="rp-cs__disclaimer">
              [ Not a product we sell. An example of what we build. Every system
              is custom-designed around your specific operational gaps. ]
            </p>

          </div>

          {/* ── Right column: animated UI mockup ─────────── */}
          <div
            className={`rp-cs__mockup-wrap${mockupVisible ? " rp-cs__mockup-wrap--visible" : ""}`}
            aria-hidden="true"
            role="presentation"
          >
            <div className="rp-cs__mockup" ref={mockupRef}>

              {/* Window chrome */}
              <div className="rp-cs__chrome">
                <div className="rp-cs__dots">
                  <span className="rp-cs__dot" />
                  <span className="rp-cs__dot" />
                  <span className="rp-cs__dot" />
                </div>
                <span className="rp-cs__chrome-title">Submission to Quote Bridge</span>
              </div>

              <div className="rp-cs__mockup-body">

                {/* Search input */}
                <div className="rp-cs__search">
                  <svg
                    className="rp-cs__search-icon"
                    width="14" height="14" viewBox="0 0 14 14"
                    fill="none" aria-hidden="true"
                  >
                    <circle cx="5.8" cy="5.8" r="4" stroke="currentColor" strokeWidth="1.25" />
                    <line x1="8.9" y1="8.9" x2="12.5" y2="12.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                  <span className="rp-cs__search-text">
                    {QUERY.slice(0, queryChars)}
                    {phase === "typing" && (
                      <span className="rp-cs__cursor">|</span>
                    )}
                  </span>
                  {queryChars > 0 && (
                    <span className="rp-cs__search-return">↵</span>
                  )}
                </div>

                {/* Answer block */}
                <div className={`rp-cs__answer${showAnswer ? " rp-cs__answer--visible" : ""}`}>
                  <p className="rp-cs__answer-label">Answer:</p>
                  <p className="rp-cs__answer-text">{ANSWER}</p>
                </div>

                {/* Source documents */}
                <div className="rp-cs__sources">
                  <p className="rp-cs__sources-label">Source Documents</p>
                  <ul className="rp-cs__doc-list">
                    {DOCS.map((doc, i) => (
                      <li
                        key={doc.name}
                        className={`rp-cs__doc-row${i < visibleDocs ? " rp-cs__doc-row--visible" : ""}`}
                      >
                        <svg
                          className="rp-cs__doc-icon"
                          width="11" height="13" viewBox="0 0 11 13"
                          fill="none" aria-hidden="true"
                        >
                          <path d="M1.5 1.5h5.5l2.5 2.5V11.5H1.5V1.5z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                          <path d="M7 1.5V4h2.5" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                        </svg>
                        <span className="rp-cs__doc-name">{doc.name}</span>
                        <span className="rp-cs__doc-date">{doc.date}</span>
                        <span className="rp-cs__doc-tag">{doc.tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status line */}
                <div className={`rp-cs__status${showStatus ? " rp-cs__status--visible" : ""}`}>
                  <span className="rp-cs__status-bolt">↯</span>
                  <span className="rp-cs__status-text">
                    Triaged, validated, sent in 28 seconds
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pattern A break — returns to cream, leads into Services Grid */}
      <div className="rp-break-a rp-break-a--services" aria-hidden="true">
        <div className="rp-break-a__inner">
          <div className="rp-break-a__rule" />
          <div className="rp-break-a__meta">
            <span className="rp-break-a__number">04 / What We Automate</span>
          </div>
        </div>
      </div>
    </>
  );
}
