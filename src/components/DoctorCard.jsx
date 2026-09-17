export default function DoctorCard({ doctor, detailed = false }) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-paper p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-ink font-display text-lg font-semibold text-paper">
          {doctor.initials}
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{doctor.name}</h3>
          <p className="text-sm text-coral">{doctor.role}</p>
        </div>
      </div>

      <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-ink/45">
        {doctor.focus} · {doctor.years} yrs experience
      </p>

      <p className="mt-3 text-sm leading-relaxed text-ink/65">{doctor.bio}</p>

      {detailed && (
        <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-xs text-ink/55">
          {doctor.education.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
