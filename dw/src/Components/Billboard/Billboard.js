import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './Billboard.css';

class Billboard extends Component {
   render() {
      return (
         <div className="billboard" id="billboard">
            <Parallax
               blur={0}
               /*  bgImage={ # }
                bgImageAlt=" # " */
               strength={200}
            >
               <div style={{ height: '100vh' }} >
                  <div className="billboard-box">
                     <img width="250px" alt="React BP" src={require("../../Images/dwLogo.png")} />
                     <h1 className="display">Looking for a Web Developer?</h1>
                     <p className="lead">Look no further, I am an enthusiastic and self driven learner.</p>
                  </div>
               </div>
            </Parallax>
         </div>
      );
   }
}

export default Billboard;