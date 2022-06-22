import { useContext } from 'react';
import CartContext from  '../../context/CartContext';

const CartItem = ( {id, title, quantity, price} ) => {
    const { removeItem } = useContext(CartContext);
    const subTotal  = quantity * price;
    const handleRemove = id => { removeItem(id) } ;
    return(
        <div className="cart--item">
            <span className="cart--item--info">{title}</span>
            <span className="cart--item--info">Cantidad: {quantity}</span>
            <span className="cart--item--info">Precio:   ${price}</span>
            <span className="cart--item--info">Subtotal: ${subTotal}</span>
            <button  className="cart--item--button" onClick={() => handleRemove(id)} >Eliminar</button>
        </div>
    )
};

export default CartItem;
