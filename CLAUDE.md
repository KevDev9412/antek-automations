# CLAUDE.md — Antek Automations Website

This file is read by Claude Code at the start of every session. It defines **what to build** (project context, business rules) and **how it should look** (design system, page-by-page direction). Treat it as a non-negotiable contract.

The homepage **hero is already built and approved** in `/redesign-preview/`. Use it as the source of truth for typography, palette, spacing rhythm, and motion. New sections should feel like natural continuations of that hero, not departures from it.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Loaded via `next/font/google` only
- **Images:** `next/image` for raster, inline SVG for diagrams/illustrations

---

## Project Context

**Business:** Antek Automations — custom AI workflow automation and operational consulting for residential construction firms.
**Site:** antekautomations.com (homepage + subpages: /renovations, future industry pages)
**Core offer:** AI operational consulting and workflow orchestration — we identify where time and margin are leaking, then build the custom automated systems that fix it.
**Target audience:** Custom home builders, general contractors, and home renovation firms (typically 10–50 employees). Practical, time-pressed business owners and ops managers who are skeptical of "tech bro" aesthetics. They respect craft, structure, and proof. They distrust gimmicks.
**Goal of the site:** Convert qualified construction-industry leads into booked discovery calls.

---

## Workflow Rules (Immutable)

These rules protect the user from accidental deployment. Do not violate them.

1. **Build everything in `/redesign-preview/`.** Do NOT modify files in `app/`, `components/`, `public/`, `styles/` unless I explicitly say "ship it."
2. **Do NOT run `git add`, `git commit`, `git push`, or any state-changing git command** unless I give you the literal phrase "ship it."
3. **Do NOT modify CLAUDE.md, README.md, or other project meta-files** unless explicitly asked.
4. **Token discipline:** Skip recaps, skip TypeScript verification unless you hit a real error, skip post-build summaries unless asked. State design intent in one brief sentence before coding, not a paragraph.

---

## Golden Rules (Hard Constraints on Content)

1. **NO location ties.** Do not mention specific cities, provinces, states, regulatory bodies (Tarion, etc.), or regional warranty programs. The site supports global prospecting — Canada, US, Europe.

2. **NO heavy tech jargon in user-facing copy.** Keep platform names like `n8n`, `Make`, `Zapier`, `Airtable`, `LangChain` out of headlines and feature descriptions. Custom automation systems are framed as *what we build for clients*, not as named products.

3. **NO copying competitor or reference site visuals wholesale.** Reference sites are studied for *specific moves* (called out elsewhere in this file). The visual identity is defined here.

4. **NO redesigning by mimicking the current live site at antekautomations.com.** That site is the *content reference*, not the *visual reference*. Take copy and structure from it; build the visuals fresh per this file.

---

## Brand Positioning (The Mental Model)

Antek Automations should feel like a **premium tech consultancy** — the kind of firm a builder hires when they know they need real help, not a junior shop. Confident, polished, expensive-looking, but warm enough to feel approachable.

Reference brands for *feel*:
- **Linear, Stripe, Vercel** — premium tech consultancy energy, polished marketing pages
- **Bain or Deloitte microsites** — proof of work, named clients, real numbers, multiple supporting visuals per section
- **Strong engineering or architecture firm sites** — figure references, technical drawings, document-style markers

**Visitor takeaway:** *"This firm has clients. They have real systems. They've shipped this before. They're worth the conversation."*

**The $10k benchmark:** Every section must look like it cost real money. Telltale signs of premium work:
- **Visual density** — multiple intentional elements per section, not just headline + paragraph
- **A real color system** — at least 3 working colors with clear roles
- **Proof of life** — concrete numbers, real client logos (when available), real product mockups
- **Layered composition** — foreground + supporting + background elements working together
- **Considered marginalia** — figure numbers, dimension labels, mono caps annotations, hairline rules at corners

White space is a *frame*, not a substitute for content. Empty space without intention reads as unfinished, not premium.

---

## Reference Sites — What to Borrow

### From cascadecustomhomes.ca
**Borrow:** Quiet uppercase navigation with generous letter-spacing. Serif italic accent inside headlines. Slow vertical rhythm.

### From automaly.io
**Borrow:** Stat row beneath the hero with concrete numbers. Named friction concepts with bold lead phrases.

### From Stripe / Linear / Vercel
**Borrow:** How they layer compositions — type, primary visual, secondary annotation, stat callouts, all working together. Use of a third warm accent color alongside primary palette. "No detail is too small" attitude.

