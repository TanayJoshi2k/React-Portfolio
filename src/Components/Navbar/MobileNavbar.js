import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";
import NavItems from "./NavItems";
import classes from "./MobileNavbar.module.css";

function MobileNavbar() {
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

  return (<motion.ul
    variants={container}
    initial="hidden"
    animate="show"
    className={classes.showNav}
  >
    <div
      className={[
        classes.liContainer,
        theme === "dark" ? classes.liContainer_dark : classes.liContainer_light,
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
    <div className={classes.showHr}>
      <hr className={classes.hr} />
      <div className={classes.logo}>
        <a href="/">Tanay Joshi</a>
      </div>
    </div>
  </motion.ul>)
}

export default MobileNavbar;
