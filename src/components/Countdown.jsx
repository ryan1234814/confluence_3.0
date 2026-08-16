import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";

/**
 * September 1, 2026, 10:00:00 AM IST (GMT+0530),
 * expressed as milliseconds since the Unix epoch.
 */
const TARGET_TIMESTAMP_MS = 1788237600000;

function getTimeLeft(nowMs) {
  const remainingMs = Math.max(TARGET_TIMESTAMP_MS - nowMs, 0);
  const totalSeconds = Math.floor(remainingMs / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(Date.now()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(Date.now()));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hasStarted =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section id="countdown" className="scroll-mt-20 bg-navy">
      {/* Silver Jubilee accent line */}
      <div
        className="h-1 bg-gradient-to-r from-gold via-silver to-gold"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Summit Countdown Begins
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Confluence 3.0 opens on September 1, 2026 at 10:00 AM IST at Rajagiri
          Valley, Kakkanad.
        </p>

        {hasStarted ? (
          <p className="mt-12 font-display text-2xl font-bold text-white">
            The summit has begun — welcome to Confluence 3.0!
          </p>
        ) : (
          <div className="mt-12 flex flex-wrap items-stretch justify-center gap-y-4">
            {UNITS.map(({ key, label }, index) => (
              <div key={key} className="flex items-center gap-1.5 sm:gap-4">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl font-bold text-white/40 sm:text-3xl"
                  >
                    :
                  </span>
                )}
                <div className="w-16 rounded-xl bg-white px-1.5 py-3.5 shadow-sm sm:w-24 sm:px-2 sm:py-5">
                  <p className="font-display text-2xl font-bold tabular-nums text-navy sm:text-4xl">
                    {String(timeLeft[key]).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-[11px]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-gold" />
            September 1, 2026
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold" />
            10:00 AM IST
          </span>
        </div>
      </div>
    </section>
  );
}
