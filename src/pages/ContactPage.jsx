import "./styles/Contact.css";
import { useTheme } from "../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export function ContactPage() {
  const { themColor, openTheme, isNavOpen } = useTheme();

  return (
    <div className={`contact ${isNavOpen ? "contact-content-holder-closed" : ""}`}>
      <h1 className="page-title">
        Get in <span className={`theme-color-${themColor}`}>Touch</span>
      </h1>
      <p className="contact-content">
        Feel free to reach out to me for any inquiries or collaborations.
      </p>

      <div className="contact-main-container">
        <div className="contact-info">

          <div className={`contact-info-card ${openTheme ? `contact-info-card-dark` : "contact-info-card-light"}`}>
            <FontAwesomeIcon
              icon={faPhone}
              className={`contact-icon contact-icon-${themColor}`}
            />
            <h3>Phone</h3>
            <p>+123 903 9014 066</p>
          </div>

          <div className={`contact-info-card ${openTheme ? `contact-info-card-dark` : "contact-info-card-light"}`}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`contact-icon contact-icon-${themColor}`}
            />
            <h3>Email</h3>
            <p>richardsunday0812@gmail.com</p>
          </div>

          <div className={`contact-info-card ${openTheme ? `contact-info-card-dark` : "contact-info-card-light"}`}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className={`contact-icon contact-icon-${themColor}`}
            />
            <h3>Location</h3>
            <p>123 Main Street, City, Country</p>
          </div>

        </div>
        <div className="contact-form-container">
          <h2 className={`contact-form-title contact-form-title-${themColor}`}>
            SEND ME A MESSAGE
          </h2>
          <p>I am very responsive to messages.</p>
        </div>
      </div>
    </div>
  );
}
