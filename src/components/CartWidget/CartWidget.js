import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getCartQuantity }  = useContext(CartContext);
    const cartQuantity = getCartQuantity(); 

    return (
        <span className="cartWidget">
            <img className="cartIcon" alt="cart icon" src="/images/carticon.jpg"/>
            <span className="cartWidget--quantity">{cartQuantity}</span>
           <Link to='/cart' className="cart--button">Mi compra</Link>
        </span>)
};

export default CartWidget;
