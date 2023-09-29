import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Movie from "../Movies/Movie";

function Navigetion() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Router>
      <div className="header">
        <div className="logo">Movie</div>
        <nav className="navbar">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Movies">
              <li>Movies</li>
            </Link>
            <Link>
              <li>Sign In</li>
            </Link>
            <Link>
              <li>+</li>
            </Link>
          </ul>
        </nav>

        <div className="icons">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
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
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Movies" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default Navigetion;
