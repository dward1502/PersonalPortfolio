import './Navbar.css';
import React, { Component } from 'react';

class Navbar extends Component {
   render() {
      return (
         <nav className="navbar">
            <div className="navbar-line">
               <div><img width="40px" src={require('../../Images/dwLogo.png')} alt="React BP" /></div>
               <div><a href="#about">About</a></div>
               <div><a href="#work">Work</a></div>
            </div>
         </nav>
      );
   }
}

export default Navbar;