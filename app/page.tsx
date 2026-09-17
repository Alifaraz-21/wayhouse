import BuiltForSection from "@/components/BuiltForSection";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
import MemberPortalSection from "@/components/MemberPortalSection";
import ModulesSection from "@/components/ModulesSection";
import PricingSection from "@/components/PricingSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkflowSection from "@/components/WorkflowSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ModulesSection />
        <WorkflowSection />
        <BuiltForSection />
        <MemberPortalSection />
        <PricingSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
