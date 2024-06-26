import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { CartContext } from '../utils/context/CartContext';
import useTotalCartAmount from '../utils/hook/useTotalCartAmount';
import useTotalItemsInCart from '../utils/hook/useTotalItemInCart';
import { Helmet } from 'react-helmet-async';

const Cart = () => {
    const { cart } = useContext(CartContext);
    const totalAmount = useTotalCartAmount(cart);
    const totalItemsInCart = useTotalItemsInCart(cart);

    const columns = cart.map((item, index) => (
        <td key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Prix: {item.price}€</p>
            <p>Quantité: {item.quantity}</p>
            <p>Prix total: {item.price * item.quantity}€</p>
        </td>
    ));

    return (
        <Container>
            <Helmet>
                <title>Panier - Mexican Food</title>
            </Helmet>
            <h1>Panier</h1>
            <p>Total Panier : {totalAmount}€</p>
            <p>Objet dans le panier : {totalItemsInCart}  </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {cart.map((item, index) => (
                            <th key={index}>{item.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {columns}
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Cart;
