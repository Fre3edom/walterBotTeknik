import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="row">
        <div className="container">
          <img src={Logo} alt="" className="nav__logo" />
          <ul className="nav__links">
            <li className="nav__link click">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/buildcustom" className="nav__link">
              Create your own
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
