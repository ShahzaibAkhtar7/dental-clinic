export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-wider text-coral">{eyebrow}</span>
      )}
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-ink/65">{description}</p>}
    </div>
  );
}
