import { ExternalLink } from "lucide-react";
import SPEAKERS from "./speakersData.js";
import "./Speakers.css";

/* ================================================================== */
/*  LinkedIn SVG icon (matches AdvisoryBoard page)                     */
/* ================================================================== */

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
      </div>

      <div className="speaker-card__body">
        <h3 className="speaker-card__name">{speaker.name}</h3>
        {Array.isArray(speaker.title) ? (
          speaker.title.map((t, i) => (
            <p key={i} className="speaker-card__title">{t}</p>
          ))
        ) : (
          <p className="speaker-card__title">{speaker.title}</p>
        )}
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
        {speaker.linkedinUrl && (
          <a
            href={speaker.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="speaker-card__linkedin"
            aria-label={`LinkedIn profile of ${speaker.name}`}
          >
            <LinkedinIcon aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
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
/*  FeaturedSpeaker — larger, centred card for VIP speakers            */
/* ================================================================== */

function FeaturedSpeaker({ speaker }) {
  return (
    <article className="featured-speaker">
      <div className="featured-speaker__top">
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            className="featured-speaker__photo"
          />
        ) : (
          <div className="featured-speaker__monogram" aria-hidden="true">
            {initials(speaker.name)}
          </div>
        )}
      </div>

      <div className="featured-speaker__body">
        <h3 className="featured-speaker__name">{speaker.name}</h3>
        {Array.isArray(speaker.title) ? (
          speaker.title.map((t, i) => (
            <p key={i} className="featured-speaker__title">{t}</p>
          ))
        ) : (
          <p className="featured-speaker__title">{speaker.title}</p>
        )}
        {speaker.profileUrl && (
          <a
            href={speaker.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-speaker__link"
          >
            View profile
            <ExternalLink className="featured-speaker__link-icon" aria-hidden="true" />
          </a>
        )}
        {speaker.linkedinUrl && (
          <a
            href={speaker.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-speaker__linkedin"
            aria-label={`LinkedIn profile of ${speaker.name}`}
          >
            <LinkedinIcon aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

/* ================================================================== */
/*  SpeakersPage (main export)                                         */
/* ================================================================== */

const FEATURED_IDS = ["speaker-1", "speaker-2"];

export default function SpeakersPage() {
  const featured = SPEAKERS.filter((s) => FEATURED_IDS.includes(s.id));
  const rest = SPEAKERS.filter((s) => !FEATURED_IDS.includes(s.id));

  return (
    <>
      <SpeakersHero />

      <section className="institution">
        <div className="institution__container">
          {/* Featured speakers — stacked vertically */}
          <div className="featured-speakers">
            {featured.map((speaker) => (
              <FeaturedSpeaker key={speaker.id} speaker={speaker} />
            ))}
          </div>

          {/* Remaining speakers — grid */}
          <div className="institution__grid">
            {rest.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
