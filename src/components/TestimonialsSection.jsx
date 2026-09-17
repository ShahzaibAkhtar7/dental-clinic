import { Star, Quote } from "lucide-react";
import testimonials from "../data/testimonials";
import SectionHeading from "./SectionHeading";

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
      <Quote className="h-6 w-6 text-coral" strokeWidth={1.5} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">"{testimonial.quote}"</p>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-ink/50">{testimonial.treatment}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < testimonial.rating ? "fill-gold text-gold" : "text-line"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection({ limit }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Patient stories"
          title="What it's actually like to be a patient here"
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
