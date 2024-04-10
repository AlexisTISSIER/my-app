import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/Card.css';

const Card = ({ img, name, price, slug }) => { 
  return (
    <Link to={slug}>
      <BootstrapCard className="custom-card">
        <BootstrapCard.Img variant="top" src={img} alt={name} />
        <BootstrapCard.Body>
          <BootstrapCard.Title>{name}</BootstrapCard.Title>
          <BootstrapCard.Text>Prix: {price}€</BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
    </Link>
  );
}

export default Card;
