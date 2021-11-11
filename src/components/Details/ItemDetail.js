import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import Contador from "../Contador"
import { CartContext } from '../context/CartContext';

const ItemDetail = ({descripcion}) => {

    const {items, clear} = useContext(CartContext)

    var arrayItems = [];

    for(var item in items){
        var itemsInCart = items[item];
        arrayItems.push(itemsInCart.item.id);
    }

    //logica para sumar contador carrito
    const [cont, setCont] = useState(0)

    const { id } = useParams();

    //agregar botones
    const COMPRA_FINAL = "finalizarCompra"
    const COMPRA_NO_FINAL = "seguirShopping"

    const [botones, setBotones] = useState(COMPRA_NO_FINAL)

    const navigateTo = (conBotones) => {
        setBotones(conBotones)
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
                        <Contador initial={0} stock={descripcion} miDesc={desc} changeCont={cont => setCont(prevCount => prevCount + cont)} carritoActual={cont} compras={COMPRA_FINAL} funcionBoton={navigateTo} onAdd={function() {console.log("Accion realizada exitosamente")}}/>
                        {botones === COMPRA_FINAL && cont >= 1 ? <div className="aparecen-botones"><Link to='/cart'><button className="agregador-btn terminar-compra terminar-compra-primero">Terminar mi Compra</button></Link><button className="agregador-btn terminar-compra" onClick={() => navigateTo(COMPRA_NO_FINAL)}>Cancelar</button> </div> : null}
                        {botones === COMPRA_NO_FINAL && cont !== 0 ? setCont(0) : null}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemDetail
