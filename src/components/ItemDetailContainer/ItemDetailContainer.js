import { useState, useEffect } from 'react';
import { getItems } from '../../asyncmock';
import  ItemDetail  from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
 
    /* Solo para mostrar que ItemDetailContainer está funcionando */
    useEffect(()=> {
        getItems('1').then(response => setProduct(response));
    },[]);

    return (
        <div>
            <ItemDetail {...product}   />
        </div> 
    );
};



export default ItemDetailContainer;



