import { CartContext } from "./context/CartContext"
import { useContext } from "react"

const Cart = () => {

    const [cart] = useContext(CartContext)


    const carritoLleno = cart.map((item, index) => (
        <div key={index}>
            <h1>{item.title}</h1>
            <img src={item.image} alt="" id="imagen-carrito"/>
            <h3>{item.cantidad}</h3>
            <p>{console.log(Number((item.price).substring(1)) + 1 )}</p>
        </div>
    ))
    
    return (
        <div>
            {carritoLleno}
        </div>
    )
}

export default Cart
