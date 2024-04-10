import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/Card';

const Home = () => {
  const dishes = [
    {
      slug: "/plat/tacos-a-l-unite",
      price: "3",
      name: "Tacos à l’unité",
      img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true 
    },
    {
      slug: "/plat/enchiladas",
      price: "12",
      name: "Enchiladas",
      img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false
    },
    {
      slug: "/plat/mole-poblano",
      price: "15",
      name: "Mole poblano",
      img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false
    }
  ];
  

  return (
    <div>
      <Container>
        <Row>
          {dishes.map((dish) => (
            <Col key={dish.slug}>
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