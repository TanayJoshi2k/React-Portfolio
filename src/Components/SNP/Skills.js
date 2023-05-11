import React, { useContext } from "react";
import classes from "./skills.module.css";
import { ThemeContext } from "../../App";
import { default as reactLogo } from "../../assets/reactjs-icon.svg";
import { default as gitIcon } from "../../assets/git-scm-icon.svg";
// import { default as html } from "../../assets/w3_html5-icon.svg";
import { default as javascript } from "../../assets/js.svg";
// import { default as css } from "../../assets/w3_css-icon.svg";
import { default as mysql } from "../../assets/mysql3.svg";
import { default as mongodb } from "../../assets/mongodb-icon.svg";
import { default as python } from "../../assets/python.svg";
import { default as tf } from "../../assets/tensorflow-icon.svg";
import { default as cv } from "../../assets/opencv-icon.svg";
import { default as bootstrap } from "../../assets/getbootstrap-icon.svg";
import { default as tailwind } from "../../assets/tailwindcss-icon.svg";
import { default as html } from "../../assets/w3_html5-icon.svg";
import { default as css } from "../../assets/w3_css-icon.svg";
import { default as express } from "../../assets/expressjs-icon.svg";
import { default as numpy } from "../../assets/numpy-svgrepo-com.svg";
import { default as keras } from "../../assets/keras-svgrepo-com.svg";
import { default as pandas } from "../../assets/pandas-svgrepo-com.svg";


const Skills = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      id="skills"
      className={[
        classes.skillsContainer,
        theme === "dark"
          ? classes.skillsContainer_dark
          : classes.skillsContainer_light,
      ].join(" ")}
    >
      <p
        className={[
          classes.skillsTitle,
          theme === "dark"
            ? classes.skillsTitle_dark
            : classes.skillsTitle_light,
        ].join(" ")}
      >
        Skills
      </p>

      <div className={classes.skills}>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={python} alt="python logo" />
          <p>Python</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={javascript} alt="javascript logo" />
          <p>JavaScript</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={css} alt="css logo" />
          <p>CSS</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={bootstrap} alt="bootstrap logo" />
          <p>Bootstrap</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={tailwind} alt="tailwind logo"/>
          <p>Tailwind</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={reactLogo} alt="react logo" />
          <p>React.js</p>
        </div>
      </div>
      <div className={classes.skills}>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={mysql} alt="mysql logo"/>
          <p>MySQL</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={express} alt="express logo" />
          <p>Express.js</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={mongodb} alt="mongodb logo" />
          <p>MongoDB</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={tf} alt="tensorflow logo" />
          <p>Tensorflow</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={keras} alt="keras logo" />
          <p>Keras</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={pandas} alt="pandas logo" />
          <p>Pandas</p>
        </div>
        <div
          className={[
            classes.skill,
            theme === "dark" ? classes.skill_dark : classes.skill_light,
          ].join(" ")}
        >
          <img src={numpy} alt="numpy logo" />
          <p>Numpy</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
