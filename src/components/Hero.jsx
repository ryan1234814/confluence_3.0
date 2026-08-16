import { ArrowRight, Ticket } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      {/* Full-bleed homepage background image */}
      <img
        src={`${import.meta.env.BASE_URL}images/new_home.png`}
        alt="Confluence 3.0 — The Largest Industry–Academia Summit"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Soft scrim at the bottom so the CTAs stay readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-end px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#program"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-slate-100"
          >
            Explore Events
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:border-white/50 hover:bg-white/10"
          >
            <Ticket className="h-4 w-4" />
            Get Summit Pass
          </a>
        </div>
      </div>
    </section>
  );
}
