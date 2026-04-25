import "./App.css";
import { Hamburger } from "./components/Hamburger";
import { NavLinks } from "./components/NavLinks";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Settings } from "./components/Settings";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);

  function handleThemeOpen(){
    setOpenTheme(prev => !prev);
  }

  return (
    <BrowserRouter>
      <div className={`body ${openTheme ? "theme-dark" : "theme-light"}`}>
        <NavLinks isNavOpen={isNavOpen} openTheme={openTheme} />
        <div className="main-body">
          <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} openTheme={openTheme} />
          <Settings
            openColors={openColors}
            setOpenColors={setOpenColors}
            openTheme={openTheme}
            setOpenTheme={setOpenTheme}
            handleThemeOpen={handleThemeOpen}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
