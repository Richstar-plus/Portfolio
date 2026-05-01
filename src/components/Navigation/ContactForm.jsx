export function ContactForm({ openTheme, themColor }) {
  return (
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
  )
}