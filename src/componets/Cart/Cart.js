import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(props);
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + Number(tax);
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price:${total} </p>
            <p>Total Shipping:${shipping} </p>
            <p>Tax:${tax}</p>
            <h4>Grand Total:${grandTotal}</h4>
            {props.children}
        </div>
    );
};

export default Cart;