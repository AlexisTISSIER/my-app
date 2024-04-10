import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/Card.css';
import { Badge } from 'react-bootstrap';

const Card = ({ img, name, price, slug, isNew }) => { 
  return (
    <Link to={'plat/'+slug}>
      <BootstrapCard className="custom-card">
        {isNew && <Badge variant="info" className="badge-new">Nouveau</Badge>}  
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