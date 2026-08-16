import { ArrowRight, Ticket } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden border-b border-slate-200 bg-slate-50"
    >
      {/* Subtle structured grid + soft gold wash (kept light and restrained) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,37,64,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,37,64,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.08),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl lg:text-7xl">
            CONFLUENCE <span className="text-crimson">3.0</span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-800 sm:text-2xl">
            Largest Industry–Academia Summit
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Hosted by the{" "}
            <strong className="font-semibold text-navy">
              Rajagiri School of Engineering and Technology (RSET)
            </strong>
            , Confluence 3.0 brings together industry leaders, academics, and
            innovators for a landmark Silver Jubilee edition of dialogue,
            discovery, and collaboration.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-dark"
            >
              Explore Events
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:border-navy hover:bg-slate-50"
            >
              <Ticket className="h-4 w-4" />
              Get Summit Pass
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
