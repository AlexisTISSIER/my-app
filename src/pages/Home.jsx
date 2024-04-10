import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from '../components/Card';

const Home = () => {
  const [showNewOnly, setShowNewOnly] = useState(false);

  const dishes = [
    {
      slug: "tacos-a-l-unite",
      price: 3,
      name: "Tacos à l’unité",
      img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true 
    },
    {
      slug: "enchiladas",
      price: 12,
      name: "Enchiladas",
      img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false
    },
    {
      slug: "mole-poblano",
      price: 15,
      name: "Mole poblano",
      img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false
    }
  ];

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