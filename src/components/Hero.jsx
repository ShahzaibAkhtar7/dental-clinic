import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import stats from "../data/stats";
import images from "../data/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-ink/60">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            4.9 average from 900+ reviews
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-medium leading-[1.08] text-ink sm:text-6xl">
            Dentistry that feels like
            <span className="italic text-coral"> less of a big deal.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            Bright Arc Dental pairs unhurried, plain-language care with modern
            technique — from routine cleanings to full smile makeovers, for
            every age in the family.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-coral-dark"
            >
              Book your appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-transparent px-7 py-3.5 text-sm font-semibold text-ink hover:bg-paper"
            >
              Explore services
            </Link>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.id}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-ink">
                  {s.value}
                  <span className="text-coral">{s.suffix}</span>
                </dd>
                <dd className="mt-1 text-xs leading-snug text-ink/55">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2.5rem] bg-ink shadow-xl">
            <img
              src={images.heroClinic.url}
              alt={images.heroClinic.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

            {/* signature dotted-arch motif, drawn over the photo */}
            <svg viewBox="0 0 300 375" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              <path
                d="M60 260c0-80 40-140 90-140s90 60 90 140"
                fill="none"
                stroke="#faf7f1"
                strokeOpacity="0.4"
                strokeWidth="1.5"
              />
              {Array.from({ length: 10 }).map((_, i) => {
                const t = i / 9;
                const angle = Math.PI * (1 - t);
                const cx = 150 + Math.cos(angle) * 90;
                const cy = 260 - Math.sin(angle) * 140 * (0.72 + 0.28 * Math.sin(angle));
                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy - 10}
                    r={i === 4 || i === 5 ? 9 : 6.5}
                    fill={i === 4 || i === 5 ? "#e6604a" : "#faf7f1"}
                    fillOpacity={i === 4 || i === 5 ? 1 : 0.85}
                  />
                );
              })}
            </svg>

            <p className="absolute bottom-5 left-0 right-0 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70">
              Your smile, mapped
            </p>
          </div>

          <div className="absolute -bottom-6 -left-4 w-56 rounded-2xl border border-line bg-paper p-4 shadow-lg sm:-left-10">
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink/50">Next available</p>
            <p className="mt-1 font-display text-lg font-semibold text-ink">Tomorrow, 10:30 AM</p>
            <p className="mt-0.5 text-xs text-ink/60">with Dr. Amara Osei</p>
          </div>
        </div>
      </div>

      <div className="arch-divider" />
    </section>
  );
}
