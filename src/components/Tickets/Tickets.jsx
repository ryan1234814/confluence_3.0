import "./Tickets.css";

const TICKETS = [
  {
    id: "business",
    image: `${import.meta.env.BASE_URL}Tickets/4.png`,
    alt: "Business Leader's Badge — ₹400 / ₹300 Early Bird",
  },
  {
    id: "academic",
    image: `${import.meta.env.BASE_URL}Tickets/5.png`,
    alt: "Academic Leader's Badge — ₹300 / ₹200 Early Bird",
  },
  {
    id: "young",
    image: `${import.meta.env.BASE_URL}Tickets/6.png`,
    alt: "Young Leader's Badge — ₹200 / ₹100 Early Bird",
  },
];

export default function Tickets() {
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
          {TICKETS.map(({ id, image, alt }) => (
            <div key={id} className="tickets__card">
              <img src={image} alt={alt} className="tickets__image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
