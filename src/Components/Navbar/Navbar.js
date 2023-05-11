import React, { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";
import MobileNavbar from "./MobileNavbar";
import NavItems from "./NavItem";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(!showNav);
  };
  const { theme, toggleTheme } = useContext(ThemeContext);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.15,
      },
    },
  };

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
        {!showNav ? (
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className={classes.hideNav}
          >
            <div
              className={[
                classes.liContainer,
                theme === "dark"
                  ? classes.liContainer_dark
                  : classes.liContainer_light,
              ].join(" ")}
            >
              <NavItems />

              <li onClick={toggleTheme}>
                {theme === "dark" ? (
                  <span className="material-symbols-outlined">dark_mode</span>
                ) : (
                  <span className="material-symbols-outlined">light_mode</span>
                )}
              </li>
            </div>
            <div className={classes.hideHr}>
              <hr className={classes.hr} />
              <div className={classes.logo}>
                <a href="/">Tanay Joshi</a>
              </div>
            </div>
          </motion.ul>
        ) : (
          <MobileNavbar />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
