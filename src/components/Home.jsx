import "./Home.css";
import heroImage from "../images/heroImage.png";

export function Home({ themColor, isNavOpen }) {
  return (
    <div className="home">
      <div
        className={`${isNavOpen ? "main-body-holder-closed" : "main-body-holder"}`}
      >
        <div className="home-content-holder">
          <h1 className="home-title">
            Hello, my name is{" "}
            <span className={`theme-color-${themColor}`}>Richard Sunday</span>
          </h1>
          <h2 className="home-subtitle">
            I'm a{" "}
            <span className={`theme-color-${themColor}`}>Web Developer</span>
          </h2>
          <p className="home-description">
            I'm a passionate web developer with a knack for creating dynamic and
            responsive websites. With a strong foundation in HTML, CSS, and
            JavaScript, I specialize in building user-friendly interfaces and
            seamless user experiences. Whether it's crafting a sleek portfolio
            or developing a robust e-commerce platform, I thrive on turning
            ideas into reality through code.
          </p>
          <button className={`home-button button-theme-color-${themColor}`}>
            More about me
          </button>
        </div>
        <div className="home-picture-banner">
          <div className="hero-border-right-style"></div>
          <div className="hero-container">
            <img src={heroImage} alt="Hero" />
          </div>
          <div className="hero-border-left-style"></div>
        </div>
      </div>
    </div>
  );
}
