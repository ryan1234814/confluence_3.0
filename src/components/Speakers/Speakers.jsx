import { ExternalLink } from "lucide-react";
import SPEAKERS from "./speakersData.js";
import "./Speakers.css";

/* ================================================================== */
/*  Utility: initials for monogram fallback                            */
/* ================================================================== */

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* ================================================================== */
/*  SpeakerCard                                                        */
/* ================================================================== */

function SpeakerCard({ speaker }) {
  return (
    <article className="speaker-card">
      <div className="speaker-card__top">
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            className="speaker-card__photo"
          />
        ) : (
          <div className="speaker-card__monogram" aria-hidden="true">
            {initials(speaker.name)}
          </div>
        )}
        {speaker.category && (
          <span className="speaker-card__tag">{speaker.category}</span>
        )}
      </div>

      <div className="speaker-card__body">
        <h3 className="speaker-card__name">{speaker.name}</h3>
        <p className="speaker-card__title">{speaker.title}</p>
        {speaker.profileUrl && (
          <a
            href={speaker.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="speaker-card__link"
          >
            View profile
            <ExternalLink className="speaker-card__link-icon" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

/* ================================================================== */
/*  InstitutionSection                                                 */
/* ================================================================== */

function InstitutionSection({ section }) {
  return (
    <section className="institution" id={section.id}>
      <div className="institution__container">
        <div className="institution__header">
          <p className="institution__title">{section.institution}</p>
          <div className="institution__rule" aria-hidden="true" />
        </div>

        <div className="institution__grid">
          {section.speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SpeakersHero                                                       */
/* ================================================================== */

function SpeakersHero() {
  return (
    <section className="speakers-hero">
      <div className="speakers-hero__content">
        <h1 className="speakers-hero__title">Meet the Visionaries</h1>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SpeakersPage (main export)                                         */
/* ================================================================== */

export default function SpeakersPage() {
  return (
    <>
      <SpeakersHero />

      {SPEAKERS.map((section) => (
        <InstitutionSection key={section.id} section={section} />
      ))}
    </>
  );
}
