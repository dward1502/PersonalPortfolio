import React, { Fragment } from 'react'
import Image from 'next/image'
import {FaGlobe, FaYoutube, FaGithub} from 'react-icons/fa'
import styles from '../sass/Home.module.scss'

const projects = () => {
  return (
    <Fragment>
        
        <div className={styles.project}>
            <div className={styles.projectInfoBox}>
              <div className={styles.infoBox}>
                <h1>Title</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloribus iusto expedita molestias nam, ipsa incidunt minima,
                  asperiores culpa nesciunt voluptas distinctio, quidem dolore
                  dolores. Odio animi harum enim, facere aliquam dignissimos
                  vitae!
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                </ul>
                <div className={styles.project_btns}>
                  <div className={styles.linkBtn}>
                    <FaGithub /> <a href='#'>Github</a>
                  </div>
                  <div className={styles.linkBtn}>
                    <FaGlobe />
                    <a href='#'>Live Link</a>
                  </div>
                  <div className={styles.linkBtn}>
                    <FaYoutube />
                    <a href='#'>Walkthrough</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectImageBox}></div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectInfoBox}>
              <div className={styles.infoBox}>
                <h1>Title</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloribus iusto expedita molestias nam, ipsa incidunt minima,
                  asperiores culpa nesciunt voluptas distinctio, quidem dolore
                  dolores. Odio animi harum enim, facere aliquam dignissimos
                  vitae!
                </p>
                <ul className={styles.list}>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto earum sit minima numquam dicta consequuntur quasi?
                  </li>
                </ul>
                <div className={styles.project_btns}>
                  <div className={styles.linkBtn}>
                    <FaGithub /> <a href='#'>Github</a>
                  </div>
                  <div className={styles.linkBtn}>
                    <FaGlobe />
                    <a href='#'>Live Link</a>
                  </div>
                  <div className={styles.linkBtn}>
                    <FaYoutube />
                    <a href='#'>Walkthrough</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectImageBox}>
              <div className={styles.image_1}>
                <Image
                  src={'/images/beach1.jpg'}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className={styles.image_2}>
                <Image
                  src={'/images/beach2.jpg'}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className={styles.image_3}>
                <Image
                  src={'/images/beach3.jpg'}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default projects