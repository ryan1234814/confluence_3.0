import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Confluence Days", href: "#confluence-days" },
  { label: "Workshops", href: "#workshops" },
  { label: "Advisory Board", href: "#advisory-board" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Media", href: "#media" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:min-h-24 sm:px-6 sm:py-3 lg:px-8"
      >
        {/* Branding: official RSET Silver Jubilee logo + Confluence 3.0 logo */}
        <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-1">
          <a href="#home" aria-label="RSET Silver Jubilee — Confluence 3.0">
            <img
              src={`${import.meta.env.BASE_URL}images/rset-silver-jubilee-logo.png`}
              alt="RSET Silver Jubilee"
              className="h-16 w-auto sm:h-20"
            />
          </a>
          <img
            src={`${import.meta.env.BASE_URL}images/confluence_logo.jpeg`}
            alt="Confluence 3.0 — The Largest Industry–Academia Summit"
            className="h-8 w-auto sm:h-10"
          />
        </div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile navigation panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
