import React from 'react'
import Navigation from '../../components/Navigation/pageNav'
import Image from 'next/image'

import styles from './about.module.scss';

const index = () => {
  return (
    <>
      <Navigation />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Daniel Ward</h1>
          <div className={styles.img}>{/* <Image /> */}</div>
        </div>
        <div className={styles.text}>
          <p>
            During my software development journey, life threw me a major
            curve-ball, my heart began to fail progressively worse in 2019 after
            a heart attack in 2014. I was put on the heart transplant list and
            now am a heart transplant reciepient in June 2021. Since this time
            my life has gotten a second chance and I have learned that no matter
            how great the challenge is in my life, even death, I can overcome
            and persevere through adversity to become a better person. This
            experience has shown to myself that I can adapt and overcome
            roadblocks whether in personal life or career with confidence
            knowing that in the past I had it much worse and continued to fight
            and do better. To push through and have a positive demeanor is
            essential to face head on adversity in the workplace and life.
          </p>
          <p>
            I am an enthusiastic and driven technology enthusiast who works well
            with a team and also feels comfortable leading as well. I love
            learning new processes and procedures in this ever growing software
            technology environment. I have experience in developing full stack
            applications using MERN. I have a good handle on object/functional
            programming in Javascript and solving logical problems. I find that
            I have a passion connecting needs of companies/individuals and
            creating an internet based app/service to help them in their need.{' '}
          </p>
          <p>
            I have worked in Javascript and have a good handle on
            object/functional programming, HTML 5 and CSS3 including SCSS and
            CSS grid. I have an understanding of how to make websites/apps fully
            responsive and integrated with SEO, local/session storage and
            deploying in AWS infrastructure. My experience in backend software
            includes Node.js, MySQL, MongoDB, and a little of python. I am well
            versed in working in Git and understand the logic of working with a
            team utilizing Git.{' '}
          </p>
          <p>
            Applying these lessons in software development I believe is
            essential to be successful. I am very communicative and always
            wanting to learn how to do better in my software development career.{' '}
          </p>
        </div>
      </div>
    </>
  );
}

export default index