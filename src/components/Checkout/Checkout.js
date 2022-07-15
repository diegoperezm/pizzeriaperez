import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import CheckoutForm  from '../CheckoutForm/CheckoutForm';
import CartContext from '../../context/CartContext';
import { addDoc, collection  } from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import CheckoutItems from '../CheckoutItems/CheckoutItems';

const Checkout  = () =>   {
    const { cart, getCartTotal  } = useContext(CartContext);
    const totalPrice = getCartTotal();
    const [ ticket, setTicket] = useState('');

    useEffect(()=> {}, [ticket]); 
       let orderId = Math.floor(Math.random() * 10); 
       let fecha = new Date();
       const [ products, setProducts] = useState({
           id: orderId,
           estado: "generada",
           fecha: fecha, 
           buyer: {
               firstName: ' ',
               lastName: ' ',
               email: ' ',
               phone: ' ',
               address:' '
           },
           items: cart,
           total: totalPrice 
    });
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        if( products.length === 0 ){
            return
        } 
        const collectionRef = collection(db, 'orders')
        addDoc(collectionRef, products).then(({id})=> { setTicket(id)} );
    }; 

    if( cart.length === 0 ) {
        return (
            <div className="cart">
                <Link to='/'>No hay items</Link>
            </div>
        );
     } 

    return (
        <>
            { ticket !== '' ?
              <div className="ticket">
                  <div>
                      <span className="ticket--title">Ticket:</span>
                      <span className="ticket--info">{ticket}</span>
                  </div>
              </div>
               :
              <>
             <CheckoutForm handleSubmit={handleSubmit} products={products} setProducts={setProducts}/>
             <div>
               {cart.map(product => <CheckoutItems key={product.item.id} {...product.item} quantity={product.quantity}/>)}
             </div>
             <div className="checkout--total">
              <span >Total: ${totalPrice}</span>
             </div>
             </>
            }
        </>
    );

}



export default Checkout;
