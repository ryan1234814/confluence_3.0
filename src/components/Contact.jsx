import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

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

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20";

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
      <section
        id="contact"
        className="relative scroll-mt-20 overflow-hidden border-b border-slate-200 bg-navy"
      >
        {/* Subtle structured grid + soft gold wash over navy */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.18),transparent_65%)]"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact <span className="text-crimson">Us</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Get in Touch with Us — Whether you have questions about the
            conference, sponsorships, or registration, our team is ready to
            help.
          </p>
        </div>
      </section>

      {/* Direct contact cards */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_CARDS.map((card) => (
              <div
                key={card.label}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  {card.label}
                </h2>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 text-sm font-medium text-navy transition-colors hover:text-crimson sm:text-base"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {card.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson">
              Send an Inquiry
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How can we help?
            </h2>
            <p className="mt-4 text-slate-600">
              Fill in the form below and our team will get back to you as soon
              as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-emerald-800">
                  <strong className="font-semibold">Thank you!</strong> Your
                  message has been sent. Our team will get back to you shortly.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-semibold text-navy"
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
                  className={`${inputClasses} ${errors.name ? "border-crimson" : ""}`}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-1.5 text-xs font-medium text-crimson">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-semibold text-navy"
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
                  className={`${inputClasses} ${errors.email ? "border-crimson" : ""}`}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1.5 text-xs font-medium text-crimson">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="contact-subject"
                className="mb-1.5 block text-sm font-semibold text-navy"
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
                className={`${inputClasses} ${errors.subject ? "border-crimson" : ""} ${form.subject ? "" : "text-slate-400"}`}
              >
                <option value="" disabled>
                  Choose a subject…
                </option>
                {SUBJECT_OPTIONS.map((option) => (
                  <option key={option} value={option} className="text-slate-900">
                    {option}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p id="contact-subject-error" className="mt-1.5 text-xs font-medium text-crimson">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-semibold text-navy"
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
                className={`${inputClasses} resize-y ${errors.message ? "border-crimson" : ""}`}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1.5 text-xs font-medium text-crimson">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-dark sm:w-auto"
            >
              Send Message
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      {/* Our Location */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-crimson">
              Find Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our Location
            </h2>
            <p className="mt-4 text-slate-600">
              Rajagiri School of Engineering &amp; Technology (RSET), Kakkanad,
              Kochi.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="Rajagiri School of Engineering and Technology (RSET), Kakkanad on Google Maps"
              src="https://www.google.com/maps?q=Rajagiri%20School%20of%20Engineering%20and%20Technology%2C%20Kakkanad%2C%20Kochi&output=embed"
              className="h-[420px] w-full"
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
