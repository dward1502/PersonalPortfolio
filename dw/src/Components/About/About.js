import React from 'react';
import { Parallax } from 'react-parallax';
import img from '../../Images/woodProfilepic.png';
import "./About.css";

const About = () => {
   return (
      <div className="about-items">
         <Parallax 
            blur={{min:-15, max: 15}}
            bgImage={require('../../Images/obSunset.jpg')}
            bgImageAlt='cloud forest'
            strength={200}>
            <div style={{height: '100vh'}} className='about-items' id='about'>
               <div className='vertical-center'>
                  <div className='about-grid-container'>
                     <div className='about-image'>
                           <img src={img} alt="personal" />
                     </div>
                     <div className='about-about'>
                        <div className='about-content-wrapper'>
                              <h3>Daniel Ward</h3>
                           <h1>About Me</h1>
                              <p className='lead'>I find that I have a passion for connecting needs of companies/individuals and creating an internet based app/service to help them in their need. I love internet technologies and learning new methods everyday. I have experience in developing full stack applications. I work in Javascript and have a good handle on object/functional programming, HTML 5 and CSS3 including SASS and CSS grid. I understand how to make websites/apps fully responsive and integrated with SEO, local/session storage and deploying in an AWS infrastructure.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Parallax>
      </div>
   );
};


export default About;