---

## Aesthetic Direction

**Aesthetic: Premium Tech Consultancy with Engineered Detail.**

Light mode dominant, but confident with color and density. Polished, considered, layered. The visual personality of a firm that has shipped real systems and has the receipts to prove it.

**Tone words:** Trusted. Polished. Engineered. Layered. Considered.
**Anti-tone:** Sparse, monotone, AI-default, wireframe-y, over-restrained.

**Critical balance:** Restraint applies to *gimmicks* (no bouncing animations, no 3D illustrations, no gradient meshes). Restraint does NOT apply to *content density*. A premium consulting site is information-rich, not information-sparse.

---

## Color System (Four Working Colors)

```css
:root {
  /* Surfaces */
  --color-bg: #FAFAF7;          /* Warm off-white. NOT pure white */
  --color-surface: #FFFFFF;     /* Pure white only for elevated cards */
  --color-surface-alt: #F2F0EA; /* Warmer cream for alternating sections */
  --color-surface-warm: #EDE7DA; /* Warmest cream for tonal contrast */

  /* Ink / Text */
  --color-ink: #0E2A4F;         /* Deep navy from logo — headlines & primary text */
  --color-ink-soft: #2C3E5C;    /* Muted navy for body text */
  --color-ink-mute: #6B7A8F;    /* Steel gray for captions, metadata */

  /* Primary Accent — Brick/Rust (warm) */
  --color-brick: #9A4630;       /* Deep brick — emphasis words, secondary CTAs, 
                                   key data callouts, section numbers */
  --color-brick-soft: #B86A52;  /* Lighter brick for hover states */

  /* Secondary Accent — Cyan (technical) */
  --color-accent: #1B6FA8;      /* Refined cyan — links, technical labels */
  --color-accent-bright: #4FC3E8; /* Logo's electric cyan — interactive feedback only */

  /* Structural */
  --color-rule: #E2DED4;        /* Hairline borders & dividers */
  --color-rule-strong: #C9C2B3; /* Stronger rules at section breaks */

  /* Dark contrast moments */
  --color-bg-dark: #0A1F3D;     /* Logo's deep navy — used for the case-study section */
  --color-ink-on-dark: #F5F2EC; /* Cream text on dark backgrounds */
}
```

**Color rules — the role of each:**

- **Cream** — primary background. The "paper" of the site.
- **Navy** — workhorse for type, primary CTAs, structural lines.
- **Brick** — the warm accent. Required uses:
  - Section numbers (`01`, `02`)
  - 1–2 emphasis words in major headlines (combined with italic)
  - Secondary CTAs and tertiary buttons
  - Highlighted callout values
  - Eyebrow tags (mono caps)
  - Key data points where cyan would be too cold
- **Cyan** — technical signal color. Used for:
  - Hover and focus states (interactive feedback)
  - Technical/data labels in schematics
  - Active link states

**Density quotas (these are minimums, not aspirations):**
- Every major section must include at least one brick element
- Numbered process lists: numbers in brick
- Friction sections: emphasis phrases in brick
- Final CTA: at least one brick element

**Anti-pattern:** A section using only navy on cream feels monotone. Brick is what prevents that.

---

## Typography (Free Google Fonts)

Loaded via `next/font/google` with `display: 'swap'`, subset to `latin`.

**Pairing:**
- **Display / Headlines: Fraunces** — refined contemporary serif with optical sizing and beautiful italic
- **Body: Inter Tight** — slightly condensed Inter, more characterful, readable
- **Mono / Metadata: JetBrains Mono** — clean, refined, technical

One display + one body + one mono. **Maximum three families on the entire site.**

**Sizes (use these as the scale):**
- Hero headline: 88–96px desktop, 48–56px mobile
- Section headlines: 44–56px desktop, 32–40px mobile
- Sub-section / card headlines: 24–32px desktop, 22–26px mobile
- Body: 17–18px (more readable, more premium than default)
- Subheadline / lead: 20–22px
- Metadata/captions: 13–14px in mono
- Eyebrow tags: 13px in mono caps, letter-spacing 0.08em

**Banned fonts:** Inter (full Inter, not Inter Tight), Roboto, Arial, Open Sans, Space Grotesk, Satoshi, system stacks. These signal "default AI-generated site."

**The italic + brick accent move:** For one or two emphasis words in important headlines, combine Fraunces italic with brick color. Example: `Your <em class="brick">builds</em> are complex.` Used in the hero — should be repeated sparingly across the page (not every headline).

---

## What's Already Built (The Hero — Reference Implementation)

The hero in `/redesign-preview/` is the source of truth. Future sections inherit:

**Typography rhythm:**
- Eyebrow (`[ WORKFLOW AUTOMATION · RESIDENTIAL CONSTRUCTION ]`) in JetBrains Mono caps, 13px, brick color, sits ~80–100px below navbar
- Headline in Fraunces, 88–96px, navy with italic+brick accent words
- Subheadline in Inter Tight, 20–22px, ink-soft, with one emphasized number ("$100k+") in brick
- Inline stat callout below CTAs with brick arrow `↳`

**Hero illustration (the architectural drawing):**
- A portrait-oriented architectural drawing-in-progress: nested rectangles with dimension callouts, leader lines pointing to "NODE A" and "NODE B" details
- A real engineering title block in the bottom-right: "ANTEK AUTOMATIONS / FIG. 01 / STRUCTURAL DEVELOPMENT / DRAWING NO. AA-2026-001 / REV. 03 / SCALE: 1/4" = 1'-0" / SHEET 1/1"
- Annotation at the top of the frame: `[ FIG. 01 — STRUCTURAL DEVELOPMENT ]` and a small "● LIVE" indicator with a brick dot
- On load: rectangles draw in with stroke-dasharray over ~1.5s, then dimension lines, callouts, title block
- Idle: every 8 seconds, the brick `[ DETAIL B ]` callout pulses subtly (opacity 1 → 0.6 → 1 over 600ms)
- Honors `prefers-reduced-motion`

**Header (already built):**
- Logo + wordmark 1.75x larger than previous implementation
- Header height: 80px desktop
- Nav: HOME, SERVICES, PROCESS, CASE STUDY, FAQ, CONTACT — uppercase, navy, generous letter-spacing
- "Book a Call" CTA: outlined button in brick on the far right
- Sticky on scroll, compresses to ~64px after 100px scroll

**Future sections must feel like natural continuations of this rhythm — same fonts, same palette, same use of mono caps eyebrows, same hairline-rule discipline.**

---

## Build Order for Remaining Sections

The user will provide screenshots from antekautomations.com for each section as content reference. Build them in this order, **one at a time** (with a possible pairing of the first two since they share a section break):

1. **Stat row + "Certified By"** — three concrete stats (design-added, not on live site) followed by the existing certified-by logo row.
2. **"Sound Familiar?" — Friction Section** — three named friction concepts: "Critical Info, Scattered Everywhere," "Leads Slip Through the Cracks," "Coordination That Costs You Time."
3. **SCAN Framework** — four-step methodology: Survey, Combat, Architect, Narrate.
4. **Case Study (Document Search) — DARK SECTION** — this is the one section per page that flips to dark navy. Includes a UI mockup of the document search interface with answer + sources.
5. **"What We Automate" — Services Grid** — six service cards: Lead Follow-Up, Document Search, Subcontractor Coordination, Permit Tracking, Client Communication, Reporting.
6. **"Why Antek" — Trust Points** — three numbered trust statements.
7. **FAQ Section** — five common questions with expandable answers.
8. **Final CTA — "Get Started"** — single confident CTA with supporting line.
9. **Footer** — clean, hairline-ruled, navigation links, contact info.

**Then:**
10. **Renovations subpage rebuild** — see "Subpages" section below.
11. **Cleanup pass** — refactor for consistency before swap-to-main.

---

## Section Architecture (How to Build Each Remaining Section)

Each new section follows this skeleton:

1. **Section eyebrow** — small mono caps tag at the top, often with a brick-colored figure number: `[ 02 / FRICTION POINTS ]` or `[ FIG. 03 — METHODOLOGY ]`
2. **Section headline** — Fraunces, navy, often with one italic+brick emphasis word
3. **Optional supporting subhead** — Inter Tight, ink-soft, max 1 sentence
4. **Body content** — appropriate to the section's job
5. **One memorable moment** — every section needs a single detail that makes a visitor pause: a stat callout, a structural drawing, a quote treatment, a numbered list with brick numerals, etc.
6. **Section break below** — hairline rule, mono caps continuation cue (`[ CONT. — METHODOLOGY ↓ ]`), or tonal shift

## Section Breaks (Required Variety)

Plain horizontal hairline rules between every section is a default failure 
mode. The current homepage uses identical hairline rules everywhere — that 
must NOT be repeated in the redesign. Section breaks are a place where the 
site's personality shows. Boring breaks make the site read as a wireframe.

