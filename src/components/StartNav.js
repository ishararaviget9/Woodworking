import "./NavbarStyles.css";
import Nabbar_logo from "../assets/img/woodLogo1.svg";
import React, { useState, useEffect } from "react";

/* import { Link } from "react-router-dom"; */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // You can adjust the threshold as needed
      const scrollThreshold = 100;

      // Check if the user has scrolled beyond the threshold
      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Add your class conditionally based on the state
  const containerClassName = isScrolled ? "scrolledClass" : "";

  return (
    <>
      <nav className={`NavbarItems ${containerClassName}`}>
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
