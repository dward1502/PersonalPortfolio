import React, { Component } from 'react';
import "./DotNav.css";

class Dotnav extends Component {
   render() {
      return (
         <div className="dot-nav">
            <ul className="vertical-center">
               <li><a href="./">
                  <svg width="7" id="dot" data-name="dot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.88 25.88">
                     <title>dot</title>
                     <circle cx="12.94" cy="12.94" r="12.94" fill="#fff" />
                  </svg>
               </a></li>
               <li><a href="#about">
                  <svg width="7" id="dot" data-name="dot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.88 25.88">
                     <title>dot</title>
                     <circle cx="12.94" cy="12.94" r="12.94" fill="#fff" />
                  </svg>
               </a></li>
               <li><a href="#work">
                  <svg width="7" id="dot" data-name="dot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.88 25.88">
                     <title>dot</title>
                     <circle cx="12.94" cy="12.94" r="12.94" fill="#fff" />
                  </svg>
               </a></li>
            </ul>
         </div>
      );
   }
}

export default Dotnav;