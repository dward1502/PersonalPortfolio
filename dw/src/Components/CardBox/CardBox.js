import React from 'react';
import '../CardBox/CardBox.css'

const CardBox = props => (
   <div className="card-box" id="work">
      <div className="card-content">
         <main className="card-grid">
            {props.children}
         </main>
      </div>
   </div>
);

export default CardBox;