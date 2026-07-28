import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { ProductTypes } from "@/components/sections/product-types";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyValoer } from "@/components/sections/why-valoer";
import { TrustBand } from "@/components/sections/trust-band";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <ProductTypes />
        <HowItWorks />
        <WhyValoer />
        <TrustBand />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
