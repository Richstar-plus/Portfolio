import "./styles/About.css";
import { useTheme } from "../hooks/useTheme";

export function AboutPage() {
  const { themColor, openTheme,isNavOpen } = useTheme();

  return (
    <div className={`about content-holder ${isNavOpen ? "about-content-holder-closed" : ""}`}>
      <div className="about-title">
        <h1 className="page-title">
          About <span className={`theme-color-${themColor}`}>Me</span>
        </h1>
        <div className={`about-style1 border-theme-color-${themColor}`}></div>
        <div className={`about-style2 border-theme-color-${themColor}`}></div>
      </div>
      <div className="about-subtitle">
        <h2 className="about-subtitle-title">
          I'm a{" "}
          <span className={`theme-color-${themColor}`}>Web Developer</span>
        </h2>
      </div>
      <p className="about-content">
        I'm a passionate web developer with a knack for creating dynamic and
        responsive websites. With a strong foundation in HTML, CSS, and
        JavaScript, I specialize in building user-friendly interfaces and
        seamless user experiences. Whether it's crafting a sleek portfolio or
        developing a robust e-commerce platform, I thrive on turning ideas into
        reality through code.
      </p>
      <div className="about-main-content-container">
        <div className="about-info">
          <div className={`about-info-holder ${isNavOpen ? "about-info-holder-closed" : ""}`}>
            <div className="about-info-content">

              <div className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}>
                <h4>Date of Birth:</h4>
                <span>September 21st, 1998</span>
              </div>
              <div className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}>
                <h4>Website:</h4>
                <span>www.example.com</span>
              </div>
              <div className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}>
                <h4>Degree:</h4>
                <span> Bachelor of Science (B.Sc) in Computer Science</span>
              </div>
              <div className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}>
                <h4>City:</h4>
                <span>Port Harcourt</span>
              </div>
            </div>
            <div className="about-info-content">
              <div className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}>
                <h4>Age:</h4>
                <span>27</span>
              </div>
              <div className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}>
                <h4>Phone:</h4>
                <span>+234 903 901 4066</span>
              </div>
              <div className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}>
                <h4>Email:</h4>
                <span>richardsunday0812@gmail.com</span>
              </div>
              <div className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}>
                <h4>Freelance:</h4>
                <span>Available for freelance work</span>
              </div>
            </div>
          </div>

          <div className="about-info-button">
            <button className={`about-button button-theme-color-${themColor} ${isNavOpen ? "about-button-closed" : ""}`}>
              Download CV
            </button>
          </div>
        </div>
        <div className="about-interests"></div>
      </div>
    </div>
  );
}
