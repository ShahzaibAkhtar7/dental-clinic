import { CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import stats from "../data/stats";
import images from "../data/images";
import CTASection from "../components/CTASection";

const values = [
  {
    title: "Explain before we treat",
    text: "You'll always know what we found, what we recommend, and why — before any treatment starts.",
  },
  {
    title: "Transparent pricing",
    text: "Written estimates ahead of time, insurance verified before your visit, no billing surprises after.",
  },
  {
    title: "Unrushed appointments",
    text: "We schedule enough time per patient that nobody feels processed on a conveyor belt.",
  },
  {
    title: "Comfort-first technique",
    text: "Digital X-rays, numbing gel before injections, and sedation options for patients who need them.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Bright Arc"
        title="A dental practice built around the appointments people actually dread."
        description="We started Bright Arc Dental in 2007 with one idea: most dental anxiety comes from feeling uninformed, not from the treatment itself. Fix the first problem, and the second gets much easier."
      />

      <div className="mx-auto -mt-10 max-w-5xl px-5 lg:px-8">
        <div className="aspect-[21/9] overflow-hidden rounded-3xl shadow-lg">
          <img
            src={images.aboutInterior.url}
            alt={images.aboutInterior.alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Our approach"
              title="Four things we don't compromise on"
            />
            <div className="mt-8 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" strokeWidth={1.75} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-mist p-8 lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-ink">Bright Arc in numbers</h3>
            <div className="mt-8 grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.id}>
                  <p className="font-display text-3xl font-semibold text-ink">
                    {s.value}
                    <span className="text-coral">{s.suffix}</span>
                  </p>
                  <p className="mt-1 text-xs text-ink/55">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 border-t border-line pt-6 text-sm leading-relaxed text-ink/65">
              We're proudly independent — locally owned and operated in Riverdale since day one,
              not part of a regional roll-up.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
