import { useState, useContext } from 'react'; 
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

function ItemDetail({id,title, description, pictureURL, price, stock}) {
    
    const [quantityAdded, setQuantityAdded]   = useState(0);

    const { addItem } = useContext(CartContext);
   
    const handleOnAdd = quantity => {
        addItem({item: {id, title, price}, quantity: quantity });
        setQuantityAdded(quantity);
    } 

    return (
           <div className="item-detail">
               <h2  className="item-detail--heading">Detalle del producto</h2>
               <img className="item-detail--img" alt={title} src={pictureURL} />
               <div>
                  <p className="item--title">{title}</p>   
                  <p>{description}</p>      
                  <p className="item--price">{price}</p> 
                    { quantityAdded === 0
                        ? <ItemCount stock={stock}  initial="1" onAdd={handleOnAdd} />
                        : <Link to='/cart'>Terminar mi compra</Link>
                    }
                   
               </div>
            </div>
    )
}

export default ItemDetail;

