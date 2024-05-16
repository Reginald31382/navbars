import React, { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="mmeennuu"
        checked={checked}
        onChange={handleToggle}
      />
      <label className={`menu ${checked ? "active" : ""}`} htmlFor="mmeennuu">
        <div className="barry">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul>
          <li>
            <a id="home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a id="about" href="#about">
              About
            </a>
          </li>
          <li>
            <a id="contact" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a id="link" href="#link">
              Other
            </a>
          </li>
        </ul>
      </label>
    </div>
  );
};

export default Navbar;
