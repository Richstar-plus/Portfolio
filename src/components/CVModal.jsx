import { useTheme } from "../hooks/useTheme";
import { AboutInfo } from "./Navigation/AboutInfo";
import ProgressBar from "./Navigation/ProgressBar";
import { Experience } from "./Experience";

export function CVModal({ isOpen, onClose }) {
  const { themColor, openTheme } = useTheme();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <h1 className="cv-modal-title">
            Curriculum Vitae -{" "}
            <span className={`theme-color-${themColor}`}>Web Developer</span>
          </h1>
          <div className="cv-modal-actions">
            <button
              className={`cv-print-button button-theme-color-${themColor}`}
              onClick={handlePrint}
            >
              🖨️ Print CV
            </button>
            <button className="cv-close-button" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        <div className="cv-modal-body">
          <div className="cv-section">
            <h2 className="cv-section-title">
              About <span className={`theme-color-${themColor}`}>Me</span>
            </h2>

            <h3 className="cv-subtitle">
              I'm a{" "}
              <span className={`theme-color-${themColor}`}>Web Developer</span>
            </h3>

            <p className="cv-description">
              I'm a passionate web developer with a knack for creating dynamic
              and responsive websites. With a strong foundation in HTML, CSS,
              and JavaScript, I specialize in building user-friendly interfaces
              and seamless user experiences. Whether it's crafting a sleek
              portfolio or developing a robust e-commerce platform, I thrive on
              turning ideas into reality through code.
            </p>
          </div>

          <div className="cv-main-content">
            <div className="cv-info-section">
              <AboutInfo  isNavOpen={false} />
            </div>

            <div className="cv-skills-section">
              <h3 className="cv-skills-title">Technical Skills</h3>
              <div className="cv-skills-list">
                <ProgressBar title="HTML" level={90} themColor={themColor} />
                <ProgressBar title="CSS" level={85} themColor={themColor} />
                <ProgressBar
                  title="JavaScript"
                  level={70}
                  themColor={themColor}
                />
                <ProgressBar title="React" level={80} themColor={themColor} />
                <ProgressBar title="Node.js" level={30} themColor={themColor} />
              </div>
            </div>

            <div className="cv-experience-section">
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
          </div>
        </div>

        <div className="cv-modal-footer">
          <p className="cv-print-instruction">
            💡 Use your browser's print function (Ctrl+P / Cmd+P) to save this
            CV as PDF
          </p>
        </div>
      </div>
    </div>
  );
}
