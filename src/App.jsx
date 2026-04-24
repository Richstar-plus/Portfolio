import "./App.css";
import { Hamburger } from "./components/Hamburger";
import { NavLinks } from "./components/NavLinks";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Settings } from "./components/Settings";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="body">
        <NavLinks isNavOpen={isNavOpen} />
        <div className="main-body">
          <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Settings />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
