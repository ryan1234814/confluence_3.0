import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import "./Day1.css";

/* ================================================================== */
/*  Schedule Data                                                       */
/* ================================================================== */

const DAY1_SCHEDULE = [
  {
    time: "4:00 PM",
    title: "Arrival of the Hon'ble Vice-President of India",
    type: "ceremony",
  },
  {
    time: "4:01 PM",
    title: "Guard of Honor by NCC",
    type: "ceremony",
  },
  {
    time: "4:05 PM",
    title: "National Song, National Anthem & Prayer",
    type: "ceremony",
  },
  {
    time: "4:10 PM",
    title: "Welcome Speech",
    subtitle: "Rev. Dr. Jaison Paul Mulerikkal CMI, Principal, RSET",
    type: "speech",
  },
  {
    time: "4:15 PM",
    title: "Felicitation of the Hon'ble Vice-President and other Dignitaries",
    type: "ceremony",
  },
  {
    time: "4:20 PM",
    title: "Unveiling of the Silver Jubilee Administrative Block Foundation Stone & Watering of Sapling",
    type: "milestone",
  },
  {
    time: "4:20 PM",
    title: "Speech by Shri Suresh Gopi",
    subtitle: "Hon'ble Minister of State for Petroleum & Natural Gas and Tourism",
    type: "keynote",
  },
  {
    time: "4:25 PM",
    title: "Speech by Shri V. D. Satheesan",
    subtitle: "Hon'ble Chief Minister of Kerala",
    type: "keynote",
  },
  {
    time: "4:30 PM",
    title: "Speech by Shri Rajendra Vishwanath Arlekar",
    subtitle: "Hon'ble Governor of Kerala",
    type: "keynote",
  },
  {
    time: "4:35 PM",
    title: "Address by Shri C. P. Radhakrishnan",
    subtitle: "Hon'ble Vice-President of India",
    type: "keynote",
  },
  {
    time: "4:55 PM",
    title: "National Song & National Anthem",
    type: "ceremony",
  },
  {
    time: "4:59 PM",
    title: "Group Photograph",
    type: "ceremony",
  },
  {
    time: "5:00 PM",
    title: "Departure of the Hon'ble Vice-President of India",
    type: "ceremony",
  },
];



/* ================================================================== */
/*  ScheduleHero                                                        */
/* ================================================================== */

function ScheduleHero() {
  return (
    <section className="s-hero">
      <div className="s-hero__content">
        <Link to="/" className="s-hero__back">
          <ArrowLeft aria-hidden="true" />
          Back to Home
        </Link>
        <p className="s-hero__eyebrow">Confluence 3.0</p>
        <h1 className="s-hero__title">Programme Schedule — Day 1</h1>
        <p className="s-hero__subtitle">
          Inauguration & Silver Jubilee Culmination
        </p>
        <div className="s-hero__meta">
          <span className="s-hero__meta-item">
            <Calendar aria-hidden="true" />
            31st August 2026
          </span>
          <span className="s-hero__meta-item">
            <Clock aria-hidden="true" />
            4:00 PM – 5:00 PM
          </span>
          <span className="s-hero__meta-item">
            <MapPin aria-hidden="true" />
            Rajagiri School of Engineering & Technology
          </span>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  TimelineItem                                                       */
/* ================================================================== */

function TimelineItem({ item, index }) {
  return (
    <article className="tl-item">
      {/* Timeline dot */}
      <div className="tl-item__dot" aria-hidden="true">
        <div className="tl-item__dot-inner" />
      </div>

      {/* Timeline connector */}
      {index < DAY1_SCHEDULE.length - 1 && (
        <div className="tl-item__connector" aria-hidden="true" />
      )}

      {/* Card */}
      <div className="tl-item__card">
        <div className="tl-item__time">
          <Clock aria-hidden="true" />
          {item.time}
        </div>

        <div className="tl-item__body">
          <h3 className="tl-item__title">{item.title}</h3>
          {item.subtitle && (
            <p className="tl-item__subtitle">{item.subtitle}</p>
          )}
        </div>
      </div>
    </article>
  );
}

/* ================================================================== */
/*  Day1Page (main export)                                              */
/* ================================================================== */

export default function Day1Page() {
  return (
    <>
      <ScheduleHero />

      <section className="s-schedule">
        <div className="s-schedule__container">
          {/* Evening Sessions */}
          <div className="s-schedule__section">
            <div className="s-schedule__section-header">
              <h2 className="s-schedule__section-title">
                Program Schedule
              </h2>
              <p className="s-schedule__section-sub">
                4:00 PM – 5:00 PM · Official ceremonies and distinguished
                addresses
              </p>
            </div>

            <div className="tl-timeline">
              {DAY1_SCHEDULE.map((item, idx) => (
                <TimelineItem key={idx} item={item} index={idx} />
              ))}
            </div>
          </div>

          {/* Navigation back */}
          <div className="s-schedule__nav">
            <Link to="/" className="s-schedule__nav-btn">
              <ArrowLeft aria-hidden="true" />
              Back to Home
            </Link>
            <Link to="/day2" className="s-schedule__nav-btn s-schedule__nav-btn--next">
              Day 2 Schedule
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
