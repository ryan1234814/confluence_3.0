import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__banner-container">
        <img
          src={`${import.meta.env.BASE_URL}images/new_home.png`}
          alt="Confluence 3.0 — The Largest Industry–Academia Summit"
          className="hero__image"
          width="1828"
          height="1024"
          loading="eager"
          fetchPriority="high"
        />
        <div aria-hidden="true" className="hero__glow" />
      </div>
    </section>
  );
}
