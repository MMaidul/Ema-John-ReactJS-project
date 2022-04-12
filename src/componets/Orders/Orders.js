import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/UseCart/UseCart';
import UseProducts from '../../Hooks/UseProducts/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.Module.css'

const Orders = () => {
    const [products, setProducts] = UseProducts();
    const [cart, setCart] = useCart(products);
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="products-contain">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to={'/shipment'}>
                            <button>Proceed Shipping</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;