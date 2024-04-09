import React from 'react';
import '../assets/styles/Card.css';

const Card = ({ img, name, price }) => {
    return (
      <div className="Card" style={{ width: '18rem', }} >
        <img src={img} className="" alt={name} />
        <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Prix: {price}€</p>
        </div>
      </div>
    );
  }
  
  export default Card;