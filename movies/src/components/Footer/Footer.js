import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3>created by Elyas Shamal</h3>
      <a href="https://github.com/ElyasShamal" target="-blink">
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/mohammad-elyas-s-b975b7275/"
        target="-blink"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
}

export default Footer;
