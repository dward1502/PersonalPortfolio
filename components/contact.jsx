import React, { Fragment } from "react";
import {FaGithub,FaLinkedin,FaCodepen} from 'react-icons/fa'

import styles from "../sass/Home.module.scss";

const contact = () => {
  return (
    <Fragment>
      <div className={styles.contactBox}>
        <div className={styles.contact_leftbox}>
          <h1>Get In Touch</h1>
          <form action="" className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input type="text" className={styles.input} />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="text" className={styles.input} />
            <label htmlFor="Message" className={styles.label}>
              Message
            </label>
            <textarea name="message" className={styles.message}></textarea>
            <button className={styles.btn}>
              Send Email{" "}
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
