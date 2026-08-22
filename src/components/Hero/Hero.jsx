import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__banner-container">
        <video
          src={`${import.meta.env.BASE_URL}images/conf_home.mp4`}
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <img
          src={`${import.meta.env.BASE_URL}images/confluence_logo.jpeg`}
          alt="Confluence 3.0 — The Largest Industry–Academia Summit"
          className="hero__logo"
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
