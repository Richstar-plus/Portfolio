import "./styles/About.css";
import { useTheme } from "../hooks/useTheme";

export function AboutPage() {
  const { themColor } = useTheme();

  return (
    <div className="about">
      <h1 className="page-title">
        About <span className={`theme-color-${themColor}`}>Me</span>
      </h1>
      <p className="about-content">
        Welcome to my portfolio! I'm a passionate web developer with expertise
        in modern web technologies.
      </p>
      {/* Add your about content here */}
    </div>
  );
}
