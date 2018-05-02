import React from 'react';
import { Parallax } from 'react-parallax';
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
                           <img src='' alt="personal" />
                     </div>
                     <div className='about-about'>
                        <div className='about-content-wrapper'>
                           <h3>About Me</h3>
                           <h1>Daniel Ward</h1>
                           <p className='lead'>Wench lad jolly boat Sail ho tack brig overhaul scuttle quarterdeck come about code of conduct marooned rigging boatswain fluke fire ship bowsprit transom Blimey Jolly Roger Plate Fleet parrel knave smartly.   
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