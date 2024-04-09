
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card'; 
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <NavLink to="/plat/tacos-a-l-unite"> {}
            <Card
              price="3"
              name="Tacos à l’unité"
              img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            />
          </NavLink>
        </Col>
        <Col>
          <NavLink to="/plat/enchiladas"> {}
            <Card
              price="12"
              name="Enchiladas"
              img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
            />
          </NavLink>
        </Col>
        <Col>
          <NavLink to="/plat/mole-poblano"> {}
            <Card
              price="15"
              name="Mole poblano"
              img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
            />
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
