import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Order Summery</h1>
            <p>Selected Items: {cart.length} </p>
        </div>
    );
};

export default Cart;