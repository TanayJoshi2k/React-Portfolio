import React, { useContext } from "react";
import { motion } from "framer-motion";
import classes from "./About.module.css";
import image from "../../assets/tanay.webp";
import { ThemeContext } from "../../App";

function About() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      id="about"
      className={[
        classes.aboutContainer,
        theme === "dark"
          ? classes.aboutContainer_dark
          : classes.aboutContainer_light,
      ].join(" ")}
    >
      <svg
        className={classes.aboutSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 250"
      >
        <path
          fill={theme === "dark" ? "#202837" : "#ffffff"}
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,197.3C384,224,480,224,576,197.3C672,171,768,117,864,101.3C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <p
        className={[
          classes.aboutMe,
          theme === "dark" ? classes.aboutMe_dark : classes.aboutMe_light,
        ].join(" ")}
      >
        About Me
      </p>
      <img src={image} alt="Tanay's Photo" />
      <motion.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={[
          classes.aboutpara,
          theme === "dark" ? classes.aboutpara_dark : classes.aboutpara_light,
        ].join(" ")}
      >
        <p>I am a Computer Engineer, Software Developer @ Nexion SpA.</p>
        <p>Machine Learning and Computer Vision (CV) enthusiast.</p>
        <p>
          I am passionate about reading CV papers and translating them into
          code.
        </p>
        <p>Self-taught Front-end developer &</p>
        <p>Gamer, Nerd and Meme connoiseur.</p>
      </motion.div>
    </div>
  );
}

export default About;
