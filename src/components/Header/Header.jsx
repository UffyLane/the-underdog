import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Primary">
        <NavLink className="header__link" to="/">
          Home
        </NavLink>
        <NavLink className="header__link" to="/profile">
          Profile
        </NavLink>
      </nav>
    </header>
  );
}
