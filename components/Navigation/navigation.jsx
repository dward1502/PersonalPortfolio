import React, { Fragment } from "react";
import Image from "next/image";

import styles from "./navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <Fragment>

      <header className={styles.header}>
        {/* <nav className={styles.navbar}> */}
        <div className={styles.logo}>
          <Image
            src="/images/dwLogo.png"
            alt="Daniel Ward Logo"
            layout="fill"
            className={styles.img}
          />
        </div>
        <nav className={styles.navBar}>
          
            <ul className={styles.navList}>
              <li>
                <Link href="#projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Resume</a>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <a>Skills</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          
        </nav>
      </header>
    </Fragment>
  );
};

export default Navigation;
