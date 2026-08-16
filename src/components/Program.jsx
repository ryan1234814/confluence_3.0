import {
  CalendarDays,
  Handshake,
  Mic,
  Newspaper,
  Presentation,
  Users,
} from "lucide-react";

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
    <section id="program" className="scroll-mt-20 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-bold uppercase tracking-[0.2em] text-gold sm:text-lg">
            Programme Overview
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-left leading-relaxed text-slate-600">
            The largest industry–academia summit hosted by the Rajagiri School
            of Engineering and Technology (Autonomous), celebrating its Silver
            Jubilee. Marking 25 years of academic excellence, this summit
            brings together industry leaders, distinguished academics, and
            budding innovators under one roof — to exchange ideas, forge
            collaborations, and shape the future of engineering, management,
            and the applied sciences.
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Explore the Summit
          </h2>
          <p className="mt-4 text-slate-600">
            Six pillars anchor Confluence 3.0 — a Silver Jubilee edition built
            on dialogue, discovery, and collaboration.
          </p>
        </div>

        {/* Crisp 1px-divided card grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              id={id}
              className="scroll-mt-24 bg-white p-6 transition-colors hover:bg-slate-50 sm:p-8"
            >
              <div className="inline-flex rounded-lg bg-slate-100 p-2.5 text-navy">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
