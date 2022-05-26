import cartIcon from '../../carticon.jpg'; 

const CartWidget = () => {
    return (
        <span className="cartWidget">
            <img className="cartIcon" alt="cart icon" src={cartIcon}/>
            <button>Mi compra</button>
        </span>)
};

export default CartWidget;
