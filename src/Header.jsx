import React, { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div
        className="logo-container"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <img
          src="https://i.ibb.co/P4ccjgN/jrome-stu-logo.png"
          alt="jrome brand logo"
          className="logo"
          style={{ width: "18rem" }}
        />
      </div>
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

        <p style={{ width: "50%", margin: "0 auto" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo unde
          quo, quaerat nam quae sit ex a sed ullam aliquid hic alias, debitis
          atque voluptas. Sunt, incidunt perspiciatis unde, aliquid quod quia
          dolorum corporis labore distinctio, accusamus debitis. Nemo
          praesentium soluta quos. Qui corrupti quam nulla cupiditate pariatur,
          dolor labore harum iure hic ducimus? Repellendus nam maiores porro
          magni! Fugiat natus dolore, itaque maxime expedita dolorum distinctio
          non assumenda ex debitis mollitia hic dignissimos facere ab
          perspiciatis sit odit numquam aliquam ipsum veniam, nobis aut, vitae
          architecto enim! Magnam, eveniet? Nulla nesciunt, quasi non pariatur
          nihil adipisci perspiciatis! Molestias, maxime!
        </p>
      </div>
    </div>
  );
};

export default Navbar;
