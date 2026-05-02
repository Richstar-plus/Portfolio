import { useForm, ValidationError } from "@formspree/react";

export function ContactForm({ openTheme, themColor }) {
  const [state, handleSubmit] = useForm("xzdozlrk");

  return (
    <div
      className={`contact-form-container ${
        openTheme
          ? `contact-form-container-dark`
          : "contact-form-container-light"
      }`}
    >
      <h2 className={`contact-form-title contact-form-title-${themColor}`}>
        SEND ME A MESSAGE
      </h2>
      <p>I am very responsive to messages.</p>
      <div className="form">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="input">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-subject">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="input-text">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
              ></textarea>
            </div>
          </div>

          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className={`contact-form-button contact-form-button-${themColor}`}
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {state.succeeded && (
          <p className="contact-form-success">
            Thanks for your message! I will get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
}
