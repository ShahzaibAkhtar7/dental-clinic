import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import ProcessSteps from "../components/ProcessSteps";
import DoctorsSection from "../components/DoctorsSection";
import Gallery from "../components/Gallery";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection limit={6} />
      <div className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-coral-dark"
        >
          View all services
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <ProcessSteps />
      <DoctorsSection limit={4} />
      <Gallery />
      <TestimonialsSection limit={3} />
      <CTASection />
    </>
  );
}
