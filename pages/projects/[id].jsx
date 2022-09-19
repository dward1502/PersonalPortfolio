import React from 'react';
import Navigation from '../../components/Navigation/pageNav';
import Image from 'next/image';

import { projects } from '../../data/projects';
import styles from './projects.module.scss';

const SpecificProjectPage = ({ projectInfo }) => {
  return (
    <>
      <Navigation />
      <div className={styles.content}>
        <h1 className={styles.title}>{projectInfo.title}</h1>
        <section className={styles.info}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              magnam obcaecati labore delectus accusantium consequatur velit
              incidunt laudantium, repellendus maiores porro mollitia nihil
              soluta voluptates aperiam optio error tempore vel nemo quos?
              Sapiente eos voluptas pariatur molestias. Aliquam vero explicabo
              perferendis delectus velit beatae maiores dolores nam. Libero,
              quidem recusandae.
            </p>
            <ul>
              <li>Information of project in bullet points</li>
              <li>Information of project in bullet points</li>
              <li>Information of project in bullet points</li>
            </ul>
          </div>
          <div className={styles.tech}>
            <h3>Technologies Used</h3>
            <div className={styles.techList}>
              <div className={styles.techBox}>HTML</div>
            </div>
            <div className={styles.links}>
              <a href='#'>Live link</a>
              <a href='#'>Github</a>
            </div>
          </div>
        </section>
        <section className={styles.deviceImages}>
          <div className={styles.desktopImage}>
            <div className={styles.imageBoxDesk}>
              <Image
                src={'/images/psarHomepage.png'}
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
                src={'/images/psar_phone.png'}
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
              src={'/images/psar_home_full.png'}
              alt='Picture of a breaking wave.'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className={styles.pagesBox}>
            <Image
              className={styles.img}
              src={'/images/psar_join_full.png'}
              alt='Picture of a breaking wave.'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className={styles.pagesBox}>
            <Image
              className={styles.img}
              src={'/images/psar_crmls_full.png'}
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
