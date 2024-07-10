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
              <Link to="/" onClick={()=>{changeState("closed")}}>Home</Link>
            </li>
            <li>
              <Link to="/projects" onClick={()=>{changeState("closed")}}>Projects</Link>
            </li>
            <li>
              <Link to="/members" onClick={()=>{changeState("closed")}}>Members</Link>
            </li>
            <li>
              <Link to="/Facilities" onClick={()=>{changeState("closed")}}>Facilities</Link>
            </li>
            <li>
              <Link to="/faq" onClick={()=>{changeState("closed")}}>FAQs</Link>
            </li>
            <button className="access-form-btn">Apply for Access</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
