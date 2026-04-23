import "./App.css";
import { Hamburger } from "./components/Hamburger";
import { NavLinks } from "./components/NavLinks";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <NavLinks />
        <div className="main-body">
          <Hamburger />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
