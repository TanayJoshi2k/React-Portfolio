import React from "react";
import classes from "./snp.module.css";
import encoders from "../../assets/encoders.png";
import unet from "../../assets/UNet.png";
import pokedex from "../../assets/pokedex.png";

const SNP = () => {
  return (
    <div>
      <div id="snp" className={classes.skillsContainer}>
        <p>Skills</p>

        <div className={classes.skills}>
          <p>Languages</p>
          <div className={classes.techStack}>
            <div>Python</div>
            <div>Javascript</div>
            <div>C</div>
            <div>Java</div>
          </div>
          <p>Python Libraries/Frameworks</p>
          <div className={classes.techStack}>
            <div>Numpy</div>
            <div>Pandas</div>
            <div>OpenCV</div>
            <div>Matplotlib</div>
            <div>Seaborn</div>
            <div>Tensorflow</div>
            <div>Keras</div>
          </div>
          <p>Databases</p>
          <div className={classes.techStack}>
            <div>MySQL</div>
            <div>MongoDB</div>
          </div>
          <p>Web</p>
          <div className={classes.techStack}>
            <div>HTML</div>
            <div>CSS</div>
            <div>React.js</div>
            <div>Bootstrap</div>
            <div>Tailwind</div>
            <div>Axios</div>
          </div>
        </div>
      </div>
      <div className={classes.projectsContainer}>
        <div className={classes.project}>
          <a
            href="https://github.com/TanayJoshi2k/ImageColoring"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image Coloring with Encoders
          </a>

          <div className={classes.imgContainer}>
            <img src={encoders} className={classes.project_img} />
          </div>

          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>Python</div>
              <div>Tensorflow</div>
              <div>Keras</div>
            </div>
            <div className={classes.techStack}>
              <div>Numpy</div>
              <div>OpenCV</div>
              <div>Matplotlib</div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <a href="" target="_blank" rel="noopener noreferrer">
            Segmenting people with U-Net
          </a>

          <div className={classes.imgContainer}>
            <img src={unet} className={classes.project_img} />
          </div>
          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>Python</div>
              <div>Tensorflow</div>
              <div>Keras</div>
            </div>

            <div className={classes.techStack}>
              <div>Numpy</div>
              <div>OpenCV</div>
              <div>Matplotlib</div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <a
            href="https://github.com/TanayJoshi2k/Pokedex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pokedex
          </a>

          <div className={classes.imgContainer}>
            <img src={pokedex} className={classes.project_img} />
          </div>
          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>HTML</div>
              <div>CSS</div>
              <div>Bootstrap</div>
            </div>

            <div className={classes.techStack}>
              <div>Javascript</div>
              <div>React</div>
              <div>Axios</div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <a
            href="https://github.com/TanayJoshi2k/Pokedex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>

          <div className={classes.imgContainer}>
            <img src={pokedex} className={classes.project_img} />
          </div>

          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>HTML</div>
              <div>CSS</div>
              <div>Bootstrap</div>
            </div>

            <div className={classes.techStack}>
              <div>Javascript</div>
              <div>React</div>
              <div>React Router</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SNP;
