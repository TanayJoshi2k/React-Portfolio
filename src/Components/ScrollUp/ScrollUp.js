import React, { useEffect, useState } from "react";
import classes from "./ScrollUp.module.css";

const ScrollUp = () => {
  const [show, setShow] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function showScrollUp() {
    const threshold = 1000;
    if (window.scrollY > threshold) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  window.addEventListener("scroll", showScrollUp);

  return (
    <>
      {show && (
        <button className={classes.scrollUp} onClick={scrollToTop}>
          <span className={"material-symbols-outlined"}>arrow_upward</span>
        </button>
      )}
    </>
  );
};

export default ScrollUp;
