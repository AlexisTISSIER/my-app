import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from '../components/Card';
import dishesData from '../datas/dishes.json';

const Home = () => {
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    setDishes(dishesData);
  }, []);

  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
  };

  const filteredDishes = showNewOnly ? dishes.filter(dish => dish.isNew) : dishes;

  return (
    <div>
      <Container>
        <Button onClick={handleShowNewOnly} className="mb-3">
          {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
        </Button>
        <Row>
          {filteredDishes.map((dish, index) => (
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