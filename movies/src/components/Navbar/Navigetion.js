import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Home from "../Home/Home";
import Movie from "../Movies/Movie";
import Login from "../Login/Login";
import AddForm from "./AddForm";

function Navigetion() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      <div className="header">
        <div className="logo">Movie</div>
        <nav className="navbar">
          <ul>
            <Link to="/" className="links">
              <li>Home</li>
            </Link>
            <Link to="/Movies" className="links">
              <li>Movies</li>
            </Link>
            <Link className="links" to="/Login">
              <li onMouseEnter={() => setIsOpen(false)}>Login</li>
            </Link>
            <Link className="links">
              <li onClick={() => setIsOpen(!isOpen)}>+</li>
            </Link>
          </ul>
        </nav>
        {isOpen && (
          <div className="Form-container">
            <AddForm />
          </div>
        )}

        <div className="icons">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {showMenu && (
          <div className="open">
            <ul className="open-menu">
              <Link to="/" className="links">
                <li>Home</li>
              </Link>
              <Link to="/Movies" className="links">
                <li>Movies</li>
              </Link>
              <Link className="links">
                <li>Sign In</li>
              </Link>
              <Link className="links">
                <li>+</li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movie />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Navigetion;
