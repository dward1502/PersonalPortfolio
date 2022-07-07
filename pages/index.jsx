import Head from 'next/head';
import Image from 'next/image';

import styles from '../sass/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.image_wrapper}>
        <Image
          src="/images/breakingWave.jpg"
          layout="fill"
          className={styles.image}
        />
      </div>
      <h1 className={styles.info}>Portfolio</h1>
      <section className={styles.projectSection}>
        This is the section for projects
      </section>
    </div>
  )
}