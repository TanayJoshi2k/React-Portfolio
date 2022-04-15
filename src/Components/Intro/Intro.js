import React, { useState, useEffect } from "react";
import tanay from "../../assets/tanay.PNG";
import pattern from "../../assets/pattern.png";
import classes from "./Intro.module.css";
import { motion } from "framer-motion";

import Footer from "../Footer/Footer";

function Intro() {
  const [show, setShow] = useState(true);

  return (
    <motion.div
      className={classes.parentContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
    >
      <img className={classes.imageContainer} src={tanay}></img>

      <div className={classes.greetingsContainer}>
        <p className={classes.hello}>
          <span className={classes.tapered}>Hello,</span>
        </p>
        <motion.p
          className={classes.name}
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
        >
          I'm Tanay
        </motion.p>
        <p id="dynamic_text">
          <span className={classes.text_1}>Python Developer</span>
          <span className={classes.text_2}>ML & CV Enthusiast</span>
        </p>
  
      </div>
      
    </motion.div>
  );
}

export default Intro;
