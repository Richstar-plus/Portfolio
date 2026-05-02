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
          <span>September 21st, 1998</span>
        </div>
        <div
          className={`about-info-details ${openTheme ? "about-info-details-dark" : ""}`}
        >
          <h4>Website:</h4>
          <span>www.example.com</span>
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
      </div>
    </div>
  );
}
