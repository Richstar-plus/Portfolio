import "./styles/Projects.css";
import { useTheme } from "../hooks/useTheme";

export function ProjectsPage() {
  const { themColor } = useTheme();

  return (
    <div className="projects">
      <h1 className="page-title">
        My <span className={`theme-color-${themColor}`}>Projects</span>
      </h1>
      <p className="projects-content">
        Here are some of my notable projects and work samples.
      </p>
      {/* Add your projects here */}
    </div>
  );
}
