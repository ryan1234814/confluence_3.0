import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import "./Countdown.css";

/**
 * August 31, 2026, 3:00:00 PM IST (GMT+0530),
 * expressed as milliseconds since the Unix epoch.
 */
const TARGET_TIMESTAMP_MS = 1788168600000;

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
    <section id="countdown" className="countdown">
      {/* Silver Jubilee accent line */}
      <div className="countdown__accent" aria-hidden="true" />
      <div className="countdown__container">
        <h2 className="countdown__title">Confluence Countdown Begins</h2>
        <p className="countdown__subtitle">
          Confluence 3.0 opens on August 31, 2026 at 3:00 PM IST at Rajagiri
          Valley, Kakkanad.
        </p>

        {hasStarted ? (
          <p className="countdown__started">
            The summit has begun — welcome to Confluence 3.0!
          </p>
        ) : (
          <div className="countdown__units">
            {UNITS.map(({ key, label }, index) => (
              <div key={key} className="countdown__unit">
                {index > 0 && (
                  <span aria-hidden="true" className="countdown__colon">
                    :
                  </span>
                )}
                <div className="countdown__card">
                  <p className="countdown__number">
                    {String(timeLeft[key]).padStart(2, "0")}
                  </p>
                  <p className="countdown__label">{label}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="countdown__meta">
          <span className="countdown__meta-item">
            <CalendarDays className="countdown__meta-icon" />
            August 31, 2026
          </span>
          <span className="countdown__meta-item">
            <Clock className="countdown__meta-icon" />
            3:00 PM IST
          </span>
        </div>
      </div>
    </section>
  );
}
