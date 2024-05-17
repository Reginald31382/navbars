import React, { useState } from "react";
import "./index.css";

const title = ["your business name here."];

const sections = ["home", "about", "blog", "contact"];

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <nav id="nav" className={navActive ? "active" : ""}>
        <button className="nav-icon" id="nav-icon" onClick={toggleNav}>
          <span></span>
        </button>
        <ul>
          {sections.map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={toggleNav}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ textAlign: "center", marginTop: "20rem" }}>
        {title.map((item) => (
          <p key={item}>[ {item} ]</p>
        ))}
      </div>
      {sections.map((section) => (
        <section id={section} key={section}>
          <h2>{section}</h2>
          <p>
            Click on the hamburger menu icon to see the vertical popout menu.
            Scroll down to see how it adapts to the background color. The menu
            icon is created using pure CSS, and the color of the menu adapts to
            the background color of the page by setting mix-blend-mode to
            "difference". The toggle animation only needs a tiny bit of
            JavaScript. This demo was tested in the latest versions of Chrome,
            Firefox and Safari. It also works on mobile.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
            tellus, tempor vitae elit ac, ornare aliquet elit. Vivamus ac
            tincidunt est, vehicula semper neque. Aliquam eu velit mi. Mauris
            vel lorem sollicitudin, sollicitudin sem vel, pulvinar risus.
            Pellentesque ac pulvinar erat, quis aliquet lectus. Integer diam
            odio, auctor non ullamcorper scelerisque, imperdiet non est. Sed
            vulputate porttitor lorem, sit amet feugiat tortor pretium
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ultrices, lectus at ultricies tempus, massa lorem tincidunt
            urna, at porta nulla massa ac est. Aliquam commodo auctor tempus. In
            molestie nisl eget diam scelerisque, vel porta metus euismod.
            Praesent venenatis augue dignissim, vestibulum ex eget, vestibulum
            sem. In varius est leo. Nam id lobortis erat. Etiam et metus sit
            amet justo consectetur lacinia faucibus in elit. Aenean elit lorem,
            pellentesque sed pellentesque at, cursus eget felis.
          </p>
        </section>
      ))}
    </div>
  );
};

export default Header;
