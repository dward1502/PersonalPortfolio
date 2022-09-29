import { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import Navigation from "../components/Navigation/navigation";
import ParallelText from "../components/UI/tools";
import Projects from '../components/Projects/Home_project'
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiHtml5,
  SiCss3,
  SiNpm,
  SiAmazonaws,
  SiMongodb,
  SiPostgresql,
  SiSass,
  SiJest,
} from "react-icons/si";

import Contact from "../components/Contact/Contact";

import Modal from "../components/Modal/modalOverlay";
import styles from "../sass/Home.module.scss";

export default function Home() {
  const [modal, setModal] = useState();

  const aboutModalHandlerNull = () => {
    setModal(null);
  };
  const aboutModalHandler = () => {
    console.log("Initiate Modal");
    setModal(true);
  };

  return (
    <Fragment>
      {modal && <Modal onConfirm={aboutModalHandlerNull} />}
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <div className={styles.image_wrapper}>
          <Navigation />
          <Image
            className={styles.landingImage}
            src={"/images/breakingWave.jpg"}
            alt="Picture of a breaking wave."
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className={styles.hero}>
            <div className={styles.hero_container}>
              <p>Hi there, I am</p>
              <h1>Daniel Ward</h1>
              <p>
                Software engineer specialized in both frontend and backend web
                development
              </p>
            </div>
          </div>
        </div>
        <section className={styles.about}>
          <h1>About</h1>
          <div className={styles.aboutText}>
            <p>
              I am a Fullstack and FrontEnd developer who creates functional and
              beautiful web applications from ideation to deployment.
            </p>
            <p>
              Have a passion to solve problems, with a high attention to detail
              and deliver a working product within deadlines.
            </p>
            <p>
              Good UI / UX is fundamental to user engagement. Connect with me
              today and lets work together to fulfill your needs.
            </p>
            <Link href={'/contact'}>
            <button className={styles.btn}>Contact Me</button>
            </Link>
            
          </div>

          <div></div>
        </section>
        <section className={styles.tools}>
          <ParallelText baseVelocity={-3}>
            <SiCss3 className={styles.icon} />
            <SiGit className={styles.icon} />
            <SiHtml5 className={styles.icon} />
            <SiJavascript className={styles.icon} />
            <SiReact className={styles.icon} />
            <SiNodedotjs className={styles.icon} />
          </ParallelText>
          <ParallelText baseVelocity={3}>
            <SiNpm className={styles.icon} />
            <SiMongodb className={styles.icon} />
            <SiAmazonaws className={styles.icon} />
            <SiSass className={styles.icon} />
            <SiPostgresql className={styles.icon} />
            <SiJest className={styles.icon} />
          </ParallelText>
        </section>
        <section className={styles.projects}>
          <Projects/>
        </section>
        <section className={styles.contact} id="contact">
          <Contact />
        </section>
      </div>
    </Fragment>
  );
}
