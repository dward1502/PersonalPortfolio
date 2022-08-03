import React, { Fragment } from "react";

import {
  DiCss3,
  DiReact,
  DiNodejsSmall,
  DiAws,
  DiNpm,
  DiGit,
  DiHtml5,
  DiSass,
  DiPostgresql,
  DiMongodb,
  DiDocker,
  DiWordpress,
} from "react-icons/di";
import { SiJest, SiTypescript, SiNextdotjs } from "react-icons/si";

import styles from "../sass/Home.module.scss";
const skills = () => {
  return (
    <Fragment>
      <h1>Skills &amp; Tools</h1>
      <div className={styles.skillsBox}>
        <DiCss3 size={80} className={styles.margin} />
        <DiReact size={80} className={styles.margin} />
        <DiNodejsSmall size={80} className={styles.margin} />
        <DiAws size={80} className={styles.margin} />
        <DiHtml5 size={80} className={styles.margin} />
        <DiNpm size={80} className={styles.margin} />
        <DiGit size={80} className={styles.margin} />
        <DiSass size={80} className={styles.margin} />
        <DiPostgresql size={80} className={styles.margin} />
        <DiMongodb size={80} className={styles.margin} />
        <DiWordpress size={80} className={styles.margin} />
        <DiDocker size={80} className={styles.margin} />
        <SiJest size={80} className={styles.margin} />
        <SiTypescript size={80} className={styles.margin} />
        <SiNextdotjs size={80} className={styles.margin} />
      </div>
    </Fragment>
  );
};

export default skills;
