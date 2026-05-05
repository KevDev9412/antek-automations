import type { Metadata } from "next";
import "@/styles/homepage.css";

import { Navbar }           from "@/components/homepage/Navbar";
import { Hero }             from "@/components/homepage/Hero";
import { StatRow }          from "@/components/homepage/StatRow";
import { FrictionSection }  from "@/components/homepage/FrictionSection";
import { ScanSection }      from "@/components/homepage/ScanSection";
import { CaseStudySection } from "@/components/homepage/CaseStudySection";
import { ServicesGrid }     from "@/components/homepage/ServicesGrid";
import { WhyAntekSection }  from "@/components/homepage/WhyAntekSection";
import { FaqSection }       from "@/components/homepage/FaqSection";
import { CtaSection }       from "@/components/homepage/CtaSection";
import { Footer }           from "@/components/homepage/Footer";

export const metadata: Metadata = {
  title: "Antek Automations | Workflow Automation for Residential Construction",
  description:
    "Custom AI workflow automation for custom home builders, general contractors, and renovation firms. We map where time and margin are leaking, then build the systems that fix it.",
  alternates: {
    canonical: "https://www.antekautomations.com/",
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <div className="rp-root">
      <Navbar />
      <main>
        <Hero />
        <StatRow />
        <FrictionSection />
        <ScanSection />
        <CaseStudySection />
        <ServicesGrid />
        <WhyAntekSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
