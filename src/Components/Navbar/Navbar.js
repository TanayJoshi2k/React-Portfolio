import React, { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <nav>
        <button className={classes.toggleNav} onClick={closeNav}>
          {showNav ? (
            <span style={{ fontSize: "1.5rem", color: "rgb(168, 168, 168)" }}>
              X
            </span>
          ) : (
            <span style={{ fontSize: "1.5rem", color: "rgb(168, 168, 168)" }}>
              ☰
            </span>
          )}
        </button>
        <ul className={showNav ? classes.showNav : classes.hideNav}>
          <div className={classes.liContainer}>
            <li className={classes.brand}>
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
