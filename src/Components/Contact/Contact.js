import React, { useState } from "react";
import classes from "./contact.module.css";

const Contact = () => {

  return (
    <div id="contact" className={classes.contactMe}>
      <div className={classes.container}>
        <p className={classes.heading}>Contact Me</p>
        <div className={classes.form}>
        <form action="https://formsubmit.co/cf3866e35057da7a76546033fc69d10f" method="POST">
            <div>
              <label>Name</label>
              <input type="text" name="name" />
            </div>

            <div>
              <label>Email</label>
              <input type="email" name="email" />
            </div>

            <div>
              <label>Message</label>
              <textarea type="text" name="message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
