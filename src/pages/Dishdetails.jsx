import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import dishesData from '../datas/dishes.json';
import NotFound from './NotFound';
import { CartContext } from "../utils/context/CartContext.jsx";

const Dishdetails = () => {
  const { slug } = useParams();
  const { addToCart } = useContext(CartContext);

  console.log("Slug actuel :", slug);

  const selectedDish = dishesData.find(dish => dish.slug === slug);

  console.log("Plat sélectionné :", selectedDish);

  const handleAddToCart = () => {
    if (selectedDish) {
      addToCart(selectedDish);
    }
  };

  return (
    <Container>
      <Row>
        {selectedDish ? (
          <>
            <div className="dishdetails">
              <div>
                <h1>{selectedDish.name}</h1>
                <p>Prix: {selectedDish.price}€</p>
                <p>{selectedDish.description}</p>
                <Button variant="primary" onClick={handleAddToCart} className="mb-3"> 
                  Ajouter au panier
                </Button>
              </div>
              <div>
                <img src={selectedDish.img} alt={selectedDish.name} />
              </div>
            </div>
          </>
        ) : (
          <NotFound />
        )}
      </Row>
    </Container>
  );
}

export default Dishdetails;
