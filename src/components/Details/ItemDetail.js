import { useParams } from "react-router"
import { useState } from "react"
import Contador from "../Contador"

const ItemDetail = ({descripcion}) => {

    //logica para sumar contador carrito
    const [cont, setCont] = useState(0)

    const { id } = useParams();

    //agregar botones
    const COMPRA_FINAL = "finalizarCompra"
    const COMPRA_NO_FINAL = "seguirShopping"

    const [botones, setBotones] = useState(COMPRA_NO_FINAL)

    const navigateTo = (conBotones) => {
        console.log("navigateTo funciona")
        setBotones(conBotones)
    }

    const renderBotones = () => {
        <>
            <button className="agregador-btn">Terminar mi Compra</button>
            <button className="agregador-btn">Cancelar</button>
        </>
    }

    return (
        <>
            <div className="produc-desc" id={id}>
                {descripcion.filter(desc => desc.id.toString() === id).map((desc, index) => (
                    <div key={index}className="full-card">
                        <h2>{desc.name}</h2>
                        <img src={desc.pictureURL} alt="unisex hoodie" id="picture-store"/>
                        <p>{desc.price}</p>
                        <p>{cont}</p>
                        <h4 id="texto-descripcion">{desc.description}</h4>
                        <h5 id="texto-descripcion">Only {desc.stock} units left.</h5>
                        <Contador initial={0} stock={descripcion} miDesc={desc} changeCont={cont => setCont(prevCount => prevCount + cont)} onClick={function() {navigateTo()}} carritoActual={cont} onAdd={function() {console.log("Accion realizada exitosamente")}}/>
                        {botones === COMPRA_FINAL ? renderBotones() : null}
                        {botones === COMPRA_FINAL ? console.log("hoa") : null}
                        {botones === COMPRA_FINAL && renderBotones()}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemDetail
