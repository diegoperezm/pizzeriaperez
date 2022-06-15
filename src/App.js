import './App.css';
import  NavBar  from './components/NavBar/NavBar'; 
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer'; 
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer'; 
import  Cart  from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="content">
        <CartProvider>
           <BrowserRouter>
              <NavBar />
               <Routes>
                   <Route path='/' element={<ItemListContainer greeting="Bienvenidos" />} />
                   <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos" />}  />
                   <Route path='/item/:productId' element={<ItemDetailContainer />}  />
                   <Route path='/cart/' element={<Cart />}  />
               </Routes>
           </BrowserRouter>
       </CartProvider>
    </div>
  );
}

export default App;
