const Item = ( {title, description, price, pictureURL} ) => {
    return (
        <li className="item">
            <img className="item--img" alt={title} src={pictureURL} />
            <p className="item--title">{title}</p>   
            <p className="item--description">{description}</p>      
            <p className="item--price">{price}</p> 
        </li>
    )
}

export default Item;
