# Renovations Subpage Master Build Prompt

First, audit the project structure. Check if the Navbar and Footer are globally available in 'src/app/layout.tsx'. If they are hardcoded into the homepage ('page.tsx' or 'Hero.tsx'), refactor them into standalone components in 'src/components/' and ensure they wrap the {children} in the root layout so they appear on all subpages.

Once the infrastructure is clean, build a world-class, high-converting subpage at 'src/app/renovations/page.tsx'. This page must feel like a "sibling" to the homepage—sharing the visual DNA but having a unique spatial layout.

## 1. VISUAL DNA & BRAND INHERITANCE:
- Inherit the exact Logo placement, 'Book a Call' orange button style, and Slate/Dark color palette.
- Keep the header and menu exactly as they are on the homepage.
- Instead of copying the homepage layout, use an asymmetric 'Split Hero' for the main hook. Left side: Text copy. Right side: A subtle, animated SVG representing a 'Digital Floor Plan' or 'Connected Workflow' (not the flat blueprint from the home page).
- Use a 'Blueprint Grid' background pattern sparingly behind specific sections to maintain the brand feel.

## 2. TARGET AUDIENCES & DEEP FRICTION COPY:
- Tone: "High-Level Operations Expert." Direct, professional, no tech-bro fluff. Focus on ROI and operations.
- For the Owner (The "Human Router"): Focus on getting them out of daily chaos and reclaiming profit margins.
- For the Office Manager (The "Admin Tax"): Focus on killing double-entry data and software silos.
- Feature the "Invisible Bridge" concept: We don't replace Buildertrend/CoConstruct or QuickBooks. We connect them so they actually work together.

## 3. PAGE SECTIONS TO BUILD:
- HERO: Headline: "Reclaim Your Margins. Automate Your Operations." Sub-headline: "For Renovation Firms with 10–50 Employees: We build the automated systems that bridge the gap between your field team, your office, and your bottom line."
- THE 'STUPIDITY TAX' GRID: A 3-column interactive grid exposing:
  1. 'Profit Leakage' (Unbilled change orders trapped in text threads).
  2. 'The Admin Tax' (Wasting PM and Admin hours on manual data entry).
  3. 'The Sub-Contractor Edge' (Automated schedule shifts to prevent ghosting).
- THE SCAN FRAMEWORK (Reno Edition): Present your SCAN framework using a vertical 'Construction Timeline' scroll effect rather than horizontal cards.
- "MANAGEMENT BY EXCEPTION": Highlight the feature of getting an automated 'Morning Brief' on their phone so they only handle projects that are behind.

## 4. WORLD-CLASS SEO & METADATA:
- Target Keywords: 'Renovation Operations Automation', 'Construction Workflow Systems', 'Margin Protection for GCs.'
- Write unique metadata titles and descriptions for this page to prevent Google duplicate-content penalties.
- Use proper semantic <h1> and <h2> tags optimized for construction tech search intent.

## 5. COMPLIANCE & DEPLOYMENT:
- Ensure all images use Next.js <Image> tags.
- Ensure the 'Book a Call' button correctly links to your booking flow.
- Ensure full responsiveness on mobile and desktop.

Once complete, commit as 'Refactored navigation and launched Renovations vertical subpage' and push to main.
