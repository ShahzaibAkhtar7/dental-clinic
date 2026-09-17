import PageHeader from "../components/PageHeader";
import DoctorsSection from "../components/DoctorsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

export default function Doctors() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="Four specialists, one shared chart."
        description="Everyone on our clinical team has access to your full history, so care stays coordinated even when you see more than one of us."
      />
      <DoctorsSection detailed />
      <TestimonialsSection limit={3} />
      <CTASection />
    </>
  );
}
