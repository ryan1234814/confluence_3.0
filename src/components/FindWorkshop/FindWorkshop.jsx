import { useState, useMemo, useRef, useCallback } from "react";
import { Search, X, MapPin, Clock, Hash, BookOpen, Building2, ExternalLink } from "lucide-react";
import WORKSHOPS, { POST_EVENT_WORKSHOPS } from "../Workshop/workshopdata.js";

const ALL_WORKSHOPS = [...WORKSHOPS, ...POST_EVENT_WORKSHOPS];
import "./FindWorkshop.css";

/* ================================================================== */
/*  Block → Google Maps URL mapping                                    */
/* ================================================================== */

const BLOCK_MAP_URLS = {
  "Main Block": "https://maps.app.goo.gl/fSFXSsspLcRJEnaX7?g_st=ipc",
  "PG Block": "https://maps.app.goo.gl/SGaQcx7B5euFwghC9?g_st=ipc",
  "KE Block": "https://maps.app.goo.gl/StVpmNTFwcQhf84f9?g_st=ipc",
  "Steag Extension, KE Block": "https://maps.app.goo.gl/StVpmNTFwcQhf84f9?g_st=ipc",
};

function getMapUrl(block) {
  if (!block) return null;
  return BLOCK_MAP_URLS[block] || null;
}

/* ================================================================== */
/*  Hero                                                               */
/* ================================================================== */

function VenueHero() {
  return (
    <section className="vw-hero">
      <div className="vw-hero__content">
        <p className="vw-hero__eyebrow">Confluence 3.0</p>
        <h1 className="vw-hero__title">Find My Workshop</h1>
        <p className="vw-hero__text">
          Quickly locate your workshop venue on campus. Search by workshop
          name or number to find the exact room and block.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  VenueCard                                                          */
/* ================================================================== */

function VenueCard({ workshop, index }) {
  const mapUrl = getMapUrl(workshop.block);

  return (
    <article className="vw-card" tabIndex={0} aria-label={`Workshop: ${workshop.title}`}>
      <div className="vw-card__accent" aria-hidden="true" />
      <div className="vw-card__body">
        <div className="vw-card__top">
          <span className="vw-card__number" aria-label={`Workshop number ${index}`}>
            {index}
          </span>
          <div className="vw-card__meta">
            <span className="vw-card__meta-item">
              <Clock aria-hidden="true" />
              {workshop.time}
            </span>
          </div>
        </div>
        <h3 className="vw-card__title">{workshop.title}</h3>
        <div className="vw-card__venue">
          <MapPin aria-hidden="true" />
          <span>{workshop.venue}</span>
        </div>
        {workshop.block && (
          <div className="vw-card__block">
            <Building2 aria-hidden="true" />
            <span>{workshop.block}</span>
          </div>
        )}
        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="vw-card__map-btn"
            onClick={(e) => e.stopPropagation()}
          >
            <MapPin aria-hidden="true" />
            View in Map
            <ExternalLink aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

/* ================================================================== */
/*  EmptyState                                                         */
/* ================================================================== */

function EmptyState({ query }) {
  return (
    <div className="vw-empty" role="status">
      <div className="vw-empty__icon">
        <BookOpen aria-hidden="true" />
      </div>
      <h3 className="vw-empty__title">No workshops found</h3>
      <p className="vw-empty__text">
        No results match "<strong>{query}</strong>". Try a different
        workshop name or number.
      </p>
    </div>
  );
}

/* ================================================================== */
/*  FindWorkshopPage (main export)                                     */
/* ================================================================== */

export default function FindWorkshopPage() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return ALL_WORKSHOPS;
    const q = query.toLowerCase().trim();
    return ALL_WORKSHOPS.filter(
      (w, i) =>
        w.title.toLowerCase().includes(q) ||
        w.venue.toLowerCase().includes(q) ||
        (w.block && w.block.toLowerCase().includes(q)) ||
        String(i + 1) === q ||
        w.id.toLowerCase().includes(q)
    );
  }, [query]);

  const clearSearch = useCallback(() => {
    setQuery("");
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && query) clearSearch();
    },
    [query, clearSearch]
  );

  return (
    <>
      <VenueHero />

      <section className="vw-search-section">
        <div className="vw-search-section__container">
          {/* Search bar */}
          <div className="vw-search" role="search" aria-label="Find workshop venue">
            <label htmlFor="venue-search" className="vw-search__label">
              Search by workshop name or number
            </label>
            <div className="vw-search__input-wrapper">
              <Search className="vw-search__icon" aria-hidden="true" />
              <input
                ref={inputRef}
                id="venue-search"
                type="text"
                className="vw-search__input"
                placeholder="e.g. AI Agents, Machine Learning, 5…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck="false"
              />
              {query && (
                <button
                  type="button"
                  className="vw-search__clear"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <X aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          <div className="vw-results-header">
            <p className="vw-results-count">
              {filtered.length === ALL_WORKSHOPS.length
                ? `All ${ALL_WORKSHOPS.length} workshops`
                : `${filtered.length} of ${ALL_WORKSHOPS.length} workshops`}
            </p>
            {query && (
              <button
                type="button"
                className="vw-results-clear"
                onClick={clearSearch}
              >
                Clear search
              </button>
            )}
          </div>

          {/* Results */}
          {filtered.length > 0 ? (
            <div className="vw-grid">
              {filtered.map((w, idx) => (
                <VenueCard key={w.id} workshop={w} index={ALL_WORKSHOPS.indexOf(w) + 1} />
              ))}
            </div>
          ) : (
            <EmptyState query={query} />
          )}
        </div>
      </section>
    </>
  );
}
