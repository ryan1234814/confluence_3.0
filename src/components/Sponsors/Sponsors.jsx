import SPONSORS from "./sponsorsData.js";
import "./Sponsors.css";

/* ================================================================== */
/*  Sponsor logo / monogram fallback                                    */
/* ================================================================== */

function SponsorLogo({ member }) {
  if (member.logo) {
    return (
      <img
        src={member.logo}
        alt={member.name}
        className="sponsors-card__logo"
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <div className="sponsors-card__monogram" aria-hidden="true">
      {member.abbrev}
    </div>
  );
}

/* ================================================================== */
/*  SponsorCard                                                        */
/* ================================================================== */

function SponsorCard({ member }) {
  /* bare: logo-only, no card chrome or text */
  if (member.bare) {
    return (
      <div className="sponsors-card sponsors-card--bare">
        <SponsorLogo member={member} />
      </div>
    );
  }

  const Wrapper = member.url && member.url !== "#" ? "a" : "div";
  const wrapperProps =
    Wrapper === "a"
      ? {
          href: member.url,
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

  return (
    <Wrapper className="sponsors-card" {...wrapperProps}>
      <SponsorLogo member={member} />
      <div className="sponsors-card__body">
        <h3 className="sponsors-card__name">{member.name}</h3>
        {member.tagline && (
          <p className="sponsors-card__tagline">{member.tagline}</p>
        )}
      </div>
    </Wrapper>
  );
}

/* ================================================================== */
/*  SilverPartnerItem — logo-only, no card chrome                      */
/* ================================================================== */

function SilverPartnerItem({ member }) {
  return (
    <div className="silver-partner-item">
      <img
        src={member.logo}
        alt={member.name}
        className="silver-partner-item__logo"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/* ================================================================== */
/*  SilverPartnersTier — renders a logo-only grid                      */
/* ================================================================== */

function SilverPartnersTier({ tier }) {
  return (
    <section className={`sponsors-tier sponsors-tier--${tier.tier}`} id={tier.id}>
      <div className="sponsors-tier__container">
        <div className="sponsors-tier__header">
          <h2 className="sponsors-tier__title">{tier.title}</h2>
          <div className="sponsors-tier__rule" aria-hidden="true" />
        </div>

        <div className="silver-partners-grid">
          {tier.members.map((member, idx) => (
            <SilverPartnerItem key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SponsorsTier — one tier section                                    */
/* ================================================================== */

function SponsorsTier({ tier }) {
  return (
    <section className={`sponsors-tier sponsors-tier--${tier.tier}`} id={tier.id}>
      <div className="sponsors-tier__container">
        <div className="sponsors-tier__header">
          <h2 className="sponsors-tier__title">{tier.title}</h2>
          <div className="sponsors-tier__rule" aria-hidden="true" />
          {tier.description && (
            <p className="sponsors-tier__desc">{tier.description}</p>
          )}
        </div>

        <div
          className={`sponsors-tier__grid sponsors-tier__grid--${tier.tier}`}
        >
          {tier.members.map((member) => (
            <SponsorCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SponsorsPage (main export)                                         */
/* ================================================================== */

export default function Sponsors() {
  return (
    <>
      {/* Hero banner — dark, matching Speakers / Advisory Board pages */}
      <section className="sponsors-hero">
        <div className="sponsors-hero__content">
          <h1 className="sponsors-hero__title">Sponsors &amp; Partners</h1>
          <p className="sponsors-hero__text">
            We are proud to collaborate with forward-thinking organisations
            that share our vision of bridging industry and academia.
          </p>
        </div>
      </section>

      {/* Tier sections */}
      {SPONSORS.map((tier) =>
        tier.tier === "silver-partners" || tier.tier === "platinum" ? (
          <SilverPartnersTier key={tier.id} tier={tier} />
        ) : (
          <SponsorsTier key={tier.id} tier={tier} />
        )
      )}
    </>
  );
}
