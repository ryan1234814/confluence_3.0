import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import "./Contact.css";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: "confluence@rajagiritech.edu.in",
    href: "mailto:confluence@rajagiritech.edu.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 484 2660999",
    href: "tel:+914842660999",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Rajagiri School of Engineering & Technology, Rajagiri Valley, Kakkanad, Kochi 682 039, Kerala, India.",
  },
];

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Registration",
  "Sponsorship",
  "Speakers & Programme",
  "Media & Press",
  "Other",
];

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const inputClasses = "contact-form__input";

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for the field being edited
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) {
      next.name = "Please enter your full name.";
    }
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject) {
      next.subject = "Please choose a subject.";
    }
    if (!form.message.trim()) {
      next.message = "Please enter your message.";
    } else if (form.message.trim().length < 10) {
      next.message = "Your message should be at least 10 characters.";
    }
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitted(true);
    setForm(EMPTY_FORM);
  }

  return (
    <>
      {/* Header banner */}
      <section id="contact" className="contact-hero">
        {/* Subtle structured grid + soft gold wash over navy */}
        <div aria-hidden="true" className="contact-hero__grid" />
        <div aria-hidden="true" className="contact-hero__glow" />

        <div className="contact-hero__content">
          <p className="contact-hero__eyebrow">Get in Touch</p>
          <h1 className="contact-hero__title">
            Contact <span className="contact-hero__title-accent">Us</span>
          </h1>
          <p className="contact-hero__text">
            Get in Touch with Us — Whether you have questions about the
            conference, sponsorships, or registration, our team is ready to
            help.
          </p>
        </div>
      </section>

      {/* Direct contact cards */}
      <section className="contact-cards">
        <div className="contact-cards__container">
          <div className="contact-cards__grid">
            {CONTACT_CARDS.map((card) => (
              <div key={card.label} className="contact-cards__card">
                <span className="contact-cards__icon">
                  <card.icon aria-hidden="true" />
                </span>
                <h2 className="contact-cards__label">{card.label}</h2>
                {card.href ? (
                  <a
                    href={card.href}
                    className="contact-cards__value"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="contact-cards__value--text">
                    {card.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="contact-form">
        <div className="contact-form__container">
          <div className="contact-form__header">
            <p className="contact-form__eyebrow">Send an Inquiry</p>
            <h2 className="contact-form__title">How can we help?</h2>
            <p className="contact-form__text">
              Fill in the form below and our team will get back to you as soon
              as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="contact-form__card"
          >
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="contact-form__success"
              >
                <CheckCircle2
                  className="contact-form__success-icon"
                  aria-hidden="true"
                />
                <p className="contact-form__success-text">
                  <strong>Thank you!</strong> Your message has been sent. Our
                  team will get back to you shortly.
                </p>
              </div>
            )}

            <div className="contact-form__row">
              <div>
                <label
                  htmlFor="contact-name"
                  className="contact-form__label"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`${inputClasses} ${errors.name ? "contact-form__input--error" : ""}`}
                />
                {errors.name && (
                  <p id="contact-name-error" className="contact-form__error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="contact-form__label"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={`${inputClasses} ${errors.email ? "contact-form__input--error" : ""}`}
                />
                {errors.email && (
                  <p id="contact-email-error" className="contact-form__error">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="contact-form__field">
              <label
                htmlFor="contact-subject"
                className="contact-form__label"
              >
                Subject
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                className={`${inputClasses} ${errors.subject ? "contact-form__input--error" : ""} ${form.subject ? "" : "contact-form__input--placeholder"}`}
              >
                <option value="" disabled>
                  Choose a subject…
                </option>
                {SUBJECT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p id="contact-subject-error" className="contact-form__error">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="contact-form__field">
              <label
                htmlFor="contact-message"
                className="contact-form__label"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help…"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${inputClasses} contact-form__input--textarea ${errors.message ? "contact-form__input--error" : ""}`}
              />
              {errors.message && (
                <p id="contact-message-error" className="contact-form__error">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="contact-form__submit"
            >
              Send Message
              <Send className="contact-form__submit-icon" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      {/* Our Location */}
      <section className="contact-location">
        <div className="contact-location__container">
          <div className="contact-location__header">
            <p className="contact-location__eyebrow">Find Us</p>
            <h2 className="contact-location__title">Our Location</h2>
            <p className="contact-location__text">
              Rajagiri School of Engineering &amp; Technology (RSET), Kakkanad,
              Kochi.
            </p>
          </div>

          <div className="contact-location__map">
            <iframe
              title="Rajagiri School of Engineering and Technology (RSET), Kakkanad on Google Maps"
              src="https://www.google.com/maps?q=Rajagiri%20School%20of%20Engineering%20and%20Technology%2C%20Kakkanad%2C%20Kochi&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
