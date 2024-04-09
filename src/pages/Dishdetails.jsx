

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
const Dishdetails = () => {
  const { slug } = useParams();
  return (
    <Container>
      <Row>
        <h1>{slug}</h1> {}
      </Row>
    </Container>
  );
}

export default Dishdetails;
