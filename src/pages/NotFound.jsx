import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-mist px-5 py-24 text-center">
      <span className="font-mono text-sm uppercase tracking-wider text-coral">404</span>
      <h1 className="mt-3 font-display text-4xl font-medium text-ink">This page wandered off.</h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
        The page you're looking for doesn't exist — but your appointment booking still does.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white hover:bg-coral-dark"
      >
        Back to home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
