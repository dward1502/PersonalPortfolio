import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.scss";

const pageNav = () => {
  return (
    <>
      <header className={styles.headerPage}>
        <div className={styles.logoPage}>
          <Link href="/">
            <a>
              <Image
                src="/images/dwLogoWhite.png"
                alt="Daniel Ward Logo"
                layout="fill"
                className={styles.img}
              />
            </a>
          </Link>
        </div>
        <nav className={styles.navBarPage}>
          <ul className={styles.navList}>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#skills">
                <a>My Skills</a>
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
    </>
  );
};

export default pageNav;
