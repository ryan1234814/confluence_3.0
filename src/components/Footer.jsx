const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Confluence Days", href: "#confluence-days" },
  { label: "Workshops", href: "#workshops" },
  { label: "Advisory Board", href: "#advisory-board" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Media", href: "#media" },
  { label: "Register Now", href: "#register" },
];

const INSTITUTIONS = [
  { abbr: "RSET", name: "Rajagiri School of Engineering and Technology" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Official logo */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/rset-silver-jubilee-logo.png`}
              alt="RSET Silver Jubilee"
              className="h-24 w-auto bg-white sm:h-32"
            />
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Participating institution */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy">
              Participating Institution
            </h3>
            <ul className="mt-5 space-y-4">
              {INSTITUTIONS.map((institution) => (
                <li key={institution.abbr} className="text-sm leading-snug">
                  <span className="font-semibold text-navy">
                    {institution.abbr}
                  </span>
                  <span className="block text-slate-500">
                    {institution.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact & venue details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy">
              Contact &amp; Venue
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              <li>
                Rajagiri Valley, Kakkanad,
                <br />
                Kochi, Kerala 682 039, India
              </li>
              <li>
                <a
                  href="mailto:confluence@rajagiri.edu"
                  className="transition-colors hover:text-navy"
                >
                  confluence@rajagiri.edu
                </a>
              </li>
              <li>September 1, 2026 · 10:00 AM IST</li>
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
