import { useContext } from 'react'; 
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';

function ItemDetail({id,title, description, pictureURL, price, stock}) {

    const { addItem } = useContext(CartContext);

    const handleOnAdd = quantity => {
        addItem({item: {id, title, price}, quantity: quantity })
    } 

    return (
           <div className="item-detail">
               <h2  className="item-detail--heading">Detalle del producto</h2>
               <img className="item-detail--img" alt={title} src={pictureURL} />
               <div>
                  <p className="item--title">{title}</p>   
                  <p>{description}</p>      
                  <p className="item--price">{price}</p> 
                   <ItemCount stock={stock}  initial="1" onAdd={handleOnAdd} />
               </div>
            </div>
    )
}

export default ItemDetail;

