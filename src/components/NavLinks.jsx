import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export function NavLinks({ isNavOpen, openTheme }) {
  return (
    <div className={` ${isNavOpen ? "show-menu" : ""} ${openTheme ? "nav-links" : "nav-links-light"}`}>
      <div className="logo">
        <div className="logo-style-right"></div>
        <h1>Richstar</h1>
        <div className="logo-style-left"></div>
      </div>
      <div className="links">
        <NavLink to="/">
          <div className="link-holder">
            <FontAwesomeIcon icon={faHouse} /> Home
          </div>
        </NavLink>

        <NavLink to="/about">
          <div className="link-holder">
            <FontAwesomeIcon icon={faUser} /> About
          </div>
        </NavLink>

        <NavLink to="/projects">
          <div className="link-holder">
            <FontAwesomeIcon icon={faBriefcase} /> Projects
          </div>
        </NavLink>

        <NavLink to="/contact">
          <div className="link-holder">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </div>
        </NavLink>
      </div>
    </div>
  );
}
