import { useState, useCallback } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import "./Tickets.css";

const TICKETS = [
  {
    id: "business",
    image: `${import.meta.env.BASE_URL}Tickets/4.png`,
    alt: "Business Leader's Badge — ₹400 / ₹300 Early Bird",
    title: "Business Leader's Badge",
    forText: "Exclusively for Industry Delegates",
    color: "#92692b",
    features: [
      { text: "Priority access to main venue", included: true },
      { text: "Access to 1 Workshop (subject to availability)", included: true },
      { text: "Welcome Kit", included: true },
      { text: "Lunch Included", included: true },
    ],
  },
  {
    id: "academic",
    image: `${import.meta.env.BASE_URL}Tickets/5.png`,
    alt: "Academic Leader's Badge — ₹300 / ₹200 Early Bird",
    title: "Academic Leader's Badge",
    forText: "Exclusively for Faculty Delegates",
    color: "#0e3c6e",
    features: [
      { text: "Priority access to main venue", included: true },
      { text: "Access to 1 Workshop (subject to availability)", included: true },
      { text: "Welcome Kit", included: true },
      { text: "Lunch Included", included: true },
    ],
  },
  {
    id: "young",
    image: `${import.meta.env.BASE_URL}Tickets/6.png`,
    alt: "Young Leader's Badge — ₹200 / ₹100 Early Bird",
    title: "Young Leader's Badge",
    forText: "Exclusively for Student Delegates",
    color: "#8a7e6e",
    features: [
      { text: "Priority access to main venue", included: true },
      { text: "Access to 1 Workshop (subject to availability)", included: true },
      { text: "Welcome Kit", included: true },
      { text: "Lunch not Included", included: false },
    ],
  },
];

export default function Tickets() {
  const [flippedId, setFlippedId] = useState(null);

  const handleTouch = useCallback((id) => {
    setFlippedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="tickets" className="tickets">
      <div className="tickets__container">
        <div className="tickets__header">
          <p className="tickets__eyebrow">Registration Passes</p>
          <h1 className="tickets__title">Confluence 3.0 Tickets</h1>
          <p className="tickets__subtitle">
            Choose the badge that suits your role and secure your seat at the
            largest industry–academia summit.
          </p>
        </div>

        <div className="tickets__grid">
          {TICKETS.map(({ id, image, alt, title, forText, color, features }) => (
            <div key={id} className="tickets__flip-wrapper" onClick={() => handleTouch(id)}>
              <div className={`tickets__flip-card${flippedId === id ? " is-flipped" : ""}`}>
                {/* Front — badge image */}
                <div className="tickets__flip-front">
                  <img src={image} alt={alt} className="tickets__image" />
                </div>

                {/* Back — details */}
                <div
                  className="tickets__flip-back"
                  style={{ background: color }}
                >
                  <p className="tickets__back-label">CONFLUENCE 3.0</p>
                  <h3 className="tickets__back-title">{title}</h3>
                  <p className="tickets__back-for">{forText}</p>

                  <ul className="tickets__features">
                    {features.map(({ text, included }) => (
                      <li key={text} className="tickets__feature">
                        {included ? (
                          <CheckCircle className="tickets__feature-icon tickets__feature-icon--included" />
                        ) : (
                          <XCircle className="tickets__feature-icon tickets__feature-icon--excluded" />
                        )}
                        <span className={!included ? "tickets__feature-text--excluded" : ""}>
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button type="button" className="tickets__buy-btn">
                    Buy Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
