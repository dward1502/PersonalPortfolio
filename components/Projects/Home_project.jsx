import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './projects.module.scss';

import {projects} from '../../data/projects';

const Home_project = () => {
  const info = projects;

  return (
    <Fragment>
      {info.map((project, i) => {
        return (
          <div className={styles.project_cont} key={i}>
            <div className={styles.textBox}>
              <h1>{project.title}</h1>
              <p>Description</p>
              <Link href={project.route}>
                <button className={styles.btn}>More Details</button>
              </Link>
              <h3>Technologies</h3>
              <div className={styles.tech}>
                {project.tech.map((text,i)=>{
                  return <div className={styles.techBox} key={i}>{text}</div>;
                })}
              </div>
            </div>
            <div className={styles.img_box}>
              <Image
                src={project.image}
                alt={`Picture of home page ${project.title}`}
                layout='fill'
                objectFit='cover'
                // objectPosition='center'
              />
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Home_project;
