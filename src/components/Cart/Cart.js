import { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = ()  => {
    const { cart, getCartQuantity, getCartTotal, clearCart  } = useContext(CartContext);
    const  totalPrice  = getCartTotal(); 
    
    if(getCartQuantity() === 0)  {
        return (
            <div className="cart">
                <h2 className="cart">CART</h2>
                <Link to='/'>No hay items</Link>
            </div>
        ); 
    } 

    return (
          <div className="cart">
              <h2>CART</h2>
              {cart.map(product => <CartItem key={product.item.id} {...product.item} quantity={product.quantity}/>)}
              <span className="cart--total">Total: ${totalPrice}</span>
              <div>
                 <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
                 <Link className="checkout--button" to='/checkout'>Generar Orden</Link>
              </div>
          </div>
    );
}

export default Cart;
