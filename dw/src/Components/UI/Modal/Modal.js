import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
class modal extends Component {

   render() {
      return (
         <div>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            {this.props.show && (
               <div className='Modal'
                  style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100)', opactity: this.props.show ? '1' : '0' }}>
                  <div className='work-about'>
                     <div className='work-content-wrapper'>
                        <h1>{this.props.item}</h1>
                        <p className='lead'>

                        </p>
                     </div>
                  </div>
                  <div className='work-image'>
                     <img src={this.props.img} alt={this.props.imgInfo}/>
                  </div>
                  <a className="gitLink" href={this.props.githubLink}>Link to Github</a>
                  <a className="herokuLink" href={this.props.herokuLink}>Link to Heroku</a>
               </div>
            )}
         </div>
      );
   }
};

export default modal;