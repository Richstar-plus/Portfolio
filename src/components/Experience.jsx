import { useExperience } from "../hooks/useExperience";

export function Experience({ title, openTheme, themColor }) {
  const { getExperiencesByCategory } = useExperience();
  const category = title.toLowerCase();
  const experiences = getExperiencesByCategory(category);

  return (
    <div className="about-experience-details-container">
      <h2 className="about-experience-title">{title}</h2>
      <div
        className={`about-experience-details experience-background-theme-color-${openTheme ? "light" : "dark"}`}
      >
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={`experience-details experience-border-theme-color-${themColor}`}
          >
            <div
              className={`experience-style experience-style-${themColor}`}
            ></div>
            <div className="experience-content">
              <p className="date">{experience.date}</p>
              <p className="experience-category">{experience.category}</p>
              <h3 className="experience-title">{experience.title}</h3>
              <p className="experience-description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
