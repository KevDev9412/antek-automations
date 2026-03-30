import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { ScanFramework } from "@/components/ScanFramework";
import { ScanCta } from "@/components/ScanCta";
import { CaseStudy } from "@/components/CaseStudy";
import { Capabilities } from "@/components/Capabilities";
import { WhyAntek } from "@/components/WhyAntek";
import { Faq } from "@/components/Faq";
import { CtaCloser } from "@/components/CtaCloser";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <ScanFramework />
      <ScanCta />
      <CaseStudy />
      <Capabilities />
      <WhyAntek />
      <Faq />
      <CtaCloser />
      <Footer />
    </main>
  );
}
