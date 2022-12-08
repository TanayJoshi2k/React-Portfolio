import React, { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(!showNav);
  };
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav>
        <button className={classes.toggleNav} onClick={closeNav}>
          {showNav ? (
            <span
              style={{
                fontSize: "1.5rem",
                color: "#33D69A",
                cursor: "pointer",
              }}
            >
              X
            </span>
          ) : (
            <span
              style={{
                fontSize: "1.5rem",
                color: "#33D69A",
                cursor: "pointer",
              }}
            >
              ☰
            </span>
            
          )}
        </button>
        <ul className={showNav ? classes.showNav : classes.hideNav}>
          <div
            className={[
              classes.liContainer,
              theme === "dark"
                ? classes.liContainer_dark
                : classes.liContainer_light,
            ].join(" ")}
          >
            <li>
              <a href="/">Tanay Joshi</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Exp & Education</a>
            </li>
            <li>
              <a href="#snp">Skills & Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li onClick={toggleTheme}>
              {theme === "dark" ? (
                <span className="material-symbols-outlined">dark_mode</span>
              ) : (
                <span className="material-symbols-outlined">light_mode</span>
              )}
            </li>
          </div>
          <div className={showNav ? classes.showHr : classes.hideHr}>
            <hr className={classes.hr} />
            <div className={classes.logo}>
              <a href="/">Tanay Joshi</a>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
