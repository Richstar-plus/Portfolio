import { NavLinks } from "../Navigation/NavLinks";
import { Hamburger } from "../Navigation/Hamburger";
import { Settings } from "../Navigation/Settings";
import { useTheme } from "../../hooks/useTheme";
import "../Layout/Layout.css";

export function Layout({ children }) {
  const { openTheme, isNavOpen } = useTheme();

  return (
    <div className={`body ${openTheme ? "theme-dark" : "theme-light"}`}>
      <NavLinks />
      <div className="main-body">
        <Hamburger />
        <Settings />
        <div
          className={`${
            isNavOpen ? "main-body-holder-closed" : "main-body-holder"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
