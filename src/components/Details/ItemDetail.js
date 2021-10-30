//import ItemList from "../Items/ItemList"

const ItemDetail = ({description, id, pictureURL, price, name}) => {

    return (
        <div className="produc-desc" id={id}>
            <div>
                <h2>{name}</h2>
                <img src={pictureURL} alt="unisex hoodie" id="picture-store"/>
                <p>{price}</p>
                <h4 id="texto-descripcion">{description}</h4>
            </div>
        </div>  
    )
}

export default ItemDetail
