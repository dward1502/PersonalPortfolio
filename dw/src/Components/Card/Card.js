import React from "react";
import "./Card.css";


const Card = props => (
   <div className="card" id={props.id}>
      <img src={props.img} alt={props.alt} />
      <div className="text">
         <h3>{props.title}</h3>
         <p>{props.desc}</p>
         <div>

         </div>
         <div className='hero'>
            <a href={props.herokuLink} target='_blank' rel="noopener noreferrer">{props.herbutton}</a>
         </div>
         <div className='git'>
            <a href={props.githubLink} target='_blank' rel="noopener noreferrer">{props.gitbutton}</a>
         </div>
      </div>
   </div>
);

export default Card;
