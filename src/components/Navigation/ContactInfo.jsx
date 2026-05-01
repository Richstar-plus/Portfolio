import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
export function ContactInfo({ openTheme, themColor }) {
  return (
    <div className="contact-info">
      <div
        className={`contact-info-card ${openTheme ? `contact-info-card-dark` : "contact-info-card-light"}`}
      >
        <FontAwesomeIcon
          icon={faPhone}
          className={`contact-icon contact-icon-${themColor}`}
        />
        <h3>Phone</h3>
        <p>+123 903 9014 066</p>
      </div>

      <div
        className={`contact-info-card ${openTheme ? `contact-info-card-dark` : "contact-info-card-light"}`}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className={`contact-icon contact-icon-${themColor}`}
        />
        <h3>Email</h3>
        <p>richardsunday0812@gmail.com</p>
      </div>

      <div
        className={`contact-info-card ${openTheme ? `contact-info-card-dark` : "contact-info-card-light"}`}
      >
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className={`contact-icon contact-icon-${themColor}`}
        />
        <h3>Location</h3>
        <p>123 Main Street, City, Country</p>
      </div>
    </div>
  );
}
