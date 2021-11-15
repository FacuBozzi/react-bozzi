import { CartContext } from "./context/CartContext"
import { useContext } from "react"

const Cart = () => {

    const [cart] = useContext(CartContext)
    const hola = "hola"
    console.log(cart)

    const carritoLleno = cart.map((item, index) => (
        <div key={index}>
            <h1>{item.title}</h1>
            <img src={item.image} alt="" />
            <h3>{item.cantidad}</h3>
            <p>{item.price}</p>
            <p>{hola}</p>
        </div>
    ))
    
    return (
        <div>
            {carritoLleno}
            <p>{hola}</p>
        </div>
    )
}

export default Cart
