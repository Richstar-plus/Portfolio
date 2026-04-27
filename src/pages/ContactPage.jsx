import "./styles/Contact.css";
import { useTheme } from "../hooks/useTheme";

export function ContactPage() {
  const { themColor } = useTheme();

  return (
    <div className="contact">
      <h1 className="page-title">
        Get in <span className={`theme-color-${themColor}`}>Touch</span>
      </h1>
      <p className="contact-content">
        Feel free to reach out to me for any inquiries or collaborations.
      </p>
      {/* Add your contact form here */}
    </div>
  );
}
