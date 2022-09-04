import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./projects.module.scss";
const Home_project = () => {
  return (
    <Fragment>
      <div className={styles.project_cont}>
        <div className={styles.textBox}>
          <h1>Title</h1>
          <p>Description</p>
          <button>More Details</button>
          <h3>Technologies</h3>
          <div className={styles.tech}>Icons of tech</div>
        </div>
        <div className={styles.img_box}>
          <Image
            src={"/images/psarHomepage.png"}
            alt="Picture of a breaking wave."
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home_project;
