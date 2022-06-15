import { useState, createContext  } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]); 

 const addItem = (product) => {
   if(!isInCart(product.item.id)) {
      setCart([...cart, product]);
   } 

   if(isInCart(product.item.id)) {
     const cartWithoutItem     = cart.filter(prod => prod.item.id !== product.item.id);
     setCart([...cartWithoutItem, product]);
   } 
 };   

 const removeItem = (id) => {
   const cartWithoutItem = cart.filter(prod => prod.item.id !== id);
   setCart(cartWithoutItem);  
 };  
 

 const clear = () => {
   setCart([]);  
 };   

 const isInCart = (id) => {
     return cart.some(prod => prod.item.id === id);
 };   

 return (
       <CartContext.Provider value={{addItem, removeItem, clear, isInCart}}>
           { children }
       </CartContext.Provider>
 );

} 

export default CartContext;
