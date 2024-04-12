

import React from 'react';
import { Container, Row } from 'react-bootstrap'; 
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <Container>
      <Helmet>
        <title>Page Non Trouver</title>
        </Helmet>
      <Row>
        <h1>Page non trouvée</h1> {}
      </Row>
    </Container>
  );
}

export default NotFound;
