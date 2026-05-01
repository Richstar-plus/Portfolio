import "./styles/Contact.css";
import { useTheme } from "../hooks/useTheme";
import { ContactInfo } from "../components/Navigation/ContactInfo";


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
        <div
          className={`contact-form-container ${openTheme ? `contact-form-container-dark` : "contact-form-container-light"}`}
        >
          <h2 className={`contact-form-title contact-form-title-${themColor}`}>
            SEND ME A MESSAGE
          </h2>
          <p>I am very responsive to messages.</p>
          <div className="form">
            <form className="contact-form">
              <div className="input-container">
                <div className="input">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="input-subject">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="input-text">
                  <textarea
                    placeholder="Your Message"
                    required
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <button
                className={`contact-form-button contact-form-button-${themColor}`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
