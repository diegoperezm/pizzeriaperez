import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncmock';
import  ItemDetail  from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { productId }  = useParams();
    const [loading, setLoading]   = useState(true);

    useEffect(()=> {
        getProductById(productId).then(response => setProduct(response))
                                 .catch(err=> console.log(err))
                                 .finally( () => setLoading(false));
    },[productId]);

    if(loading) {
        return ( <div className="loading">
                     <h2>Cargando ...</h2>
                </div>);
    }
 
    return (
        <div>
            { product
                ? <ItemDetail {...product}   />
                : <div className="empty"><h2>No hay productos</h2></div>
            }
        </div>
    );
};



export default ItemDetailContainer;



