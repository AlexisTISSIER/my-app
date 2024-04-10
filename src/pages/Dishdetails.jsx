import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import dishesData from '../datas/dishes.json';
import NotFound from './NotFound';
import '../assets/styles/Card.css';


const Dishdetails = ({ addToCart }) => {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);
  const handleAddToCart = () => {
    addToCart(dish);
  };

  useEffect(() => {
    const selectedDish = dishesData.find(dish => dish.slug === slug);
    setDish(selectedDish);
  }, [slug]); 


  return (
    <Container>
      <Row>
        {dish ? (
          <>
          <div className="dishdetails">
          <div>
            <h1>{dish.name}</h1>
            <p>Prix: {dish.price}€</p>
            <p>{dish.description}</p>
            <Button onClick={handleAddToCart}>Ajouter au panier</Button>
          </div>
          <div>
            <img src={dish.img} alt={dish.name} />
          </div>
          </div>
          </>
          ) : (
             < NotFound />)}
      </Row>
    </Container>
  );
}

export default Dishdetails;
