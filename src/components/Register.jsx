import { ArrowRight, Ticket } from "lucide-react";

export default function Register() {
  return (
    <section id="register" className="scroll-mt-20 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson">
          Registration Open
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Secure your seat at the Summit
        </h2>
        <p className="mt-4 text-slate-600">
          Passes for Confluence 3.0 are now open to students, faculty,
          researchers, and industry professionals. Reserve your place before
          September 1, 2026.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:confluence@rajagiri.edu"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-dark"
          >
            <Ticket className="h-4 w-4" />
            Get Summit Pass
          </a>
          <a
            href="#confluence-days"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:border-navy hover:bg-slate-50"
          >
            View the Programme
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
