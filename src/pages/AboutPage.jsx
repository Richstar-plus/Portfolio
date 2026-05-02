import "./styles/About.css";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { AboutInfo } from "../components/Navigation/AboutInfo";
import ProgressBar from "../components/Navigation/ProgressBar";
import { Experience } from "../components/Experience";
import { CVModal } from "../components/CVModal";

export function AboutPage() {
  const { themColor, openTheme, isNavOpen } = useTheme();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleDownloadCV = () => {
    setIsCVModalOpen(true);
  };

  const handleCloseCVModal = () => {
    setIsCVModalOpen(false);
  };

  return (
    <div
      className={`about content-holder ${isNavOpen ? "about-content-holder-closed" : ""}`}
    >
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
          <AboutInfo openTheme={openTheme} isNavOpen={isNavOpen} />

          <div className="about-info-button">
            <button
              className={`about-button button-theme-color-${themColor} ${isNavOpen ? "about-button-closed" : ""}`}
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="about-interests">
          <ProgressBar title="HTML" level={90} themColor={themColor} />
          <ProgressBar title="CSS" level={85} themColor={themColor} />
          <ProgressBar title="JavaScript" level={70} themColor={themColor} />
          <ProgressBar title="React" level={80} themColor={themColor} />
          <ProgressBar title="Node.js" level={30} themColor={themColor} />
        </div>
        <Experience
          title="Education"
          openTheme={openTheme}
          themColor={themColor}
        />
        <Experience
          title="Experience"
          openTheme={openTheme}
          themColor={themColor}
        />
      </div>

      <CVModal isOpen={isCVModalOpen} onClose={handleCloseCVModal} />
    </div>
  );
}
