import React, { useContext } from "react";
import FadeInWhenVisible from "../AnimationUtils/FadeInWhenVisible";
import classes from "./Education.module.css";
import { ThemeContext } from "../../App";

const Education = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      id="education"
      className={[
        classes.educationContainer,
        theme === "dark"
          ? classes.educationContainer_dark
          : classes.educationContainer_light,
      ].join(" ")}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={theme === "dark" ? "#202837" : "#ffffff"}
          fillOpacity="1"
          d="M0,256L30,250.7C60,245,120,235,180,202.7C240,171,300,117,360,90.7C420,64,480,64,540,90.7C600,117,660,171,720,165.3C780,160,840,96,900,101.3C960,107,1020,181,1080,192C1140,203,1200,149,1260,149.3C1320,149,1380,203,1410,229.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <h1
        className={[
          classes.edTitle,
          theme === "dark" ? classes.edTitle_dark : classes.edTitle_light,
        ].join(" ")}
      >
        Education
      </h1>

      <div className={classes.listContainer}>
        <FadeInWhenVisible>
          <div
            className={[
              classes.BE,
              theme === "dark" ? classes.BE_dark : classes.BE_light,
            ].join(" ")}
          >
            <div className={classes.BEImage}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzFNe2TCNyHa0TO96OWsIOyzO-_GGFva35njxfbqhdqtqMnhzo13i8UYM8Nb53pmFqyI&usqp=CAU"
                alt="Engineering College Logo"
              />
            </div>
            <div
              className={[
                classes.clgContainer,
                theme === "dark"
                  ? classes.clgContainer_dark
                  : classes.clgContainer_light,
              ].join(" ")}
            >
              <p className={classes.clgName}>
                K.J Somaiya Institute of Engineering and Information Technology
              </p>
              <p className={classes.degree}>
                B.E Computer Engineering (2017-2021)
              </p>
              <p
                className={[
                  classes.marks,
                  theme === "dark" ? classes.marks_dark : classes.marks_light,
                ].join(" ")}
              >
                9.5/10 CGPA
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div
            className={[
              classes.BE,
              theme === "dark" ? classes.BE_dark : classes.BE_light,
            ].join(" ")}
          >
            <div className={classes.collegeImage}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/7/79/MSBSHSE_logo.png"
                alt="College Logo"
              />
            </div>
            <div
              className={[
                classes.clgContainer,
                theme === "dark"
                  ? classes.clgContainer_dark
                  : classes.clgContainer_light,
              ].join(" ")}
            >
              <p className={classes.clgName}>
                Mumbai Junior College of Arts, Commerce and Science
              </p>
              <p className={classes.degree}>Higher Secondary (2015-2017)</p>
              <p
                className={[
                  classes.marks,
                  theme === "dark" ? classes.marks_dark : classes.marks_light,
                ].join(" ")}
              >
                75.23%
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div
            className={[
              classes.BE,
              theme === "dark" ? classes.BE_dark : classes.BE_light,
            ].join(" ")}
          >
            <div className={classes.BEImage}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/9/93/School_emblem_of_Don_Bosco%2C_Matunga.gif"
                alt="School Logo"
              />
            </div>
            <div
              className={[
                classes.clgContainer,
                theme === "dark"
                  ? classes.clgContainer_dark
                  : classes.clgContainer_light,
              ].join(" ")}
            >
              <p className={classes.clgName}>Don Bosco High School</p>
              <p className={classes.degree}>Secondary School (2014-2015)</p>
              <p
                className={[
                  classes.marks,
                  theme === "dark" ? classes.marks_dark : classes.marks_light,
                ].join(" ")}
              >
                92.00%
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Education;
