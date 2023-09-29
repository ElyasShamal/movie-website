import React, { useState } from "react";
import Navigetion from "../Navbar/Navigetion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="logo">Movie</div>
      <Navigetion />
      <div className="icons">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </div>
      {showMenu && (
        <div className="open">
          <ul className="open-menu">
            <li>Home</li>
            <li>Movie</li>
            <li>Sign In</li>
            <li>+</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
