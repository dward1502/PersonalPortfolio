import React from 'react';
import Navigation from '../../components/Navigation/pageNav';
import Image from 'next/image';

import { projects } from '../../data/projects';
import styles from './projects.module.scss';

const SpecificProjectPage = ({ projectInfo }) => {
  const img = projectInfo.image;
  const images = projectInfo.projectImages;

  return (
    <>
      <Navigation />
      <div className={styles.content}>
        <h1 className={styles.title}>{projectInfo.title}</h1>
        <section className={styles.info}>
          <div className={styles.description}>
            <p>{projectInfo.description}</p>
            <ul>
              {projectInfo.info.map((text, key) => {
                return <li key={key}>{text}</li>;
              })}
            </ul>
          </div>
          <div className={styles.tech}>
            <h3>Technologies Used</h3>
            <div className={styles.techList}>
              {projectInfo.tech.map((tech, key) => {
                return (
                  <div className={styles.techBox} key={key}>
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className={styles.links}>
              <a href={projectInfo.link}>Live link</a>
              <a href='#'>Github</a>
            </div>
          </div>
        </section>
        <section className={styles.deviceImages}>
          <div className={styles.desktopImage}>
            <div className={styles.imageBoxDesk}>
              <Image
                src={img}
                alt='Picture of a breaking wave.'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
          </div>
          <div className={styles.mobileImage}>
            <div className={styles.imageBoxMobile}>
              <Image
                className={styles.img}
                src={images[0]}
                alt='Picture of a breaking wave.'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
          </div>
        </section>
        <section className={styles.pages}>
          <div className={styles.pagesBox}>
            <Image
              className={styles.img}
              src={images[1]}
              alt='Picture of a breaking wave.'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className={styles.pagesBox}>
            <Image
              className={styles.img}
              src={images[2]}
              alt='Picture of a breaking wave.'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className={styles.pagesBox}>
            <Image
              className={styles.img}
              src={images[3]}
              alt='Picture of a breaking wave.'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const project = projects.filter((p) => p.id === params.id);

  return {
    props: {
      projectInfo: project[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));
  return { paths, fallback: false };
};

export default SpecificProjectPage;
