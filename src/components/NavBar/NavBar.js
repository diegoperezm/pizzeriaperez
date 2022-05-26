import pizzaBrand from '../../pizzabrand.png'; 
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <span className="brand" >Pizzería Pérez
               <img  className="pizzaBrand" alt="pizza icon" src={pizzaBrand}/>
            </span>
            <CartWidget />
            <ul className="categories">
               <li><button>Ofertas</button></li> 
               <li><button>Pizzas</button></li>
               <li><button>Adicionales</button></li>
               <li><button>Bebidas</button></li>
               <li><button>Postres</button></li>
            </ul>
        </nav>
    );
}


export default NavBar;
