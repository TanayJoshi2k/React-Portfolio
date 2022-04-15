import React, { useState, useEffect } from "react";
import classes from "./About.module.css";
function About() {
  return (
    <div id="about" className={classes.aboutContainer}>
      <p className={classes.aboutMe}>About Me</p>
      <div className={classes.aboutpara}>
        <p>
          I am a Computer Engineer, TechOps Consultant @ J.P Morgan & Chase.
        </p>
        <p>Machine Learning and Computer Vision (CV) enthusiast.</p>
        <p>
          I am passionate about reading CV papers and translating them into
          code.
        </p>
        <p>Self-taught Front-end developer &</p>
        <p>Gamer, Nerd and Meme connoiseur.</p>
      </div>
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 2000 300"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(101, 126, 212, 1)" offset="0%"></stop>
            <stop stop-color="rgba(101, 126, 212, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, -100px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,392L80,351.2C160,310,320,229,480,236.8C640,245,800,343,960,351.2C1120,359,1280,278,1440,261.3C1600,245,1760,294,1920,326.7C2080,359,2240,376,2400,367.5C2560,359,2720,327,2880,318.5C3040,310,3200,327,3360,310.3C3520,294,3680,245,3840,228.7C4000,212,4160,229,4320,212.3C4480,196,4640,147,4800,106.2C4960,65,5120,33,5280,89.8C5440,147,5600,294,5760,343C5920,392,6080,343,6240,285.8C6400,229,6560,163,6720,155.2C6880,147,7040,196,7200,187.8C7360,180,7520,114,7680,147C7840,180,8000,310,8160,359.3C8320,408,8480,376,8640,318.5C8800,261,8960,180,9120,122.5C9280,65,9440,33,9600,81.7C9760,131,9920,261,10080,334.8C10240,408,10400,425,10560,359.3C10720,294,10880,147,11040,147C11200,147,11360,294,11440,367.5L11520,441L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"
        ></path>
      </svg>
    </div>
  );
}

export default About;