**The rule of three:** Across the homepage, you must use at least three 
distinct section-break patterns. Choose the pattern based on what's coming 
next, not by alternation alone. Each pattern serves a different purpose.

**Pattern A — Numbered Section Marker.** A hairline rule with a brick-colored 
mono caps section number anchored to the LEFT, optional descriptor on the 
right. Used when a section is numbered or has a clear identity.

  Example:
  ──────────────────────────────────────────────────────
  02 / FRICTION POINTS                  [ FIG. 02 ]
  
  Use for: friction section, SCAN section, Why Antek section.


**Pattern B — Asymmetric Brick Rule.** A SHORT brick-colored hairline (~120px 
wide, NOT full-width) sitting flush to one column, paired with a section 
eyebrow tag in mono caps. The asymmetry signals "this section is different" 
without using a heavy visual moment.

  Example:
  ───── 
  [ CASE STUDY · DOCUMENT SEARCH ]
  
  Use for: case study (entering the dark section), final CTA.


**Pattern C — Tonal Shift With Edge Detail.** No rule line at all. Instead, 
the section break is implied by a background color change (cream → warmer 
cream → dark navy) AND a small architectural-detail glyph in the corner: a 
right-angle bracket, dimension tick, or hairline corner mark with a mono caps 
figure number nearby. Reads as construction-document marginalia.

  Example: when entering a new section, the top-left corner of the new 
  section has a small ⌐-shaped corner mark with [ FIG. 03 ] beside it.
  
  Use for: SCAN → Case Study transition, Services Grid → Why Antek transition.


**Pattern D — Diagonal/Offset Indication.** A single thin navy rule that does 
NOT span the full page width — instead it's offset, leaving negative space on 
one side. The eye reads this as "deliberate" rather than "automated divider." 
Used sparingly — once or twice on the entire page max.

  Use for: one transition somewhere mid-page where the rhythm needs a small 
  surprise.


**Hard rules across all patterns:**

- The homepage may use Pattern A no more than 3 times total.
- Pattern B is used at the case-study entry point — that's its strongest moment.
- Pattern C is the default for tonal-shift transitions (cream → warmer cream).
- Pattern D appears at most ONCE on the homepage.
- A plain full-width hairline rule with no annotation is BANNED. Every break 
  must include either: a number, an eyebrow tag, a corner glyph, or a tonal 
  shift. No naked rules.

**Vertical spacing varies with break weight.** Pattern A breaks get ~80px above 
and 60px below. Pattern B breaks get ~100px above (asymmetric breaks need 
breathing room). Pattern C tonal shifts get ~120px of internal section padding 
and rely on the color change for the visual gap. Pattern D gets the most 
breathing room — ~140px above.

**The test:** A visitor scrolling the homepage should never see two consecutive 
identical section breaks. If they do, the second one needs to be redesigned 
into a different pattern.

Vary vertical spacing intentionally — not every section gets identical padding.

---

## Subpages (Renovations & Future Industry Pages)

The current `/renovations` page is a near-clone of the homepage. Subpages should feel like **chapters of the same book** — same brand language, but visually subordinate and structurally different.

**Required differences from the homepage:**

