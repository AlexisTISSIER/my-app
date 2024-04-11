import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { CartContext } from '../utils/context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

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
            <h1>Panier</h1>
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
