import sandboxLogo from "../Assets/sandbox-logo.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import MenuIcon from "./menuIcon";
import { useState } from "react";

function NavBar() {
  const [menuState, changeState] = useState("closed");

  return (
    <nav className="nav-bar">
      <img src={sandboxLogo} alt="" />
      <div className={`menu-${menuState}`}>
        <MenuIcon state={menuState} changeState={changeState} />
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/Facilities">Facilities</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
