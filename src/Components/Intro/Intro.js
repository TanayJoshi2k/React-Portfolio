// Import Components
import React, { useState, useContext } from "react";
import Footer from "../Footer/Footer";
import SVGICONS from "./svgIcons";

// Import CSS
import classes from "./Intro.module.css";
import typewriter_classes from "./Typewriter.module.css";

// Import Assets
import pdf from "../../assets/Tanay_Joshi_Resume.pdf";

// Import Libraries
import { motion } from "framer-motion";
import { ThemeContext } from "../../App";
import introBackgroundImg from "../../assets/intro_background.webp";

function Intro() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <img className={classes.introBkgImg} src={introBackgroundImg} alt="..."/>
      <motion.div
        className={[
          classes.parentContainer,
          theme === "dark"
            ? classes.parentContainer_dark
            : classes.parentContainer_light,
        ].join(" ")}
      >
        <p
          className={[
            classes.hello,
            theme === "dark" ? classes.hello_dark : classes.hello_light,
          ].join(" ")}
        >
          Hello,
        </p>
        <motion.p
          className={[
            classes.name,
            theme === "dark" ? classes.name_dark : classes.name_light,
          ].join(" ")}
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
        >
          I'm Tanay
        </motion.p>

        <p>
          <span
            className={[
              typewriter_classes.text_1,
              theme === "dark"
                ? typewriter_classes.text_1_dark
                : typewriter_classes.text_1_light,
            ].join(" ")}
          >
            Python Developer
          </span>
          <span
            className={[
              typewriter_classes.text_2,
              theme === "dark"
                ? typewriter_classes.text_2_dark
                : typewriter_classes.text_2_light,
            ].join(" ")}
          >
            ML & CV Enthusiast
          </span>
        </p>

        <SVGICONS />

        <div>
          <button
            className={[
              classes.resume_btn,
              theme === "dark"
                ? classes.resume_btn_dark
                : classes.resume_btn_light,
            ].join(" ")}
          >
            <a href={pdf} download="Tanay Joshi Resume">
              Download Resume
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Intro;
