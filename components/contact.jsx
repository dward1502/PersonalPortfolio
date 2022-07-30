import React, { Fragment, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaRegEnvelope } from "react-icons/fa";
import useInput from "../hooks/use-input";

import styles from "../sass/Home.module.scss";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

const contact = () => {
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  //
  useEffect(() => {
    if (requestError === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  //client side validation
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: messageValue,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }
  async function sendMessageHandler(event) {
    event.preventDefault();
    console.log('message sent');
    let data = {
      nameValue,
      emailValue,
      messageValue
    }
    console.log(data);
  }
  return (
    <Fragment>
      <div className={styles.contactBox}>
        <div className={styles.contact_leftbox}>
          <h1>Get In Touch</h1>
          <form onSubmit={sendMessageHandler} className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              className={styles.input}
              name="name"
              id="name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="text"
              className={styles.input}
              name="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            <label htmlFor="Message" className={styles.label}>
              Message
            </label>
            <textarea
              name="message"
              className={styles.message}
              value={messageValue}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            ></textarea>
            <button className={styles.btn} type='submit' disabled={!formIsValid}>
              Send Email
              <span>
                <FaRegEnvelope />
              </span>
            </button>
          </form>
        </div>
        <div className={styles.contact_social}>
          <a
            href="https://github.com/dward1502"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={60} color={"#fff"} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-ward-1502/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={60} color={"#fff"} />
          </a>
          <a
            href="https://codepen.io/dward1502"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen size={60} color={"#fff"} />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default contact;
