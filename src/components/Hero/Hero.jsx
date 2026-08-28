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
          preload="metadata"
          poster={`${import.meta.env.BASE_URL}images/poster.jpg`}
          aria-hidden="true"
        />

        <img
          src={`${import.meta.env.BASE_URL}images/new_front.png`}
          alt="Confluence 3.0 — The Largest Industry–Academia Summit"
          className="hero__text-overlay"
          fetchPriority="high"
          aria-hidden="true"
        />
        <h2 className="hero__subtitle">India Impact Of AI</h2>
        <div aria-hidden="true" className="hero__glow" />
      </div>
    </section>
  );
}
