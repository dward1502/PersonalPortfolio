import React, { Fragment } from "react";
import Image from "next/image";
import { FaGlobe, FaGithub } from "react-icons/fa";

import styles from "../sass/Home.module.scss";

const projects = () => {
  return (
    <Fragment>
      <div className={styles.project}>
        <div className={styles.projectInfoBox}>
          <div className={styles.infoBox}>
            <h1>Pacific Southwest Association of Realtors</h1>
            <p>
              PSAR is a realtor association in San Diego monthly visitors to the
              site are in the thousands. Have maintained the site since 2018.
              The previous site was outdated and I was able to provide a modern
              refresh that was aligned with the vision the company had for their
              website.
            </p>
            <ul className={styles.list}>
              <li>Built with HTML CSS and Javascript.</li>
              <li>
                Integrated Hubspot into the site according to clients needs.
              </li>
              <li>
                Provided ability to interact with website through Hubspot and
                update pages and information accordingly.
              </li>
              <li>Hosted on Amazon Web Services.</li>
            </ul>
            <div className={styles.project_btns}>
              {/* <div className={styles.linkBtn}>
                <FaGithub /> <a href="#">Github</a>
              </div> */}
              <div className={styles.linkBtn}>
                <FaGlobe />
                <a href="https://www.psar.org/home?hsLang=en">Live Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectImageBox}>
          <div className={styles.image_1}>
            <Image src={"/images/psarHomepage.png"} layout="fill" objectFit="contain" />
          </div>
          
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectInfoBox}>
          <div className={styles.infoBox}>
            <h1>Wakita &amp; Associates</h1>
            <p>
              A Real Estate sellers website made to allow users to see
              properties in the San Diego region. Communities section allows
              propsective buyers to get a snapshot of a community in San Diego
              and than see properties available.
            </p>
            <ul className={styles.list}>
              <li>
                Created a dynamic property search that uses MLS data and
                displays properties using Google Maps.
              </li>
              <li>Uses React and SASS.</li>
              <li>
                Hosted on Amazon Web Services.
              </li>
              <li>
                Styled for mobile and desktop.
              </li>
            </ul>
            <div className={styles.project_btns}>
              <div className={styles.linkBtn}>
                <FaGithub /> <a href="#">Github</a>
              </div>
              <div className={styles.linkBtn}>
                <FaGlobe />
                <a href="#">Live Link</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectImageBox}>
          <div className={styles.image_1}>
            <Image src={"/images/WakitaHomes.png"} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default projects;
