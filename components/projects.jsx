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
            <Image src={"/images/beach1.jpg"} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.image_2}>
            <Image src={"/images/beach2.jpg"} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.image_3}>
            <Image src={"/images/beach3.jpg"} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectInfoBox}>
          <div className={styles.infoBox}>
            <h1>Wakita &amp; Associates</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus iusto expedita molestias nam, ipsa incidunt minima,
              asperiores culpa nesciunt voluptas distinctio, quidem dolore
              dolores. Odio animi harum enim, facere aliquam dignissimos vitae!
            </p>
            <ul className={styles.list}>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                earum sit minima numquam dicta consequuntur quasi?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                earum sit minima numquam dicta consequuntur quasi?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                earum sit minima numquam dicta consequuntur quasi?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                earum sit minima numquam dicta consequuntur quasi?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                earum sit minima numquam dicta consequuntur quasi?
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
            <Image src={"/images/beach1.jpg"} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.image_2}>
            <Image src={"/images/beach2.jpg"} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.image_3}>
            <Image src={"/images/beach3.jpg"} layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default projects;
