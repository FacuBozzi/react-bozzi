import { CartContext } from "./context/CartContext"
import { useContext } from "react"

const Cart = () => {

    const [cart, cont, setCont] = useContext(CartContext)


    const carritoLleno = cart.map((item, index) => (
        <div className="container-background">
            <div className="carrito-container">
                <div key={index} className="carrito-product">
                    <img src={item.image} alt="" id="imagen-carrito"/>
                    <h1>{item.title}</h1>
                    <p>Precio: {item.price}</p>
                    <h3>Cantidad: {item.cantidad}</h3>
                    <p>Total: ${Number((item.price).substring(1)) * (item.cantidad)}</p>
                </div>
            </div>
        </div>
    ))
    
    return (
        <div>
            {carritoLleno}
        </div>
    )
}

export default Cart
