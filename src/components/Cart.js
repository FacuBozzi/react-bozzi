import { CartContext } from "./context/CartContext"
import { useContext, useEffect } from "react"

const Cart = () => {

    const [cart, addItem, removeItem, clear, cont, setCont] = useContext(CartContext)

    console.log(cart)
    const carritoLleno = cart.map((item, index) => (
        <div className="container-background">
            <div className="carrito-container">
                <div key={index} className="carrito-product">
                    <img src={item.image} alt="" id="imagen-carrito"/>
                    <h1>{item.title}</h1>
                    <p>Precio: {item.price}</p>
                    <h3>Cantidad: {item.cantidad}</h3>
                    <p>Total: ${Math.round((Number((item.price).substring(1)) * (item.cantidad) + Number.EPSILON) * 100) / 100}</p>
                    <button onClick={removeItem(item.id)}>Eliminar</button>
                </div>
            </div>  
        </div>
    ))

     //vaciando carrito cuando cambia la url
    //  const url = window.location.pathname.split('/').pop();
    //  useEffect(() => {
    //      clear()
    //  }, [url]);
    
    return (
        <div>
           {carritoLleno}
        </div>
    )
}

export default Cart
