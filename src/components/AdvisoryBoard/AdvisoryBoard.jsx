function LinkedinIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import COMMITTEE from "./advisoryBoardData.js";
import "./AdvisoryBoard.css";

/* ------------------------------------------------------------------ */
/*  Utility: extract initials for monogram fallback                    */
/* ------------------------------------------------------------------ */
function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* ------------------------------------------------------------------ */
/*  Shared LinkedIn link                                               */
/* ------------------------------------------------------------------ */
function LinkedInLink({ member }) {
  if (!member.linkedinUrl) return null;
  return (
    <a
      href={member.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="ab-card__linkedin"
      aria-label={`LinkedIn profile of ${member.name}`}
    >
      <LinkedinIcon aria-hidden="true" />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  PersonCard variants                                                */
/* ------------------------------------------------------------------ */

function PersonCardSpotlight({ member }) {
  return (
    <article className="ab-card ab-card--spotlight">
      <div className="ab-card__avatar ab-card__avatar--spotlight">
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            className="ab-card__img"
          />
        ) : (
          <span className="ab-card__monogram">{initials(member.name)}</span>
        )}
      </div>
      <div className="ab-card__body ab-card__body--spotlight">
        <h3 className="ab-card__name ab-card__name--spotlight">{member.name}</h3>
        <p className="ab-card__designation">{member.designation}</p>
        {member.organization && (
          <p className="ab-card__org">{member.organization}</p>
        )}
        <LinkedInLink member={member} />
      </div>
    </article>
  );
}

function PersonCardPremium({ member }) {
  return (
    <article className="ab-card ab-card--premium">
      <div className="ab-card__avatar ab-card__avatar--premium">
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            className="ab-card__img"
          />
        ) : (
          <span className="ab-card__monogram">{initials(member.name)}</span>
        )}
      </div>
      <div className="ab-card__body">
        <h3 className="ab-card__name">{member.name}</h3>
        <p className="ab-card__designation">{member.designation}</p>
        {member.organization && (
          <p className="ab-card__org">{member.organization}</p>
        )}
        <LinkedInLink member={member} />
      </div>
    </article>
  );
}

function PersonCardStandard({ member }) {
  return (
    <article className="ab-card ab-card--standard">
      <div className="ab-card__avatar ab-card__avatar--standard">
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            className="ab-card__img"
          />
        ) : (
          <span className="ab-card__monogram">{initials(member.name)}</span>
        )}
      </div>
      <div className="ab-card__body">
        <h3 className="ab-card__name">{member.name}</h3>
        <p className="ab-card__designation">{member.designation}</p>
        {member.organization && (
          <p className="ab-card__org">{member.organization}</p>
        )}
        <LinkedInLink member={member} />
      </div>
    </article>
  );
}

function PersonCardCompact({ member }) {
  return (
    <article className="ab-card ab-card--compact">
      <div className="ab-card__avatar ab-card__avatar--compact">
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            className="ab-card__img"
          />
        ) : (
          <span className="ab-card__monogram">{initials(member.name)}</span>
        )}
      </div>
      <div className="ab-card__body">
        <h3 className="ab-card__name">{member.name}</h3>
        <p className="ab-card__designation">{member.designation}</p>
        {member.organization && (
          <p className="ab-card__org">{member.organization}</p>
        )}
        <LinkedInLink member={member} />
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Section renderer                                                   */
/* ------------------------------------------------------------------ */

const CARD_COMPONENTS = {
  spotlight: PersonCardSpotlight,
  premium: PersonCardPremium,
  standard: PersonCardStandard,
  compact: PersonCardCompact,
};

function CommitteeSection({ section }) {
  const Card = CARD_COMPONENTS[section.variant] || PersonCardStandard;

  const gridClass = {
    spotlight: "ab-section__grid--spotlight",
    premium: "ab-section__grid--premium",
    standard: "ab-section__grid--standard",
    compact: "ab-section__grid--compact",
  }[section.variant];

  return (
    <section className="ab-section" id={section.id}>
      <div className="ab-section__container">
        <div className="ab-section__header">
          <p className="ab-section__title">{section.title}</p>
          <div className="ab-section__rule" aria-hidden="true" />
        </div>
        <div className={`ab-section__grid ${gridClass}`}>
          {section.members.map((member) => (
            <Card key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AdvisoryBoard() {
  return (
    <>
      {/* Header banner */}
      <section className="ab-hero">
        <div aria-hidden="true" className="ab-hero__grid" />
        <div className="ab-hero__content">
          <h1 className="ab-hero__title">
            Advisory &amp; Institutional Committee
          </h1>
          <p className="ab-hero__text">
            A distinguished council of academic and industry leaders guiding
            the direction and quality of the Confluence 3.0 programme.
          </p>
        </div>
      </section>

      {/* Committee sections — rendered from data */}
      {COMMITTEE.map((section) => (
        <CommitteeSection key={section.id} section={section} />
      ))}
    </>
  );
}
