import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import clinicInfo from "../data/clinicInfo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Our Dentists" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive ? "text-coral" : "text-ink/80 hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-line)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3c-2.2 0-3.3 1.1-4.3 1.1-1.2 0-2.4-.9-3.6-.4C2.6 4.3 2 6 2 8.3c0 3.6 1.8 9.4 3.4 11.8.8 1.2 1.6 2 2.5 2 1 0 1.4-.7 2.1-.7.7 0 1 .7 2 .7.9 0 1.7-.8 2.5-2C13.9 17.9 15 14.4 15 11.3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 3c2.2 0 3.3 1.1 4.3 1.1.8 0 1.6-.4 2.4-.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold leading-none text-ink">
            {clinicInfo.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={clinicInfo.phoneHref} className="flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-ink">
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {clinicInfo.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-coral-dark"
          >
            Book a visit
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? "bg-mist text-coral" : "text-ink/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
            <a href={clinicInfo.phoneHref} className="flex items-center gap-2 text-sm font-medium text-ink/80">
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              {clinicInfo.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-coral px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book a visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
