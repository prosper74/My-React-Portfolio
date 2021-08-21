import React from "react";
import "./header.scss";
import {
  UilBriefcaseAlt,
  UilHome,
  UilUser,
  UilScenery,
  UilFileInfoAlt,
  UilMessage,
  UilTimes,
  UilApps
} from "@iconscout/react-unicons";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            atuProsper.
          </a>

          <div className={"nav__menu " + (menuOpen && "show__menu")}>
            <ul
              className="nav__list grid align"
              onClick={() => setMenuOpen(false)}
            >
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <UilHome size="18" className="nav__icon" /> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <UilUser size="18" className="nav__icon" /> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <UilBriefcaseAlt size="18" className="nav__icon" /> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <UilScenery size="18" className="nav__icon" />{" "}
                  <span>Services</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <UilFileInfoAlt size="18" className="nav__icon" /> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <UilMessage size="18" className="nav__icon" /> Contact
                </a>
              </li>
            </ul>
            <UilTimes
              className="nav__close"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <div className="nav__btns">
            {!menuOpen && (
              <div
                className="nav__toggle"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <UilApps />
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
