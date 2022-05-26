import './App.css';
import  NavBar  from './components/NavBar/NavBar'; 
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer'; 

function App() {
  return (
    <div className="content">
        <NavBar />
        <ItemListContainer greeting="Hola Coders"/>
    </div>
  );
}

export default App;
