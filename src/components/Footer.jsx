import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import clinicInfo from "../data/clinicInfo";
import services from "../data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  const topServices = services.slice(0, 5);

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-xl font-semibold">{clinicInfo.name}</span>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">{clinicInfo.tagline}</p>
            <div className="mt-5 flex gap-3 font-mono text-xs uppercase tracking-wider text-paper/50">
              {clinicInfo.social.map((s) => (
                <a key={s.name} href={s.href} className="hover:text-coral">
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-paper/50">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              {topServices.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-coral">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-paper/50">Visit us</h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/80">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0 text-coral" strokeWidth={1.75} />
                <span>
                  {clinicInfo.address.line1}, {clinicInfo.address.line2}
                  <br />
                  {clinicInfo.address.city}, {clinicInfo.address.region} {clinicInfo.address.zip}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-coral" strokeWidth={1.75} />
                <a href={clinicInfo.phoneHref}>{clinicInfo.phone}</a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-coral" strokeWidth={1.75} />
                <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-paper/50">Hours</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
              {clinicInfo.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-paper/60">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>© {year} {clinicInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
            Built as a frontend demo — no data leaves your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
