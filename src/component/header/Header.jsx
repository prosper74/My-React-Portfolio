import React, { useState } from "react";
import "./header.scss";
import {
  UilBriefcaseAlt,
  UilHome,
  UilUser,
  UilScenery,
  UilFileInfoAlt,
  UilMessage,
  UilTimes,
  UilApps,
  UilMoon,
  UilSun,
} from "@iconscout/react-unicons";

function Header({ menuOpen, setMenuOpen, themeIcon, setThemeIcon }) {
  const [scrollup, setScrollup] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollup(true);
    } else {
      setScrollup(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <header className={scrollup ? "header scroll" : "header"}>
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            atuProsper.
          </a>

          <div className={"navMenu " + (menuOpen && "show__menu")}>
            <ul className="navList" onClick={() => setMenuOpen(false)}>
              <li className="nav__item">
                <a href="#about" className="navLink">
                  <UilUser size="18" className="navIcon" /> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="navLink">
                  <UilBriefcaseAlt size="18" className="navIcon" /> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="navLink">
                  <UilScenery size="18" className="navIcon" />{" "}
                  <span>Services</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="navLink">
                  <UilFileInfoAlt size="18" className="navIcon" /> Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="navLink">
                  <UilMessage size="18" className="navIcon" /> Contact
                </a>
              </li>
            </ul>
            <UilTimes className="navClose" onClick={() => setMenuOpen(false)} />
          </div>

          <div className="nav__btns">
            {!menuOpen && (
              <div className="navToggle">
                <div
                  className="changeTheme"
                  onClick={() => setThemeIcon(!themeIcon)}
                >
                  {themeIcon ? <UilSun /> : <UilMoon />}
                </div>
                <UilApps
                  className="navToggleIcon"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
