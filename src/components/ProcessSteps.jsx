import { journey } from "../data/stats";
import SectionHeading from "./SectionHeading";

export default function ProcessSteps() {
  return (
    <section className="bg-ink py-20 text-paper lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Your first visit, step by step"
          description="No mystery about what happens next — here's the path from booking to a finished treatment plan."
        />

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-paper/15 lg:block" />
          {journey.map((step) => (
            <div key={step.step} className="relative">
              <span className="font-mono text-sm text-coral">
                {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
