import { useContext } from 'react';
import CartContext from '../../context/CartContext';

import cartIcon from '../../carticon.jpg'; 

const CartWidget = () => {
    const { getCartQuantity }  = useContext(CartContext);
    const cartQuantity = getCartQuantity(); 

    if(cartQuantity === 0) {
        return (<span className="cartWidget"></span>) 
    }
    
    return (
        <span className="cartWidget">
            <img className="cartIcon" alt="cart icon" src={cartIcon}/>
            <span className="cartWidget--quantity">{cartQuantity}</span>
            <button>Mi compra</button>
        </span>)
};

export default CartWidget;
