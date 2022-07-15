import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/' className="brand" >Pizzería Pérez
               <img  className="pizzaBrand" alt="pizza icon" src="/images/pizzabrand.png"/>
            </Link>
            <CartWidget />
            <ul className="categories">
               <li><NavLink to="/category/ofertas" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Ofertas</NavLink></li> 
               <li><NavLink to="/category/pizzas" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Pizzas</NavLink></li>
               <li><NavLink to="/category/adicionales" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Adicionales</NavLink></li>
               <li><NavLink to="/category/bebidas" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Bebidas</NavLink></li>
               <li><NavLink to="/category/postres" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Postres</NavLink></li>
            </ul>
        </nav>
    );
}


export default NavBar;
