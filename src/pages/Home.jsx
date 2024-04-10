import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link to="/plat/tacos-a-l-unite">
              <Card
                price="3"
                name="Tacos à l’unité"
                img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              />
            </Link>
          </Col>
          <Col>
            <Link to="/plat/enchiladas">
              <Card
                price="12"
                name="Enchiladas"
                img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              />
            </Link>
          </Col>
          <Col>
            <Link to="/plat/mole-poblano">
              <Card
                price="15"
                name="Mole poblano"
                img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
