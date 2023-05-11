import React, { useContext } from "react";
import classes from "./Timeline.module.css";
import Education from "../Education/Education";
import { motion } from "framer-motion";
import { ThemeContext } from "../../App";

const Timeline = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div id="experience"
      className={[
        classes.experienceContainer,
        theme === "dark"
          ? classes.experienceContainer_dark
          : classes.experienceContainer_light,
      ].join(" ")}
    >
      <p
        className={[
          classes.experience,
          theme === "dark" ? classes.experience_dark : classes.experience_light,
        ].join(" ")}
      >
        Experience
      </p>
      <section className={(classes.cdContainer, classes.cdTimeline)}>
        <div className={classes.cdTimelineBlock}>
          <div
            className={[
              classes.cdTimelineImg,
              theme === "dark"
                ? classes.cdTimelineImg_dark
                : classes.cdTimelineImg_light,
            ].join(" ")}
          ></div>

          <motion.div
            initial={{ x: "-100vh" }}
            animate={{ x: 0 }}
            className={[
              classes.cdTimelineContent,
              theme === "dark"
                ? classes.cdTimelineContent_dark
                : classes.cdTimelineContent_light,
            ].join(" ")}
          >
            <h2
              className={[
                classes.jobTitle,
                theme === "dark"
                  ? classes.jobTitle_dark
                  : classes.jobTitle_light,
              ].join(" ")}
            >
              J.P Morgan Chase & Co.
            </h2>
            <div className={classes.timelineContentInfo}>
              <span className={classes.timelineContentInfoTitle}>
                TechOps Consultant (Fulltime)
              </span>
              <span className={classes.timelineContentInfoDate}>
                November 2021 - Present
              </span>
            </div>
            <p
              className={[
                classes.jobDescription,
                theme === "dark"
                  ? classes.jobDescription_dark
                  : classes.jobDescription_light,
              ].join(" ")}
            >
              Identify problems in merchant services and deliver strategic
              solutions to clients. Collaborate and communicate to perform
              troubleshooting, root cause analysis, support merchants and
              incident monitoring.
            </p>
            {/* <ul className={classes.contentSkills}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Wordpress</li>
            </ul> */}
          </motion.div>
        </div>
        <div className={classes.cdTimelineBlock}>
          <div
            className={[
              classes.cdTimelineImg,
              theme === "dark"
                ? classes.cdTimelineImg_dark
                : classes.cdTimelineImg_light,
            ].join(" ")}
          ></div>

          <motion.div
            initial={{ x: "100vh" }}
            animate={{ x: 0 }}
            className={[
              classes.cdTimelineContent,
              theme === "dark"
                ? classes.cdTimelineContent_dark
                : classes.cdTimelineContent_light,
            ].join(" ")}
          >
            <h2
              className={[
                classes.jobTitle,
                theme === "dark"
                  ? classes.jobTitle_dark
                  : classes.jobTitle_light,
              ].join(" ")}
            >
              Wiley India Pvt Ltd.
            </h2>
            <div className={classes.timelineContentInfo}>
              <span className={classes.timelineContentInfoTitle}>Intern</span>
              <span className={classes.timelineContentInfoDate}>
                July 2021 - October 2021
              </span>
            </div>
            <p
              className={[
                classes.jobDescription,
                theme === "dark"
                  ? classes.jobDescription_dark
                  : classes.jobDescription_light,
              ].join(" ")}
            >
              Internship/Training program which covered several topics: ITIL,
              SDLC, Python, DBMS, Git.
            </p>
          </motion.div>
        </div>
        <div className={classes.cdTimelineBlock}>
          <div
            className={[
              classes.cdTimelineImg,
              theme === "dark"
                ? classes.cdTimelineImg_dark
                : classes.cdTimelineImg_light,
            ].join(" ")}
          ></div>

          <motion.div
            initial={{ x: "-100vh" }}
            animate={{ x: 0 }}
            className={[
              classes.cdTimelineContent,
              theme === "dark"
                ? classes.cdTimelineContent_dark
                : classes.cdTimelineContent_light,
            ].join(" ")}
          >
            <h2
              className={[
                classes.jobTitle,
                theme === "dark"
                  ? classes.jobTitle_dark
                  : classes.jobTitle_light,
              ].join(" ")}
            >
              Finance Lookup Advisors LLP
            </h2>
            <div className={classes.timelineContentInfo}>
              <span className={classes.timelineContentInfoTitle}>
                Research Analyst & Automation Intern
              </span>
              <span className={classes.timelineContentInfoDate}>
                June 2020 - August 2020
              </span>
            </div>
            <p
              className={[
                classes.jobDescription,
                theme === "dark"
                  ? classes.jobDescription_dark
                  : classes.jobDescription_light,
              ].join(" ")}
            >
              As an internship assignment, developed and deployed a fully
              functional automation system to bulk download 15CA/15CB files from
              Govt. of India’s Income Tax site to eliminate humongous efforts of
              one-by-one download.
            </p>
          </motion.div>
        </div>
        <div className={classes.cdTimelineBlock}>
          <div
            className={[
              classes.cdTimelineImg,
              theme === "dark"
                ? classes.cdTimelineImg_dark
                : classes.cdTimelineImg_light,
            ].join(" ")}
          ></div>

          <motion.div
            initial={{ x: "100vh" }}
            animate={{ x: 0 }}
            className={[
              classes.cdTimelineContent,
              theme === "dark"
                ? classes.cdTimelineContent_dark
                : classes.cdTimelineContent_light,
            ].join(" ")}
          >
            <h2
              className={[
                classes.jobTitle,
                theme === "dark"
                  ? classes.jobTitle_dark
                  : classes.jobTitle_light,
              ].join(" ")}
            >
              Ellicium Solutions Pvt Ltd.
            </h2>
            <div className={classes.timelineContentInfo}>
              <span className={classes.timelineContentInfoTitle}>
                Tech Intern
              </span>
              <span className={classes.timelineContentInfoDate}>
                June 2019 - July 2019
              </span>
            </div>
            <p
              className={[
                classes.jobDescription,
                theme === "dark"
                  ? classes.jobDescription_dark
                  : classes.jobDescription_light,
              ].join(" ")}
            >
              1. Underwent a rigorous training in Python, MySQL as an intern.
            </p>
            <p className={[
                classes.jobDescription,
                theme === "dark"
                  ? classes.jobDescription_dark
                  : classes.jobDescription_light,
              ].join(" ")}>
              2. Developed software for its client to automate the process of
              sending emails to multiple recipients by taking input from an
              excel file to include greeting in the email for the corresponding
              name
            </p>
          </motion.div>
        </div>
      </section>

      <Education />
    </div>
  );
};

export default Timeline;
