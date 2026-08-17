import {
  CalendarDays,
  Handshake,
  Mic,
  Newspaper,
  Presentation,
  Users,
} from "lucide-react";
import "./Program.css";

const PILLARS = [
  {
    id: "confluence-days",
    icon: CalendarDays,
    title: "Confluence Days",
    description:
      "Keynote addresses, expert panels, and paper presentations spanning engineering, management, social sciences, and applied sciences.",
  },
  {
    id: "workshops",
    icon: Presentation,
    title: "Workshops",
    description:
      "Hands-on, skill-focused sessions led by industry practitioners and leading academics from RSET.",
  },
  {
    id: "advisory-board",
    icon: Users,
    title: "Advisory Board",
    description:
      "A distinguished council of academic and industry leaders guiding the direction and quality of the summit programme.",
  },
  {
    id: "speakers",
    icon: Mic,
    title: "Speakers",
    description:
      "Visionary voices from industry and academia sharing perspectives on the future of work, learning, and innovation.",
  },
  {
    id: "sponsors",
    icon: Handshake,
    title: "Sponsors",
    description:
      "Partner with the largest industry–academia summit and connect with tomorrow's talent and today's decision-makers.",
  },
  {
    id: "media",
    icon: Newspaper,
    title: "Media",
    description:
      "Press coverage, interviews, and stories capturing the conversations shaping the Silver Jubilee edition.",
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
          <p className="program__subtitle">
            Six pillars anchor Confluence 3.0 — a Silver Jubilee edition built
            on dialogue, discovery, and collaboration.
          </p>
        </div>

        {/* Crisp 1px-divided card grid */}
        <div className="program__grid">
          {PILLARS.map(({ id, icon: Icon, title, description }) => (
            <div key={id} id={id} className="program__card">
              <div className="program__card-icon">
                <Icon strokeWidth={1.75} />
              </div>
              <h3 className="program__card-title">{title}</h3>
              <p className="program__card-text">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
