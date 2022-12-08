import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import classes from "./contact.module.css";
import { ThemeContext } from "../../App";

const Contact = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    console.log(re.test(email));
    return re.test(email);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!validateEmail(values.email)) {
      errors.email = "Email is badly formatted";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formik.errors);

  return (
    <div
      className={[
        classes.parentContainer,
        theme === "dark"
          ? classes.parentContainer_dark
          : classes.parentContainer_light,
      ].join(" ")}
    >
      <div
        id="contact"
        className={[
          classes.metadata,
          theme === "dark" ? classes.metadata_dark : classes.metadata_light,
        ].join(" ")}
      >
        <div
          className={[
            classes.container,
            theme === "dark" ? classes.container_dark : classes.container_light,
          ].join(" ")}
        >
          <p>Get In Touch</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill={theme === "dark" ? "#ffffff" : "#1c1c1c"}
              className="bi bi-pin-map-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
              />
              <path
                fillRule="evenodd"
                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
              />
            </svg>
            <p>Find Me At</p>
            <p>Mumbai, IN</p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill={theme === "dark" ? "#ffffff" : "#1c1c1c"}
              className="bi bi-mailbox"
              viewBox="0 0 16 16"
            >
              <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
              <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
            </svg>
            <p>Email me at</p>
            <p>tanaypjoshi@gmail.com</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill={theme === "dark" ? "#ffffff" : "#1c1c1c"}
              className="bi bi-pin-map-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
              />
              <path
                fillRule="evenodd"
                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
              />
            </svg>
            <p>Call Me On</p>
            <p>+91 9930100047</p>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className={[
          classes.contactMeForm,
          theme === "dark"
            ? classes.contactMeForm_dark
            : classes.contactMeForm_light,
        ].join(" ")}
      >
        <div
          className={[
            classes.container,
            theme === "dark" ? classes.container_dark : classes.container_light,
          ].join(" ")}
        >
          <p className={classes.heading}>Contact Me</p>
          <div className={classes.form}>
            <form
              action="https://formsubmit.co/cf3866e35057da7a76546033fc69d10f"
              method="POST"
            >
              <div>
                <label>Name</label>
                <input
                  className={[
                    classes.formInput,
                    theme === "dark"
                      ? classes.formInput_dark
                      : classes.formInput_light,
                  ].join(" ")}
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div style={{ color: "gray" }}>{formik.errors.name}</div>
                ) : (
                  <div style={{ visibility: "hidden" }}>''</div>
                )}
              </div>

              <div>
                <label>Email</label>
                <input
                  className={[
                    classes.formInput,
                    theme === "dark"
                      ? classes.formInput_dark
                      : classes.formInput_light,
                  ].join(" ")}
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "gray" }}>{formik.errors.email}</div>
                ) : (
                  <div style={{ visibility: "hidden" }}>''</div>
                )}
              </div>

              <div>
                <label>Message</label>
                <textarea
                  className={[
                    classes.textarea,
                    theme === "dark"
                      ? classes.textarea_dark
                      : classes.textarea_light,
                  ].join(" ")}
                  type="text"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>

                {formik.touched.message && formik.errors.message ? (
                  <div style={{ color: "gray" }}>{formik.errors.message}</div>
                ) : (
                  <div style={{ visibility: "hidden" }}>''</div>
                )}
              </div>
              <button
                className={[
                  theme === "dark" ? classes.button_dark : classes.button_light,
                ].join(" ")}
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
