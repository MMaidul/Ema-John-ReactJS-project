import React from 'react';
import UseProducts from '../../Hooks/UseProducts/UseProducts';

const Orders = () => {
    const [products, setProducts] = UseProducts();
    return (
        <div>
            <h2>This is orders: {products.length}</h2>
        </div>
    );
};

export default Orders;