import { CartContext } from "./context/CartContext"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

const Cart = () => {

    const [cart, addItem, removeItem, clear, cont, setCont, details, setDetails, price, setPrice] = useContext(CartContext)

    const carritoLleno = cart.map((item, index) => (
        <div className="container-background">
            <div className="carrito-container">
                <div key={index} className="carrito-product">
                    <img src={item.image} alt="" id="imagen-carrito"/>
                    <h1>{item.title}</h1>
                    <p>Precio: {item.price} {setPrice(item.price)}</p>
                    <h3>Cantidad: {item.quantity}</h3>
                    <p>Total: ${Math.round((Number((item.price).substring(1)) * (item.quantity) + Number.EPSILON) * 100) / 100}</p>
                    <button onClick={() => {removeItem(item.id)}} id="eliminar-cart">Eliminar</button>
                </div>
            </div>  
        </div>
    ))


    const carritoVacio = () => {
        return (
            <div>
                <h1 id="carrito-vacio">Carrito Vacio</h1>
                <Link to="/"><button className="agregador-btn terminar-compra" id="boton-volver">Ver Articulos</button></Link>
            </div>
        )
    }


    
    return (
        <div>
           {cart.length > 0 ? carritoLleno : carritoVacio()}
        </div>
    )
}

export default Cart