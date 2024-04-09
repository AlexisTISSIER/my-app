import React from 'react';

const Card = ({ img, name, price }) => {
    return (
      <div className="plat">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p>Prix: {price}€</p>
      </div>
    );
  }
  
  export default Card;