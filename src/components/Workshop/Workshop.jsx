import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, X, ArrowRight, Calendar, ExternalLink, Search } from "lucide-react";
import WORKSHOPS, { POST_EVENT_WORKSHOPS } from "./workshopdata.js";
import "./Workshop.css";

/* ================================================================== */
/*  WorkshopHero                                                       */
/* ================================================================== */

function WorkshopHero() {
  return (
    <section className="ws-hero">
      <div className="ws-hero__content">
        <p className="ws-hero__eyebrow">Confluence 3.0</p>
        <h1 className="ws-hero__title">Workshops</h1>
        <p className="ws-hero__text">
          Interactive sessions designed to bridge theory and practice — learn,
          build, and collaborate with industry experts across engineering
          and technology domains.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  WorkshopCard                                                       */
/* ================================================================== */

function WorkshopCard({ workshop, onClick, index }) {
  return (
    <article className={`ws-card${workshop.soldOut ? " ws-card--sold-out" : ""}`} onClick={() => onClick(workshop)}>
      <div className="ws-card__accent" aria-hidden="true" />

      {workshop.soldOut && <span className="ws-card__sold-out-tag">SOLD OUT</span>}

      <div className="ws-card__body">
        <div className="ws-card__top">
          <span className="ws-card__number">{index}</span>
          <div className="ws-card__meta">
            <span className="ws-card__meta-item">
              <Calendar aria-hidden="true" />
              1 Sep 2026
            </span>
            <span className="ws-card__meta-item">
              <Clock aria-hidden="true" />
              {workshop.time}
            </span>
          </div>
        </div>

        <h3 className="ws-card__title">{workshop.title}</h3>

        <div className="ws-card__footer">
          <div className="ws-card__speaker">
            <span className="ws-card__speaker-label">
              {workshop.resourcePersons ? "Resource Persons" : "Resource Person"}
            </span>
            {workshop.resourcePersons ? (
              workshop.resourcePersons.map((p, i) => (
                <span key={i} className="ws-card__speaker-name">
                  {p.name}
                  <span className="ws-card__speaker-affiliation" style={{ display: "block" }}>
                    {p.designation}
                  </span>
                </span>
              ))
            ) : (
              <>
                <span className="ws-card__speaker-name">{workshop.resourcePerson.split(", ")[0]}</span>
                <span className="ws-card__speaker-affiliation">{workshop.resourcePerson.split(", ").slice(1).join(", ")}</span>
              </>
            )}
            {workshop.image && (
              <div className="ws-card__speaker-photos">
                <img
                  src={workshop.image}
                  alt={workshop.resourcePersons ? "Resource Person" : workshop.resourcePerson.split(", ")[0]}
                  className="ws-card__speaker-photo"
                  loading="lazy"
                  decoding="async"
                />
                {workshop.image2 && (
                  <img
                    src={workshop.image2}
                    alt="Resource Person"
                    className="ws-card__speaker-photo"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
            )}
          </div>

          <div className="ws-card__venue">
            <MapPin aria-hidden="true" />
            <span>{workshop.venue}</span>
          </div>

          <div className="ws-card__actions">
            <span className="ws-card__cta">
              View details
              <ArrowRight aria-hidden="true" />
            </span>
            {workshop.registrationLink && (
              <a
                href={workshop.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`ws-card__register${workshop.soldOut ? " ws-card__register--disabled" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (workshop.soldOut) e.preventDefault();
                }}
              >
                Register Now
                <ExternalLink aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ================================================================== */
/*  PostEventWorkshopCard                                              */
/* ================================================================== */

function PostEventWorkshopCard({ workshop, onClick, index }) {
  return (
    <article className={`ws-card${workshop.soldOut ? " ws-card--sold-out" : ""}`} onClick={() => onClick(workshop)}>
      <div className="ws-card__accent" aria-hidden="true" />

      {workshop.soldOut && <span className="ws-card__sold-out-tag">SOLD OUT</span>}

      <div className="ws-card__body">
        <div className="ws-card__top">
          <span className="ws-card__number">{index}</span>
          <div className="ws-card__meta">
            <span className="ws-card__meta-item">
              <Calendar aria-hidden="true" />
              {workshop.date}
            </span>
            <span className="ws-card__meta-item">
              <Clock aria-hidden="true" />
              {workshop.time}
            </span>
          </div>
        </div>

        <h3 className="ws-card__title">{workshop.title}</h3>

        <div className="ws-card__footer">
          <div className="ws-card__speaker">
            <span className="ws-card__speaker-label">Resource Persons</span>
            {workshop.resourcePersons.map((p, i) => (
              <span key={i} className="ws-card__speaker-name">
                {p.name}
                <span className="ws-card__speaker-affiliation" style={{ display: "block" }}>
                  {p.designation}
                </span>
              </span>
            ))}
            {workshop.image && (
              <div className="ws-card__speaker-photos">
                <img
                  src={workshop.image}
                  alt="Resource Person"
                  className="ws-card__speaker-photo"
                  loading="lazy"
                  decoding="async"
                />
                {workshop.image2 && (
                  <img
                    src={workshop.image2}
                    alt="Resource Person"
                    className="ws-card__speaker-photo"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {workshop.image3 && (
                  <img
                    src={workshop.image3}
                    alt="Resource Person"
                    className="ws-card__speaker-photo"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
            )}
          </div>

          <div className="ws-card__venue">
            <MapPin aria-hidden="true" />
            <span>{workshop.venue}</span>
          </div>

          <div className="ws-card__actions">
            <span className="ws-card__cta">
              View details
              <ArrowRight aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ================================================================== */
/*  DetailModal                                                        */
/* ================================================================== */

function DetailModal({ workshop, onClose }) {
  const overlayRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  if (!workshop) return null;

  return (
    <div
      className="ws-modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={workshop.title}
    >
      <div className="ws-modal">
        {/* Dark header banner */}
        <div className="ws-modal__banner">
          <div className="ws-modal__banner-accent" aria-hidden="true" />
          <div className="ws-modal__banner-content">
            <h2 className="ws-modal__banner-title">{workshop.title}</h2>
          </div>
          <button
            className="ws-modal__close"
            onClick={onClose}
            aria-label="Close workshop details"
          >
            <X />
          </button>
        </div>

        {/* Sold out banner */}
        {workshop.soldOut && <div className="ws-modal__sold-out-banner">SOLD OUT</div>}

        {/* Info grid */}
        <div className="ws-modal__info-grid">
          <div className="ws-modal__info-card">
            <span className="ws-modal__info-icon">
              <Calendar aria-hidden="true" />
            </span>
            <div className="ws-modal__info-content">
              <span className="ws-modal__info-label">Date</span>
              <span className="ws-modal__info-value">{workshop.date || "1 Sep 2026"}</span>
            </div>
          </div>

          <div className="ws-modal__info-card">
            <span className="ws-modal__info-icon">
              <Clock aria-hidden="true" />
            </span>
            <div className="ws-modal__info-content">
              <span className="ws-modal__info-label">Time</span>
              <span className="ws-modal__info-value">{workshop.time}</span>
            </div>
          </div>

          <div className="ws-modal__info-card ws-modal__info-card--full">
            <span className="ws-modal__info-icon">
              <MapPin aria-hidden="true" />
            </span>
            <div className="ws-modal__info-content">
              <span className="ws-modal__info-label">Venue</span>
              <span className="ws-modal__info-value">{workshop.venue}</span>
            </div>
          </div>
        </div>

        {/* Resource person(s) */}
        <div className="ws-modal__body">
          {workshop.resourcePersons ? (
            <>
              <h3 className="ws-modal__section-title">Resource Persons</h3>
              {workshop.resourcePersons.map((p, i) => (
                <div key={i} style={{ marginBottom: i < workshop.resourcePersons.length - 1 ? "0.75rem" : 0 }}>
                  <p className="ws-modal__resource-person">{p.name}</p>
                  <p className="ws-modal__resource-affiliation">{p.designation}</p>
                </div>
              ))}
            </>
          ) : (
            <>
              <h3 className="ws-modal__section-title">Resource Person</h3>
              <p className="ws-modal__resource-person">{workshop.resourcePerson.split(", ")[0]}</p>
              <p className="ws-modal__resource-affiliation">{workshop.resourcePerson.split(", ").slice(1).join(", ")}</p>
            </>
          )}
          {workshop.image && (
            <div className="ws-modal__speaker-photo-container">
              <img
                src={workshop.image}
                alt={workshop.resourcePersons ? "Resource Person" : workshop.resourcePerson.split(", ")[0]}
                className="ws-modal__speaker-photo"
                loading="lazy"
                decoding="async"
              />
              {workshop.image2 && (
                <img
                  src={workshop.image2}
                  alt="Resource Person"
                  className="ws-modal__speaker-photo"
                  loading="lazy"
                  decoding="async"
                />
              )}
              {workshop.image3 && (
                <img
                  src={workshop.image3}
                  alt="Resource Person"
                  className="ws-modal__speaker-photo"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {workshop.registrationLink && (
          <div className="ws-modal__footer">
            <div className="ws-modal__footer-actions">
              <a
                href={workshop.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`ws-modal__register${workshop.soldOut ? " ws-modal__register--disabled" : ""}`}
                onClick={workshop.soldOut ? (e) => e.preventDefault() : undefined}
              >
                Register Now
                <ExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  WorkshopPage (main export)                                         */
/* ================================================================== */

export default function WorkshopPage() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  return (
    <>
      <WorkshopHero />

      {/* Find My Workshop Venue CTA */}
      <section className="ws-venue-cta">
        <div className="ws-venue-cta__container">
          <div className="ws-venue-cta__content">
            <h2 className="ws-venue-cta__title">Find My Workshop Venue</h2>
            <p className="ws-venue-cta__text">
              Need help locating your workshop? Search by name or number to
              find the exact room and block on campus.
            </p>
            <div className="ws-venue-cta__actions">
              <Link to="/venue" className="ws-venue-cta__btn">
                <Search aria-hidden="true" />
                Find My Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Workshops */}
      <section className="ws-list-section">
        <div className="ws-list-section__container">
          <div className="ws-list-section__header">
            <h2 className="ws-list-section__title">Workshops</h2>
            <div className="ws-list-section__rule" aria-hidden="true" />
          </div>

          <div className="ws-grid">
            {WORKSHOPS.map((w, idx) => (
              <WorkshopCard
                key={w.id}
                workshop={w}
                onClick={setSelectedWorkshop}
                index={idx + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Post-Event Workshops */}
      <section className="ws-list-section">
        <div className="ws-list-section__container">
          <div className="ws-list-section__header">
            <h2 className="ws-list-section__title">Post-Event Workshops</h2>
            <div className="ws-list-section__rule" aria-hidden="true" />
          </div>

          <div className="ws-grid">
            {POST_EVENT_WORKSHOPS.map((w, idx) => (
              <PostEventWorkshopCard
                key={w.id}
                workshop={w}
                onClick={setSelectedWorkshop}
                index={idx + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedWorkshop && (
        <DetailModal
          workshop={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </>
  );
}
