import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import AppointmentForm from "../components/AppointmentForm";
import clinicInfo from "../data/clinicInfo";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Book a visit"
        title="Let's find a time that works."
        description="Fill out the form and our front desk will confirm by phone or email within one business day. Need something sooner? Call us directly."
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div className="space-y-8">
            <div className="rounded-2xl border border-line p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Contact details</h3>
              <ul className="mt-5 space-y-4 text-sm text-ink/70">
                <li className="flex gap-3">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-coral" strokeWidth={1.75} />
                  <span>
                    {clinicInfo.address.line1}, {clinicInfo.address.line2}
                    <br />
                    {clinicInfo.address.city}, {clinicInfo.address.region} {clinicInfo.address.zip}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-coral" strokeWidth={1.75} />
                  <a href={clinicInfo.phoneHref}>{clinicInfo.phone}</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0 text-coral" strokeWidth={1.75} />
                  <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-line p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                <Clock className="h-4 w-4 text-coral" strokeWidth={1.75} />
                Hours
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm">
                {clinicInfo.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-ink/70">
                    <span>{h.day}</span>
                    <span className="font-medium text-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 rounded-2xl bg-coral/10 p-6">
              <AlertCircle className="h-5 w-5 flex-shrink-0 text-coral" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {clinicInfo.emergency.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/65">
                  {clinicInfo.emergency.note} Please call rather than booking online.
                </p>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-2xl border border-line bg-mist">
              <svg viewBox="0 0 400 225" className="h-full w-full" aria-label="Map placeholder showing clinic location">
                <rect width="400" height="225" fill="#e9f1ec" />
                <path d="M0 150 H400 M0 90 H400 M60 0 V225 M200 0 V225 M330 0 V225" stroke="#d7e6dd" strokeWidth="2" />
                <circle cx="200" cy="112" r="10" fill="#e6604a" />
                <circle cx="200" cy="112" r="18" fill="#e6604a" fillOpacity="0.25" />
                <text x="200" y="150" textAnchor="middle" fontSize="11" fontFamily="IBM Plex Mono, monospace" fill="#0f322c" fillOpacity="0.55">
                  482 Maple Grove Ave
                </text>
              </svg>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Request an appointment</h2>
            <p className="mt-2 text-sm text-ink/60">
              This form is a frontend demo — submissions aren't sent anywhere, but you'll see a confirmation once it validates.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
