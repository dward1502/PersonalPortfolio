import React from 'react';
import Navigation from '../../components/Navigation/pageNav';
import Footer from '../../components/Footer/footer'

import styles from './projects.module.scss';

const index = () => {
  return (
    <>
      <Navigation />
      <div className={styles.project_content}>
        <h1>Projects</h1>
        <div className={styles.cards}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </>
  );
};

export default index;
