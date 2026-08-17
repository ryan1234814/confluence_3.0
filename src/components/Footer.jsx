import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import "./Footer.css";

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
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Column 1 — Brand: logo + tagline */}
          <div className="footer__brand">
            <div className="footer__logo-box">
              <img
                src={`${import.meta.env.BASE_URL}images/rset-silver-jubilee-logo.png`}
                alt="RSET Silver Jubilee — Confluence 3.0"
                className="footer__logo"
              />
            </div>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">
              {QUICK_LINKS.map((link) => (
                <li key={`${link.path ?? link.href}-${link.label}`}>
                  {link.path ? (
                    <Link to={link.path} className="footer__link">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact & venue */}
          <div>
            <h3 className="footer__heading">Contact &amp; Venue</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <MapPin className="footer__icon" aria-hidden="true" />
                <span>
                  Rajagiri Valley, Kakkanad,
                  <br />
                  Kochi, Kerala 682 039, India
                </span>
              </li>
              <li className="footer__contact-item">
                <Calendar className="footer__icon" aria-hidden="true" />
                <span>September 1, 2026 · 10:00 AM IST</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            © 2026 Confluence 3.0 · Rajagiri Institutions. All rights reserved.
          </p>
          <a href="#privacy" className="footer__privacy">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
