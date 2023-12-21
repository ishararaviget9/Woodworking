import "./NavbarStyles.css";
import Nabbar_logo from "../assets/img/woodLogo1.svg";

/* import { Link } from "react-router-dom"; */
function Navbar() {
  return (
    <>
      <nav className="NavbarItems">
        <a className="Navbar-logo" href="https://example.com">
          <div className="Navbar-img">
            <img src={Nabbar_logo} alt="logo"></img>
          </div>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
