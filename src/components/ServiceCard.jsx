import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IconResolver from "./IconResolver";

export default function ServiceCard({ service, detailed = false }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-md">
      {service.image && (
        <div className="aspect-[16/10] w-full overflow-hidden bg-mist">
          <img
            src={service.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist text-ink">
          <IconResolver name={service.icon} className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink/40">
          {service.category}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">
        {detailed ? service.description : service.short}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
        <div className="text-ink/60">
          From <span className="font-mono font-medium text-ink">${service.priceFrom}</span>
        </div>
        <div className="text-ink/60">{service.duration}</div>
      </div>

      {!detailed && (
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral opacity-0 transition-opacity group-hover:opacity-100"
        >
          Book this service
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
      </div>
    </div>
  );
}
