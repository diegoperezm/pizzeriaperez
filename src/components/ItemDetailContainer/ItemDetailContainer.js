import { useState, useEffect } from 'react';
import  ItemDetail  from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc  } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { productId }  = useParams();
    const [loading, setLoading]   = useState(true);

    useEffect(()=> {
        const docRef = doc(db, 'products', productId);
        getDoc(docRef)
            .then(doc => {
                const producFormatted = { id: doc.id, ...doc.data()}; 
                setProduct(producFormatted);
        }).catch(error => console.log(error))
            .finally(() => setLoading(false) );

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



