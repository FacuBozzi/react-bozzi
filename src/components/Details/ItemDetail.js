import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import Contador from "../Contador"
import { CartContext } from '../context/CartContext';

const ItemDetail = ({descripcion}) => {

    //contexto pasado para el componente
    const [cart, addItem, removeItem, clear, cont, setCont, details, setDetails, price, setPrice, datos, setDatos] = useContext(CartContext)

    const { id } = useParams();

    //agregar botones
    const COMPRA_FINAL = "finalizarCompra"
    const COMPRA_NO_FINAL = "seguirShopping"

    const [botones, setBotones] = useState(COMPRA_NO_FINAL)

    const navigateTo = (conBotones) => {
        setBotones(conBotones)
    }

    //funcion de context para agregar al carrito cuando el usuario clickee "terminar compra"
    const addToCart = () => {
        datos.filter(desc => desc.id.toString() === id).map((desc) => {
            addItem({cantidad: cont, id: desc.id, title: desc.name,price: desc.price, image: desc.pictureURL, descripcion: desc.description})
        })
    }

    console.log(datos)


    return (
        <>
            <div className="produc-desc" id={id}>
                {datos.filter(desc => desc.id.toString() === id).map((desc, index) => (
                    <div key={index}className="full-card">
                        <h2>{desc.name}</h2>
                        <img src={desc.pictureURL} alt="unisex hoodie" id="picture-store"/>
                        <p>{desc.price}</p>
                        <h4 id="texto-descripcion">{desc.description}</h4>
                        <h5 id="texto-descripcion">Only {desc.stock} units left.</h5>
                        <Contador initial={0} stock={datos} miDesc={desc} changeCont={(cont) => setCont(prevCount => prevCount + cont)} carritoActual={cont} compras={COMPRA_FINAL} agregarCarrito={addItem} desc={desc} funcionBoton={navigateTo} onAdd={function() {console.log("Accion realizada exitosamente")}}/>
                        {botones === COMPRA_FINAL && cont >= 1 ? <div className="aparecen-botones"><Link to='/cart'><button className="agregador-btn terminar-compra terminar-compra-primero" onClick={addToCart}>Terminar mi Compra</button></Link><button className="agregador-btn terminar-compra" onClick={clear}>Vaciar Carrito</button><button className="agregador-btn terminar-compra" onClick={() => navigateTo(COMPRA_NO_FINAL)}>Cancelar</button> </div> : null}
                        {botones === COMPRA_NO_FINAL && cont !== 0 ? () => setCont(0) : null}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemDetail
