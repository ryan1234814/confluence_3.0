import { Calendar, Clock } from "lucide-react";
import "./Program.css";

const EVENTS = [
  {
    id: "day1",
    day: "Day 1",
    title: "Confluence 3.0 Inauguration and Silver Jubilee Culmination",
    date: "31st August 2026",
    time: "4.00pm to 6.00pm",
    image: `${import.meta.env.BASE_URL}home_boxes/box1.jpeg`,
  },
  {
    id: "day2",
    day: "Day 2",
    title: "Confluence 3.0 — Industry Academia Summit 2026",
    date: "1st September 2026",
    time: "9.30am to 4.30pm",
    image: `${import.meta.env.BASE_URL}home_boxes/box2.jpeg`,
  },
];

export default function Program() {
  return (
    <section id="program" className="program">
      <div className="program__container">
        <div className="program__header">
          <p className="program__eyebrow">Programme Overview</p>
          <p className="program__intro">
            The largest industry–academia summit hosted by the Rajagiri School
            of Engineering and Technology (Autonomous), celebrating its Silver
            Jubilee. Marking 25 years of academic excellence, this summit
            brings together industry leaders, distinguished academics, and
            budding innovators under one roof — to exchange ideas, forge
            collaborations, and shape the future of engineering, management,
            and the applied sciences.
          </p>
          <h2 className="program__title">Explore the Summit</h2>
        </div>

        <div className="program__events">
          {EVENTS.map(({ id, day, title, date, time, image }) => (
            <div key={id} className="program__event-card" style={{ backgroundImage: `url(${image})` }}>
              <div className="program__event-overlay"></div>
              <div className="program__event-content">
                <div className="program__event-day">{day}</div>
                <h3 className="program__event-title">{title}</h3>
                <div className="program__event-details">
                  <span className="program__event-detail">
                    <Calendar size={18} />
                    {date}
                  </span>
                  <span className="program__event-detail">
                    <Clock size={18} />
                    {time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
