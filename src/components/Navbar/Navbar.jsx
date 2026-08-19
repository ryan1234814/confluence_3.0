import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Workshops", href: "#workshops" },
  { label: "Advisory Board", path: "/advisory-board" },
  { label: "Speakers", path: "/speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Media", href: "#media" },
  { label: "Contact", path: "/contact" },
];

function renderLink(link, className, onNavigate) {
  if (link.path) {
    return (
      <Link
        key={link.path}
        to={link.path}
        className={className}
        onClick={onNavigate}
      >
        {link.label}
      </Link>
    );
  }
  return (
    <a
      key={link.href}
      href={link.href}
      className={className}
      onClick={onNavigate}
    >
      {link.label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav aria-label="Primary" className="navbar__nav">
        {/* Branding: official RSET Silver Jubilee logo + Confluence 3.0 logo */}
        <div className="navbar__brand">
          <a href="#home" aria-label="RSET Silver Jubilee — Confluence 3.0">
            <img
              src={`${import.meta.env.BASE_URL}images/rset-silver-jubilee-logo.png`}
              alt="RSET Silver Jubilee"
              className="navbar__logo"
            />
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="navbar__links">
          {NAV_LINKS.map((link) =>
            renderLink(link, "navbar__link")
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="navbar__toggle"
        >
          {open ? <X className="navbar__toggle-icon" /> : <Menu className="navbar__toggle-icon" />}
        </button>
      </nav>

      {/* Mobile navigation panel */}
      {open && (
        <div id="mobile-menu" className="navbar__mobile-menu">
          <div className="navbar__mobile-links">
            {NAV_LINKS.map((link) =>
              renderLink(
                link,
                "navbar__mobile-link",
                () => setOpen(false)
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
