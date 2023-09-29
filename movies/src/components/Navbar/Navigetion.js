import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Main from "../Main/Main";
import Movie from "../Movies/Movie";

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
            <Link className="links">
              <li onMouseEnter={() => setIsOpen(false)}>Sign In</li>
            </Link>
            <Link className="links">
              <li onMouseEnter={() => setIsOpen(!isOpen)}>+</li>
            </Link>
          </ul>
        </nav>
        {isOpen && (
          <div className="Form-container" onMouseLeave={() => setIsOpen(false)}>
            <form className="form" id="form">
              <h3 className="Form-title">Add Movie ?</h3>
              <label htmlFor="name">Title</label>
              <input type="text" placeholder="Movie Name" required />
              <br></br>
              <label htmlFor="image">Image</label>
              <input type="text" placeholder="Image url" required />
              <br></br>
              <label for="Description">Description:</label>
              <textarea
                required
                id="description"
                name="description"
                rows="5"
                cols="39"
              ></textarea>

              <button type="submit">Submit</button>
            </form>
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
        <Route path="/" element={<Main />} />
        <Route path="/Movies" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default Navigetion;
