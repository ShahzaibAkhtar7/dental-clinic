import { useMemo, useState } from "react";
import services from "../data/services";
import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";

export default function ServicesSection({ limit, showFilter = false, id }) {
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(services.map((s) => s.category)))],
    []
  );

  const filtered = useMemo(() => {
    let list = category === "All" ? services : services.filter((s) => s.category === category);
    if (limit) list = list.slice(0, limit);
    return list;
  }, [category, limit]);

  return (
    <section id={id} className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we treat"
            title="Care for every stage of your smile"
            description="From routine cleanings to full restorations, each visit starts with a plan you understand and agree with — no surprise procedures."
          />
        </div>

        {showFilter && (
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                  category === c
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-ink/60 hover:border-ink/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
