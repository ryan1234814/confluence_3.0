import { ArrowRight, Ticket } from "lucide-react";
import "./Register.css";

export default function Register() {
  return (
    <section id="register" className="register">
      <div className="register__container">
        <p className="register__eyebrow">Registration Open</p>
        <h2 className="register__title">Secure your seat at the Summit</h2>
        <p className="register__text">
          Passes for Confluence 3.0 are now open to students, faculty,
          researchers, and industry professionals. Reserve your place before
          August 31, 2026.
        </p>
        <div className="register__actions">
          <a
            href="mailto:confluence@rajagiri.edu"
            className="register__btn register__btn--primary"
          >
            <Ticket className="register__btn-icon" />
            Get Summit Pass
          </a>
          <a
            href="#program"
            className="register__btn register__btn--secondary"
          >
            View the Programme
            <ArrowRight className="register__btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
