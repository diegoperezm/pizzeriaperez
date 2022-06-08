import './App.css';
import  NavBar  from './components/NavBar/NavBar'; 
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer'; 
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer'; 

function App() {
  return (
    <div className="content">
        <NavBar />
        <ItemListContainer greeting="Hola Coders"/>
        {/* Solo para mostrar que ItemDetailContainer está funcionando */}
        <ItemDetailContainer />
    </div>
  );
}

export default App;
