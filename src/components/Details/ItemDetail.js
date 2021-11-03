//import ItemList from "../Items/ItemList"
import { useParams } from "react-router"

const ItemDetail = ({descripcion}) => {

    console.log(descripcion)
    const { id } = useParams();

    return (
        <>
            <div className="produc-desc" id={id}>
                {descripcion.filter(desc => desc.id.toString() === id).map((desc, index) => (
                    <div key={index}className="full-card">
                        <h2>{desc.name}</h2>
                        <img src={desc.pictureURL} alt="unisex hoodie" id="picture-store"/>
                        <p>{desc.price}</p>
                        <h4 id="texto-descripcion">{desc.description}</h4>
                    </div>
                ))}

                {/* <h2>{name}</h2>
                <img src={pictureURL} alt="unisex hoodie" id="picture-store"/>
                <p>{price}</p>
                <h4 id="texto-descripcion">{description}</h4> 
                */}
            </div>
        </>
    )
}

export default ItemDetail
