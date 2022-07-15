const CheckoutItems = ( {id, title, quantity, price} ) => {
    return(
        <div className="cart--item">
            <span className="cart--item--info">{title}</span>
            <span className="cart--item--info">Cantidad: {quantity}</span>
        </div>
    )
};

export default CheckoutItems;


