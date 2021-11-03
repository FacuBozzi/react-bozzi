import { Link } from "react-router-dom"
import { useParams } from "react-router"

const Item = ({id, name, stock, price, pictureURL}) => {

    let miId = {id}
    miId = useParams()

    return (
        <>
            {<div className="producto-lista card" id={id}>
              <h2>{name}</h2>
              <img src={pictureURL} alt="unisex hoodie" id="picture-store"/>
              <p>Only {price} for the next 24 hours</p>
              <p>{stock} units left</p>
              <button className="product-add-button"><Link to={`/item/${id}`} className="route-link">view details</Link></button>
            </div>  }
        </>
    )
}

export default Item
