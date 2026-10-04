import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import "./Day2.css";

/* ================================================================== */
/*  Schedule Data                                                       */
/* ================================================================== */

const DAY2_SCHEDULE = [
  {
    time: "09:45 AM",
    title: "Prayer Dance",
    subtitle: "Pravaha",
    type: "performance",
  },
  {
    time: "09:52 AM",
    title: "Context Setting",
    subtitle: "Mr. V K Mathews, Chairman, IBS Software",
    type: "speech",
  },
  {
    time: "10:05 AM",
    title: "Panel Discussion — India Impact of AI",
    subtitle: "Shri. Alphons Kannamthanam, Dr. Deepa Nagarajan, Mr. Ajith Nayar, Adv. Sebastian M J, Mr. Dinu Mathew Panampunna",
    type: "keynote",
  },
  {
    time: "11:00 AM",
    title: "Product Launch — careMP",
    type: "launch",
  },
  {
    time: "11:05 AM",
    title: "Fireside Chat",
    subtitle: "Mr. Kailash Nadh, CTO, Zerodha; Ms. Lakshmi Das, Co-founder, Prophaze",
    type: "keynote",
  },
  {
    time: "12:05 PM",
    title: "Product Launch — Zendt Payments Pvt. Ltd.",
    type: "launch",
  },
  {
    time: "12:08 PM",
    title: "Product Launch — Lenient Tree",
    type: "launch",
  },
  {
    time: "12:10 PM",
    title: "Power Talk",
    subtitle: "Mr. Sujith Bhakthan, Founder, Tech Travel Eat",
    type: "speech",
  },
  {
    time: "12:45 PM",
    title: "Final Remarks",
    subtitle: "Rev. Dr. Jaison Paul Mulerikkal CMI, Principal, RSET",
    type: "speech",
  },
  {
    time: "12:50 PM",
    title: "Lunch Break",
    type: "break",
  },
  {
    time: "01:50 PM",
    title: "Hands-on Workshops",
    subtitle: "Interactive workshop sessions across multiple tracks",
    type: "workshop",
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
        <h1 className="s-hero__title">Programme Schedule — Day 2</h1>
        <p className="s-hero__subtitle">
          Industry-Academia Summit 2026
        </p>
        <div className="s-hero__meta">
          <span className="s-hero__meta-item">
            <Calendar aria-hidden="true" />
            1st September 2026
          </span>
          <span className="s-hero__meta-item">
            <Clock aria-hidden="true" />
            9:30 AM – 4:30 PM
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
      {index < DAY2_SCHEDULE.length - 1 && (
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
/*  Day2Page (main export)                                              */
/* ================================================================== */

export default function Day2Page() {
  return (
    <>
      <ScheduleHero />

      <section className="s-schedule">
        <div className="s-schedule__container">
          {/* Morning Sessions */}
          <div className="s-schedule__section">
            <div className="s-schedule__section-header">
              <h2 className="s-schedule__section-title">
                Program Schedule
              </h2>
              <p className="s-schedule__section-sub">
                9:45 AM – 12:50 PM · Keynotes, panels, product launches &
                fireside chats
              </p>
            </div>

            <div className="tl-timeline">
              {DAY2_SCHEDULE.map((item, idx) => (
                <TimelineItem key={idx} item={item} index={idx} />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="s-schedule__nav">
            <Link to="/day1" className="s-schedule__nav-btn">
              <ArrowLeft aria-hidden="true" />
              Day 1 Schedule
            </Link>
            <Link to="/" className="s-schedule__nav-btn s-schedule__nav-btn--next">
              Back to Home
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
