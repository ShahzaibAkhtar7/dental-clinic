import PageHeader from "../components/PageHeader";
import ServicesSection from "../components/ServicesSection";
import ProcessSteps from "../components/ProcessSteps";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Every treatment we offer, priced up front."
        description="Filter by category to find what you need. Every price shown is a starting estimate — your exact cost depends on your exam and insurance coverage."
      />
      <ServicesSection showFilter />
      <ProcessSteps />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
