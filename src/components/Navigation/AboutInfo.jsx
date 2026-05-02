export function AboutInfo({ openTheme, isNavOpen }) {
  return (
    <div
      className={`about-info-holder ${isNavOpen ? "about-info-holder-closed" : ""}`}
    >
      <div className="about-info-content">
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Date of Birth:</h4>
          <span>September 21st, 1997</span>
        </div>
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Website:</h4>
          <span>https://richstar-plus.github.io/Portfolio/</span>
        </div>
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Degree:</h4>
          <span> Bachelor of Science (B.Sc) in Computer Science</span>
        </div>
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>City:</h4>
          <span>Port Harcourt</span>
        </div>
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Marital Status:</h4>
          <span>Single</span>
        </div>
                <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>LGA:</h4>
          <span>Oruk Anam</span>
        </div>
      </div>

      <div className="about-info-content">
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Age:</h4>
          <span>28</span>
        </div>
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Phone:</h4>
          <span>+234 903 901 4066</span>
        </div>
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Email:</h4>
          <span>richardsunday0812@gmail.com</span>
        </div>
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Freelance:</h4>
          <span>Available for freelance work</span>
        </div>
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Sex:</h4>
          <span>Male</span>
        </div>
                <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>State:</h4>
          <span>Akwa Ibom</span>
        </div>
      </div>
    </div>
  );
}
