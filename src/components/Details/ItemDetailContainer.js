import { useContext } from "react";
import ItemDetail from "./ItemDetail";
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = () => {

    //contexto pasado para el componente
    const [cart, addItem, removeItem, clear, cont, setCont, details, setDetails, datos, setDatos] = useContext(CartContext)
    
    
    return (
        <>
            <div className="producto-descripcion">
                <ItemDetail descripcion={datos}></ItemDetail>
            </div>

            <button class="back-shopping"><Link className="route-link" to="/category/:id">go back to shopping</Link></button>
        </>
    )
}

export default ItemDetailContainer
