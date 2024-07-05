import sandboxLogo from "../Assets/sandbox-logo.png"
import { Link } from "react-router-dom";
import "../styles/navbar.css"

function NavBar(){
    return(
        <nav className="nav-bar">
            <img src={sandboxLogo} alt="" />
            <div className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/members">Members</Link></li>
                <li><Link to="/Facilities">Facilities</Link></li>
            </div>
        </nav>
    )
}

export default NavBar;