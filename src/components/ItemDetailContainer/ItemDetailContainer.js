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
                if (!producFormatted.hasOwnProperty('description')) {
                    return;
                }
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
                : <div className="empty"><h2>El producto no existe</h2></div>
            }
        </div>
    );
};



export default ItemDetailContainer;


/*
{
    "id": "o2QweqWpd6lDgkMAoV96",
    "description": "pizza con tomate, mozzarella, albahaca fresca.",
    "category": "pizzas",
    "title": "Pizza Margarita",
    "price": 4.99,
    "pictureURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/320px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    "stock": 10
}
*/
