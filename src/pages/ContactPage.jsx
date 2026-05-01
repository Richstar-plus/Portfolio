import "./styles/Contact.css";
import { useTheme } from "../hooks/useTheme";
import { ContactInfo } from "../components/Navigation/ContactInfo";
import { ContactForm } from "../components/Navigation/ContactForm";


export function ContactPage() {
  const { themColor, openTheme, isNavOpen } = useTheme();

  return (
    <div
      className={`contact ${isNavOpen ? "contact-content-holder-closed" : ""}`}
    >
      <div className="about-title">
        <h1 className="page-title">
          Get in <span className={`theme-color-${themColor}`}>Touch</span>
        </h1>
        <div className={`about-style1 border-theme-color-${themColor}`}></div>
        <div className={`about-style2 border-theme-color-${themColor}`}></div>
      </div>
      <p className="contact-content">
        Feel free to reach out to me for any inquiries or collaborations.
      </p>

      <div className="contact-main-container">
        <ContactInfo openTheme={openTheme} themColor={themColor} />
        <ContactForm openTheme={openTheme} themColor={themColor} />
      </div>
    </div>
  );
}
