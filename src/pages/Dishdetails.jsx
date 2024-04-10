import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import dishesData from '../datas/dishes.json';
import NotFound from './NotFound';


const Dishdetails = () => {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const selectedDish = dishesData.find(dish => dish.slug === slug);
    setDish(selectedDish);
  }, [slug]); 


  return (
    <Container>
      <Row>
        {dish ? (
          <>
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>
          </>
          ) : (
             < NotFound />)}
      </Row>
    </Container>
  );
}

export default Dishdetails;
