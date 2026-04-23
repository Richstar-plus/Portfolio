import './NavLinks.css';
import { NavLink } from 'react-router-dom';


export function NavLinks() {
  return (
    <div className="nav-links">
      <div className="logo">Richstar</div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}
