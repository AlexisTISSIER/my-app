import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import '../assets/styles/Card.css';

const Card = ({ img, name, price }) => {
  return (
    <BootstrapCard style={{ width: '18rem' }}>
      <BootstrapCard.Img variant="top" src={img} alt={name} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{name}</BootstrapCard.Title>
        <BootstrapCard.Text>Prix: {price}€</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Card;
