import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          💧 AquaPredict
        </Link>

        {/* Navigation */}
        <ul className="nav-links">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/predict">Predict</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/how">How It Works</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;