1. **No architectural-drawing hero.** The homepage owns that move. The subpage hero is text-led and calmer.
   - Height: ~50vh desktop, ~40vh mobile (vs homepage's ~90vh)
   - Layout: still asymmetric, text-led. Optional small supporting illustration on the right at 35% width — NOT a full title-block document
   - Background: cream (`--color-bg`)
   - **Breadcrumb in mono caps above headline:** `[ HOME / INDUSTRIES / RENOVATIONS ]`
   - Eyebrow names the page: `[ FOR RENOVATION FIRMS · 10–50 EMPLOYEES ]`

2. **No SCAN framework duplicated in full.** A small "Our Method" callout block (~one-third the height of the full SCAN section) summarizing the framework in 2 sentences with a `View Our Full Method →` link.

3. **Lead with industry-specific pain, not the framework.** The "Stupidity Tax" / "Brutal Truth" sections on the current /renovations page are good — keep them, sharpen the typography.

4. **Subpage-only signature element.** Each industry subpage gets one unique structural element. For renovations: the existing **"Morning Brief" mockup** is perfect. Treat it as the subpage's centerpiece. Bigger. More vertical space. Animate one detail (a notification appearing).

5. **Footer & CTAs:** Same footer as homepage but with subpage-specific CTA copy.

**The test:** Open homepage and subpage in two tabs. Within 1 second a visitor should *know they're different pages*. Within 2 seconds they should feel *same brand*.

---

## Layout & Spatial Composition

- **Asymmetry over symmetry** for hero and feature sections. The page should not feel like a stack of identical centered blocks.
- **12-column grid.** Anchor most content to columns 2–11. Occasional intentional bleeds.
- **Hairline rules instead of drop shadows.** Cards have 1px borders in `--color-rule`, not soft shadows. Hover states deepen the border.
- **Section numbering + small mono labels** at the top of each major section. Numbers in brick.
- **Generous line-height** on body (1.6–1.7), tight on headlines (1.05–1.15).

---

## Motion (Confident Restraint)

**Allowed:**
- Section reveal: type fades up 8–12px on entering viewport, once. No bounce.
- Number count-up on stats once when scrolled into view.
- Hover states: precise color shifts, underline animations from left, slow easing (`cubic-bezier(0.4, 0, 0.2, 1)`, 250ms).
- One subtle idle moment per page (the hero's `DETAIL B` pulse). Don't add more.

**Banned:**
- Bouncing, springing, elastic easing
- Parallax
- Auto-rotating carousels
- Spinning gradients, shimmering text, glow pulses
- Mouse-following effects, particles, "magic cursors"
- Constant looping animation

**Always honor `prefers-reduced-motion`.**

---

## Components & Patterns

- **Buttons (Primary):** Solid navy fill, cream text, sharp corners (4px max). Hover: cyan or brick fill, slow easing. Padding: 14px 24px. Mono uppercase label.
- **Buttons (Secondary):** Text link with arrow (→). Underline appears on hover, brick color. No box.
- **Buttons (Tertiary):** Outlined brick border with brick text. Hover: brick fill with cream text.
- **Cards:** White surface, 1px hairline border in `--color-rule`. Hover: border darkens to navy. No drop shadow.
- **Forms:** Underlined inputs (drafting-style), focus state thickens underline and shifts to cyan.
- **Numbered process steps:** Big mono numerals in brick, navy headers. Hairline rule above each step.
- **Stats / data callouts:** Oversized mono numerals. Mix navy and brick across a row — don't make all the same color.
- **Quotes / testimonials:** Editorial. Large Fraunces italic for the quote. Attribution in mono caps below. Quotation mark in brick, oversized.

---

## Anti-patterns to Reject

- Centering everything (especially hero or major sections)
- Reaching for Inter, Roboto, or Space Grotesk
- Adding `rounded-2xl shadow-lg` to every card
- Purple-to-blue or any rainbow gradient
- Emoji or decorative icons next to headings
- Three equally-weighted CTAs in a row
- "AI startup" gradient mesh hero backgrounds
- Stock photos of generic teams or handshakes
- Identical padding on every section
- Auto-playing logo carousels
- More than three accent-cyan elements in one viewport
- **Sections that use only navy on cream — every section needs at least one brick or cyan element**
- **Sparse compositions with one element and lots of empty space**
- Mentioning location-specific terms or platform names in copy
- Constant looping animation
- **Building subpages that look identical to the homepage**

---

## Process — Before Writing Any Code

For every new section:

1. **State design intent in one sentence.** What's this section's job?
2. **Commit to specific aesthetic choices.** Name the fonts, exact CSS variable names, layout pattern. Specifically state where brick will appear.
3. **Sketch layout in words.** Where does the eye go first? What's the dominant element? What's the one memorable moment?
4. **Write the code.** Production-grade, accessible, mobile-first.
5. **Verify density quota.** ≥3 distinct visual elements working together. At least one brick element. Identify the memorable moment explicitly.

---

## Summary — The 30-Second Brief

> Antek Automations is a premium tech consultancy serving custom home builders, GCs, and renovation firms. The site looks like a $10k investment — polished, layered, confident, with proof of life. Cream + deep navy + brick/rust (warm primary accent) + electric cyan (technical accent). Free Google Fonts: Fraunces (with italic+brick accent words in headlines) + Inter Tight + JetBrains Mono. The homepage hero is already built and approved — use it as the source of truth for typography rhythm, palette, motion, and density. The user will provide screenshots from antekautomations.com as content reference for each remaining section. Translate that content into the new design language. Every major section needs at least one brick element and a memorable moment. The case study section flips to dark navy (one tonal contrast moment per page). Subpages share the brand language but are visually subordinate. Build everything in /redesign-preview/. Do not touch the main app directory or run git commands until I say "ship it."