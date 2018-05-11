import React from 'react';
import { Parallax } from 'react-parallax';
import "./Items.css";

const Items = () => {
   return (
      <div className="work-items" id="work-item">
         <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../Images/stars.jpg')}
            bgImageAlt="cloud forest"
            strength={200}
         >
            <div style={{ height: '100vh' }} className="work-items">
               <div className="work-grid-container vertical-center">
                  <div className="work-about">
                     <div className="work-content-wrapper">
                        <h1>Technical Skills</h1>
                        <div className="lead">
                           <ul>
                              <li>ES 2016</li>
                              <li>Node.js</li>
                              <li>MongoDB</li>
                              <li>UX/UI</li>
                              <li>React.js</li>
                              <li>AWS</li>
                              <li>HTML/CSS3</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                
               </div>
            </div>
         </Parallax>
      </div>
   );
};

export default Items;