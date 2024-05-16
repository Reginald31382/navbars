import React, { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <a
        href="#menu"
        id="toggle"
        className={isMenuOpen ? "on" : ""}
        onClick={handleToggle}
      >
        <span></span>
      </a>

      <div id="menu" className={isMenuOpen ? "visible" : ""}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <p>
        Inspired by{" "}
        <a href="https://codepen.io/loredonut/pen/hjuai">Loredonut Pen</a>
      </p>
    </div>
  );
};

export default Navbar;
