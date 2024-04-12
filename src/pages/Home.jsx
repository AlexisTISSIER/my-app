import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from '../components/Card';
import dishesData from '../datas/dishes.json';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const filteredDishes = showNewOnly ? dishesData.filter(dish => dish.isNew) : dishesData;
    setDishes(filteredDishes);
  }, [showNewOnly]);

  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
  };

  

  return (
    <div>
      <Container>
        <Helmet>
        <title>Accueil - Mexican Food</title>
        </Helmet>
        <Button onClick={handleShowNewOnly} className="mb-3">
          {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
        </Button>
        <Row>
          {dishes.map((dish, index) => (
            <Col key={index}>
              <Card
                slug={dish.slug}
                price={dish.price}
                name={dish.name}
                img={dish.img}
                isNew={dish.isNew}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
