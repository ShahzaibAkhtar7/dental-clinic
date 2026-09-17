export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {eyebrow && (
          <span className="font-mono text-xs uppercase tracking-wider text-coral">{eyebrow}</span>
        )}
        <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/65">{description}</p>
        )}
      </div>
      <div className="arch-divider mt-16" />
    </section>
  );
}
