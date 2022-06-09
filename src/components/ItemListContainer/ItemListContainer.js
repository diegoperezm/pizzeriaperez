import { useState, useEffect} from 'react';
import { getProducts, getProductsByCategory } from'../../asyncmock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading]   = useState(true);
    const { categoryId } = useParams();

    useEffect(()=> {
        setLoading(true);
        if(!categoryId)  {
          getProducts().then(response => setProducts(response))
                       .catch(err => console.log(err))
                       .finally(() => setLoading(false));

        } else {
          getProductsByCategory(categoryId).then(response => setProducts(response))
                                           .catch(err => console.log(err))
                                           .finally(() => setLoading(false));
        }

    },[categoryId]);

    if(loading) {
        return ( <div className="loading">
                     <h2>Cargando ...</h2>
                </div>);
    }

    return (
        <div>
          <h1 className="greeting">{greeting}</h1>
            { products.length > 0
                ? <ItemList  products={products} />
                : <div className="empty"><h2>No hay productos</h2></div>
            }
        </div> 
    );
};

export default ItemListContainer;
