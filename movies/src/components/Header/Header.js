import React from "react";
import Navigetion from "../Navbar/Navigetion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="logo">Movie</div>
      <Navigetion />
      <div className="icons">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header;
