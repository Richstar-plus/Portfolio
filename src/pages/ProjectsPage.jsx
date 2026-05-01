import "./styles/Projects.css";
import { useTheme } from "../hooks/useTheme";
import { NavLink } from "react-router-dom";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";

export function ProjectsPage() {
  const { themColor, openTheme, isNavOpen } = useTheme();

  return (
    <div className={isNavOpen ? "projects nav-open" : "projects"}>
      <div className="about-title">
        <h1 className="page-title">
          My <span className={`theme-color-${themColor}`}>Projects</span>
        </h1>
        <div className={`about-style1 border-theme-color-${themColor}`}></div>
        <div className={`about-style2 border-theme-color-${themColor}`}></div>
      </div>
      <p className="projects-content">
        Here are some of my notable projects and work samples.
      </p>
      <div className="project-content-holder">
        <div className={`project-card ${openTheme ? "project-card-open" : ""}`}>
          <h2 className="project-title">Project 1: Portfolio Website</h2>
          <img src={project1} alt="Project 1" />
        </div>

        <div className={`project-card ${openTheme ? "project-card-open" : ""}`}>
          <h2 className="project-title">Project 2: E-commerce Website</h2>
          <img src={project2} alt="Project 2" />
        </div>

        <div className={`project-card ${openTheme ? "project-card-open" : ""}`}>
          <h2 className="project-title">Project 2: E-commerce Website</h2>
          <img src={project2} alt="Project 2" />
        </div>

        <div className={`project-card ${openTheme ? "project-card-open" : ""}`}>
          <h2 className="project-title">Project 2: E-commerce Website</h2>
          <img src={project2} alt="Project 2" />
        </div>

        <div className={`project-card ${openTheme ? "project-card-open" : ""}`}>
          <h2 className="project-title">Project 2: E-commerce Website</h2>
          <img src={project2} alt="Project 2" />
        </div>
      </div>
    </div>
  );
}
