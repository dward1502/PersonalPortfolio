import React, { Fragment } from 'react'
import Image from 'next/image'

import styles from './navigation.module.scss'
import Link from 'next/link'

const Navigation = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Image
              src='/images/dwLogo.png'
              alt='Daniel Ward Logo'
              layout='fill'
              className={styles.img}
            />
          </div>
          <div className={styles.navList}>
            <ul>
              <li>
                <Link href='#'>
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a>Resume</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a>Skills</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}

export default Navigation