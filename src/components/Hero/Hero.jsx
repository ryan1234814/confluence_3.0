import "./Hero.css";

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
      </div>

      {/* Desktop / laptop: full-bleed cover background (unchanged look) */}
      <div className="hero__desktop">
        <img
          src={`${import.meta.env.BASE_URL}images/new_home1.png`}
          alt="Confluence 3.0 — The Largest Industry–Academia Summit"
          className="hero__image"
        />
      </div>
    </section>
  );
}
