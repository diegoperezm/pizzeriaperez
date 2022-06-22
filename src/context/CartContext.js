import { useState, createContext  } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]); 

 const sumCartQuantity = arr =>  {
     if(arr.length === 0) return 0;
     const [first, ...rest] = arr;
     return first.quantity +  sumCartQuantity(rest);
 } 
 const sumCartTotal = arr =>  {
     if(arr.length === 0) return 0;
     const [first, ...rest] = arr;
     return (first.quantity * first.item.price ) +  sumCartTotal(rest);
 } 
 
 const getCartQuantity = () => sumCartQuantity(cart);

 const getCartTotal    = () => sumCartTotal(cart);

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
 

 const clearCart = () => {
   setCart([]);  
 };   

 const isInCart = (id) => {
     return cart.some(prod => prod.item.id === id);
 };   

 return (
     <CartContext.Provider value={{cart, getCartQuantity, getCartTotal, addItem, removeItem, clearCart, isInCart}}>
           { children }
       </CartContext.Provider>
 );

} 

export default CartContext;
