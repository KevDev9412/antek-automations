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
  title: "Antek Automations | Workflow Automation for Professional Services",
  description:
    "Custom workflow automation for professional service businesses. We find where manual work drains your team and build the systems that fix it. Book a free audit.",
  alternates: {
    canonical: "https://www.antekautomations.com/",
  },
  openGraph: {
    title: "Antek Automations | Workflow Automation for Professional Services",
    description:
      "Custom workflow automation for professional service businesses. We find where manual work drains your team and build the systems that fix it. Book a free audit.",
    type: "website",
    url: "https://www.antekautomations.com/",
    images: [{ url: "https://www.antekautomations.com/Icon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antek Automations | Workflow Automation for Professional Services",
    description:
      "Custom workflow automation for professional service businesses. We find where manual work drains your team and build the systems that fix it. Book a free audit.",
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
