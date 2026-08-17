import { ArrowRight, Ticket } from "lucide-react";
import "./Hero.css";

const CTA_BUTTONS = (
  <div className="hero__ctas">
    <a
      href="#program"
      className="hero__cta hero__cta--primary"
    >
      Explore Events
      <ArrowRight className="hero__cta-icon" />
    </a>
    <a
      href="#register"
      className="hero__cta hero__cta--ghost"
    >
      <Ticket className="hero__cta-icon" />
      Get Summit Pass
    </a>
  </div>
);

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Mobile / tablets: responsive cover crop with the center as the focal
          point. The box is kept at least 4:3 so the full "CONFLUENCE 3.0"
          title (which spans the central ~57% of the image) is never cropped —
          only the outer audience/background is trimmed on narrow screens. */}
      <div className="hero__mobile">
        <div className="hero__mobile-image">
          <img
            src={`${import.meta.env.BASE_URL}images/new_home1.png`}
            alt="Confluence 3.0 — The Largest Industry–Academia Summit"
            className="hero__image"
          />
        </div>
        <div className="hero__mobile-ctas">{CTA_BUTTONS}</div>
      </div>

      {/* Desktop / laptop: full-bleed cover background (unchanged look) */}
      <div className="hero__desktop">
        <img
          src={`${import.meta.env.BASE_URL}images/new_home1.png`}
          alt="Confluence 3.0 — The Largest Industry–Academia Summit"
          className="hero__image"
        />
        {/* Soft scrim at the bottom so the CTAs stay readable */}
        <div aria-hidden="true" className="hero__scrim" />
        <div className="hero__content">{CTA_BUTTONS}</div>
      </div>
    </section>
  );
}
