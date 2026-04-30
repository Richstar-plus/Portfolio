export function Experience({ title, openTheme, themColor }) {
  return (
    <div className="about-experience-details-container">
      <h2 className="about-experience-title">{title}</h2>
      <div
        className={`about-experience-details experience-background-theme-color-${openTheme ? "light" : "dark"}`}
      >
        <div
          className={`experience-details experience-border-theme-color-${themColor}`}
        >
          <div
            className={`experience-style experience-style-${themColor}`}
          ></div>
          <div className="experience-content">
            <p className="date"> 2020 - 2021</p>
            <h3 className="experience-title">Web Development Course</h3>
            <p className="experience-description">
              Completed a comprehensive web development course covering HTML,
              CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div
          className={`experience-details experience-border-theme-color-${themColor}`}
        >
          <div
            className={`experience-style experience-style-${themColor}`}
          ></div>
          <div className="experience-content">
            <p className="date"> 2020 - 2021</p>
            <h3 className="experience-title">Web Development Course</h3>
            <p className="experience-description">
              Completed a comprehensive web development course covering HTML,
              CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
