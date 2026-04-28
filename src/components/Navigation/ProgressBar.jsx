import { useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar({ title, level, themColor }) {
  const [progress, setProgress] = useState(level);

  return (
    <div className="progress-wrapper">
      <div className="progress-info">
        <span>{title}</span>
        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className={`progress-fill about-theme-color-${themColor}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}