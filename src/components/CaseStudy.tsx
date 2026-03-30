/** Stylised document-search UI mockup — built entirely in JSX, no images. */
function DocumentSearchMockup() {
  return (
    <div className="rounded-lg overflow-hidden border border-stone-700 shadow-2xl text-xs font-mono">

      {/* ── App chrome / title bar ──────────────────────────────────── */}
      <div className="bg-stone-800 px-4 py-3 flex items-center gap-2 border-b border-stone-700">
        <span className="w-2.5 h-2.5 rounded-full bg-stone-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-stone-600" />
        <span className="w-2.5 h-2.5 rounded-full bg-stone-600" />
        <span className="ml-3 text-stone-400 text-[10px] tracking-wide uppercase">
          Project Document Search
        </span>
      </div>

      {/* ── Query input ─────────────────────────────────────────────── */}
      <div className="bg-stone-900 px-4 py-4 border-b border-stone-800">
        <div className="flex items-center gap-3 bg-stone-800 rounded px-3 py-2.5">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <circle cx="6.5" cy="6.5" r="4.5" />
            <line x1="10.5" y1="10.5" x2="14" y2="14" />
          </svg>
          <span className="text-stone-300 text-[11px]">
            What are the approved window specs for Lot 14?
          </span>
          <span className="ml-auto text-stone-600 text-[10px]">↵</span>
        </div>
      </div>

      {/* ── Results ─────────────────────────────────────────────────── */}
      <div className="bg-stone-900 px-4 py-4 flex flex-col gap-3">

        {/* Answer summary */}
        <div className="bg-stone-800 rounded p-3 border-l-2 border-[var(--color-brand)]">
          <p className="text-stone-300 text-[11px] leading-relaxed">
            <span className="text-[var(--color-brand)] font-semibold">Answer: </span>
            Lot 14 uses Andersen 400 Series casement windows, triple-glazed,
            with a matte black exterior finish. Approved 14 Mar 2025.
          </p>
        </div>

        {/* Source documents */}
        <p className="text-stone-600 text-[10px] uppercase tracking-wider pt-1">
          Source documents
        </p>

        {[
          { name: "Lot14_WindowSpec_v3.pdf",      date: "14 Mar 2025", tag: "Spec Sheet"   },
          { name: "ClientApproval_Lot14.pdf",     date: "15 Mar 2025", tag: "Approval"    },
          { name: "SubcontractorBrief_Q2.pdf",    date: "02 Apr 2025", tag: "Brief"       },
        ].map(({ name, date, tag }) => (
          <div
            key={name}
            className="flex items-center gap-3 bg-stone-800 rounded px-3 py-2.5 hover:bg-stone-700 transition-colors"
          >
            {/* File icon */}
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="#78716c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6L9 1z" />
              <polyline points="9 1 9 6 14 6" />
            </svg>
            <span className="text-stone-300 text-[10px] flex-1 truncate">{name}</span>
            <span className="text-stone-600 text-[10px] shrink-0">{date}</span>
            <span className="bg-stone-700 text-stone-400 text-[9px] px-1.5 py-0.5 rounded shrink-0">
              {tag}
            </span>
          </div>
        ))}

        {/* Response time */}
        <p className="text-stone-700 text-[10px] pt-1 text-right">
          ⚡ Retrieved in 1.2s across 4,800 project documents
        </p>

      </div>
    </div>
  );
}

export function CaseStudy() {
  return (
    <section id="case-study" className="bg-stone-950 text-stone-50">

      {/* ── Section header ────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 lg:px-24 pt-24 pb-16">
        <p className="text-[var(--color-brand)] text-xs font-medium uppercase tracking-[0.18em] mb-5">
          Case Study
        </p>
        <div className="h-px bg-stone-800" />
      </div>

      {/* ── Two-column asymmetric body ────────────────────────────────── */}
      {/*
        Left (narrative): 6 of 12 cols on desktop.
        Right (mockup):   5 of 12 cols, offset by 1 col gap.
        On mobile: stacked, mockup appears below the text.
      */}
      <div className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12 items-start">

          {/* ── Left — narrative ──────────────────────────────────────── */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-8">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              Thousands of documents.{" "}
              <span className="text-stone-500">
                One question. Answered in seconds.
              </span>
            </h2>

            <div className="flex flex-col gap-5 text-stone-400 text-base leading-relaxed">
              <p>
                A premier custom home builder managing multiple high-value
                projects simultaneously was drowning in documents — thousands
                of files scattered across email threads, shared drives, and
                personal devices. Finding a single permit, spec sheet, or
                client approval could take their team 20+ minutes.
              </p>
              <p>
                We built a custom system that lets their team search across
                every project document using plain English. Type a question,
                get an answer in seconds — with the source document attached.
              </p>
              <p>
                The system handles automated document categorisation,
                intelligent search tuned to construction terminology, OCR for
                scanned files, and full version control with audit trails.
              </p>
            </div>

            {/* Pull-quote */}
            <blockquote className="border-l-2 border-[var(--color-brand)] pl-5">
              <p className="text-stone-50 text-xl md:text-2xl font-semibold leading-snug tracking-tight italic">
                &ldquo;If you can send an email, you can use it.&rdquo;
              </p>
            </blockquote>

            {/* Disclaimer / reframe */}
            <p className="text-stone-600 text-sm leading-relaxed border-t border-stone-800 pt-6">
              This isn&rsquo;t a product we sell. It&rsquo;s an example of
              what we build. Every system is custom-designed around your
              specific operational gaps.
            </p>

          </div>

          {/* ── Right — document search UI mockup ─────────────────────── */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:sticky lg:top-12">
            <DocumentSearchMockup />
          </div>

        </div>
      </div>

    </section>
  );
}
