import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Confluence Days", href: "#confluence-days" },
  { label: "Workshops", href: "#workshops" },
  { label: "Advisory Board", href: "#advisory-board" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Media", href: "#media" },
  { label: "Register Now", href: "#register" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Column 1 — Brand: logo + tagline */}
          <div className="max-w-xs">
            <div className="inline-block rounded-xl bg-white p-3 shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}images/rset-silver-jubilee-logo.png`}
                alt="RSET Silver Jubilee — Confluence 3.0"
                className="h-16 w-auto sm:h-20"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              The largest industry–academia summit hosted by the Rajagiri
              School of Engineering and Technology (RSET), celebrating its
              Silver Jubilee.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={`${link.path ?? link.href}-${link.label}`}>
                  {link.path ? (
                    <Link
                      to={link.path}
                      className="text-sm text-slate-600 transition-colors hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-navy"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact & venue */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy">
              Contact &amp; Venue
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-crimson"
                  aria-hidden="true"
                />
                <span>
                  Rajagiri Valley, Kakkanad,
                  <br />
                  Kochi, Kerala 682 039, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Calendar
                  className="mt-0.5 h-4 w-4 shrink-0 text-crimson"
                  aria-hidden="true"
                />
                <span>September 1, 2026 · 10:00 AM IST</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            © 2026 Confluence 3.0 · Rajagiri Institutions. All rights reserved.
          </p>
          <a
            href="#privacy"
            className="text-xs text-slate-500 transition-colors hover:text-navy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
