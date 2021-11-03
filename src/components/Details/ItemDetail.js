import { useParams } from "react-router"
import Contador from "../Contador"

const ItemDetail = ({descripcion}) => {

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
                        <h5 id="texto-descripcion">Only {desc.stock} units left.</h5>
                        <Contador initial={0} stock={descripcion} onAdd={function() {console.log("Accion realizada exitosamente")}}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemDetail
