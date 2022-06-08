
function ItemDetail({title, description, pictureURL,  price}) {
    return (
           <div className="item-detail">
               <h2  className="item-detail--heading">Detalle del producto</h2>
               <img className="item-detail--img" alt={title} src={pictureURL} />
               <div>
                  <p className="item--title">{title}</p>   
                  <p>{description}</p>      
                  <p className="item--price">{price}</p> 
               </div>
            </div>
    )
}

export default ItemDetail;

