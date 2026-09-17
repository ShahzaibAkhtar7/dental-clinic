import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import clinicInfo from "../data/clinicInfo";

export default function CTASection() {
  return (
    <section className="bg-coral py-16 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
            Ready when you are — usually this week.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
            {clinicInfo.emergency.note}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-ink-soft"
          >
            Book online
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={clinicInfo.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {clinicInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
