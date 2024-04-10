import React from 'react';
import { Card as BootstrapCard, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/Card.css';



const Card = ({ img, name, price, slug, isNew }) => { 
  return (
    <Link to={'plat/'+slug}>
      <BootstrapCard className="custom-card">
        {isNew && <Badge className="badge-new" variant="info">Nouveau</Badge>}
        <BootstrapCard.Img variant="top" src={img} alt={name} />
        <BootstrapCard.Body>
          <BootstrapCard.Title className="text">{name}</BootstrapCard.Title>
          <BootstrapCard.Text className="text">Prix: {price}€</BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
    </Link>
  );
}

export default Card;
