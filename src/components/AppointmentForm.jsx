import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import services from "../data/services";
import doctors from "../data/doctors";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: services[0].id,
  doctor: "no-preference",
  date: "",
  time: "",
  notes: "",
};

export default function AppointmentForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!form.email.trim()) next.email = "Enter an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "That email doesn't look right.";
    if (!form.phone.trim()) next.phone = "Enter a phone number.";
    if (!form.date) next.date = "Choose a preferred date.";
    if (!form.time) next.time = "Choose a preferred time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const chosenService = services.find((s) => s.id === form.service);
    setSubmitted({ ...form, serviceName: chosenService?.name });
    setForm(initialState);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-paper p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mist">
          <CheckCircle2 className="h-7 w-7 text-coral" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">Request received</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink/65">
          Thanks, {submitted.name.split(" ")[0]} — we've noted your request for{" "}
          <span className="font-medium text-ink">{submitted.serviceName}</span> on{" "}
          <span className="font-medium text-ink">{submitted.date}</span> at{" "}
          <span className="font-medium text-ink">{submitted.time}</span>. Our front desk will call{" "}
          {submitted.phone} to confirm.
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink/40">
          This is a frontend demo — no request was actually sent.
        </p>
        <button
          onClick={() => setSubmitted(null)}
          className="mt-6 rounded-full border border-ink/15 px-6 py-2.5 text-sm font-semibold text-ink hover:bg-mist"
        >
          Book another visit
        </button>
      </div>
    );
  }

  const inputClass = (field) =>
    `mt-1.5 w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 ${
      errors[field] ? "border-coral" : "border-line"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-ink/55">
            Full name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Jordan Lee"
            className={inputClass("name")}
          />
          {errors.name && <p className="mt-1.5 text-xs text-coral">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-ink/55">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="jordan@email.com"
            className={inputClass("email")}
          />
          {errors.email && <p className="mt-1.5 text-xs text-coral">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wide text-ink/55">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(555) 123-4567"
            className={inputClass("phone")}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-coral">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="service" className="text-xs font-medium uppercase tracking-wide text-ink/55">
            Service
          </label>
          <select id="service" value={form.service} onChange={update("service")} className={inputClass("service")}>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="doctor" className="text-xs font-medium uppercase tracking-wide text-ink/55">
            Preferred dentist
          </label>
          <select id="doctor" value={form.doctor} onChange={update("doctor")} className={inputClass("doctor")}>
            <option value="no-preference">No preference</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="text-xs font-medium uppercase tracking-wide text-ink/55">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={form.date}
              onChange={update("date")}
              className={inputClass("date")}
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.date && <p className="mt-1.5 text-xs text-coral">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="time" className="text-xs font-medium uppercase tracking-wide text-ink/55">
              Time
            </label>
            <input
              id="time"
              type="time"
              value={form.time}
              onChange={update("time")}
              className={inputClass("time")}
            />
            {errors.time && <p className="mt-1.5 text-xs text-coral">{errors.time}</p>}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className="text-xs font-medium uppercase tracking-wide text-ink/55">
            Anything we should know? (optional)
          </label>
          <textarea
            id="notes"
            rows={3}
            value={form.notes}
            onChange={update("notes")}
            placeholder="Dental anxiety, specific tooth pain, insurance questions..."
            className={inputClass("notes")}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-coral py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark sm:w-auto sm:px-8"
      >
        Request appointment
      </button>
    </form>
  );
}
