import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
} from "react-icons/fa";

import styles from "./navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
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
        <nav className={styles.navBar}>
          <ul className={styles.navListVert}>
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
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.social}>
          <a
            href="https://github.com/dward1502"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color={"#fff"} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-ward-1502/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color={"#fff"} />
          </a>
          <a
            href="https://codepen.io/dward1502"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen size={30} color={"#fff"} />
          </a>
        </div>
      </header>
    </>
  );
};

export default Navigation;
