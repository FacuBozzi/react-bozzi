import { CartContext } from "./context/CartContext"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

const Cart = () => {

    const [cart, addItem, removeItem, clear, cont, setCont, details, setDetails, price, setPrice] = useContext(CartContext)

    console.log("ENELCARRITO",cart)
    const carritoLleno = cart.map((item, index) => (
        <div className="container-background">
            <div className="carrito-container">
                <div key={index} className="carrito-product">
                    <img src={item.pictureURL} alt="" id="imagen-carrito"/>
                    <h1>{item.title}</h1>
                    <p>Precio: {item.price} {setPrice(item.price)}</p>
                    <h3>Cantidad: {item.quantity}</h3>
                    <p>Total: ${Math.round((Number((item.price).substring(1)) * (item.quantity) + Number.EPSILON) * 100) / 100}</p>
                    <button onClick={() => {removeItem(item.id)}}>Eliminar</button>
                </div>
            </div>  
        </div>
    ))

    console.log(price)

    const carritoVacio = () => {
        return (
            <div>
                <h1 id="carrito-vacio">Carrito Vacio</h1>
                <Link to="/"><button className="agregador-btn terminar-compra" id="boton-volver">Ver Articulos</button></Link>
            </div>
        )
    }

    console.log(cart.length)

    
    return (
        <div>
           {cart.length > 0 ? carritoLleno : carritoVacio()}
        </div>
    )
}

export default Cart
