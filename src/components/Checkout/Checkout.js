import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import { addDoc, collection  } from 'firebase/firestore';
import { db } from '../../services/firebase/index';

const Checkout  = () =>   {
    const { cart, getCartTotal  } = useContext(CartContext);
    const totalPrice = getCartTotal();

    const [ products, setProducts] = useState({
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
        const collectionRef = collection(db, 'orders')
        addDoc(collectionRef, products).then(({id})=> { console.log(id)} );
    }; 

    
    return (
        <div className="form--container">
            <form className="form--contents" onSubmit={handleSubmit}>
             <label className="form--label">
               First name:
                 <input
                     className="form--input"
                     required
                     type="text"
                     value={products.firstName}
                     name="firstName"
                     onChange={({target}) =>  {
                         setProducts({...products, buyer: { ...products.buyer, firstName: target.value}})}
                      } />
             </label>
             <label className="form--label">
               Last name:
                 <input
                     className="form--input"
                     required
                     type="text"
                     value={products.lastName}
                     name="lastName"
                     onChange={({target}) =>  {
                         setProducts({...products, buyer: { ...products.buyer, lastName: target.value}})}
                      } />
             </label>
             <label className="form--label">
               Email:
                 <input
                     className="form--input"
                     required
                     type="email"
                     value={products.email}
                     name="email"
                     onChange={({target}) =>  {
                         setProducts({...products, buyer: { ...products.buyer, email: target.value}})}
                      } />
             </label>
             <label className="form--label">
                 Phone: 
                 <input
                     className="form--input"
                     required
                     type="text"
                     value={products.phone}
                     name="phone"
                     onChange={({target}) =>  {
                         setProducts({...products, buyer: { ...products.buyer, phone: target.value}})}
                      } />
             </label>
             <label className="form--label">
                 Address: 
                 <input
                     className="form--input"
                     required
                     type="text"
                     value={products.address}
                     name="address"
                 onChange={({target}) =>  {
                         setProducts({...products, buyer: { ...products.buyer, address: target.value}})}
                      } />
             </label>
               <input
                   className="form--submit"
                   type="submit"
                   value="Generar Orden" />
           </form>
        </div>
    );
}



export default Checkout;
