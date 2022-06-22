import { Link } from 'react-router-dom';

const Item = ( {id, title, description, price, pictureURL} ) => {
    return (
        <li className="item">
            <img className="item--img" alt={title} src={pictureURL} />
            <p className="item--title">{title}</p>   
            <p className="item--description">{description}</p>      
            <p className="item--price">${price}</p> 
            <Link to={`/item/${id}`}>Ver Detalle</Link>
        </li>
    )
}

export default Item;
