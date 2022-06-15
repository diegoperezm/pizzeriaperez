import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(parseInt(initial,10));

  const increment = () => {
      if(quantity < stock ) {
          setQuantity(quantity + 1)
      }
  };

  const decrement = () => {
      if(quantity > 0 ) {
          setQuantity(quantity - 1)
      }
  };

  return (
      <div className="counter">
          <div className="counter--controls">
              <button onClick={decrement}>-</button>
              <p>{quantity}</p>
              <button onClick={increment}>+</button>
          </div>
          <div>
              <button className="counter--button" onClick={() => onAdd(quantity) }>Comprar</button>
          </div>
      </div>
  );


};



export default ItemCount;
