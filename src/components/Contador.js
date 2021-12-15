import { useState, useContext} from "react"
import "../style.css"
import { useParams } from "react-router"
import { CartContext } from './context/CartContext';

const Contador = (props) => {

    //contexto para el componente
    const [cart, addItem, removeItem, clear, cont, setCont, details, setDetails, price, setPrice, datos, setDatos, contador, setContador] = useContext(CartContext)


    const {id} = useParams()
    
    let stockRestante;

    const initial = props.initial;

    //consigue el stock restante de los detalles del producto
    (props.stock).filter(desc => desc.id.toString() === id).map((desc, index) => (
        stockRestante = desc.stock
        ))
        
        
    //consigue la cantidad de productos que el usuario quiere agregar al carrito
            const sumarContador = () => {
                if (contador < stockRestante && props.carritoActual < stockRestante) {
                    setContador(contador + 1);
                } else {
                    alert("No hay mas stock");
                }
            }
            const restarContador = () => {
                if (contador > initial) {
                    setContador(contador - 1);
                } else {
                    alert("No puede elegir un número negativo");
                }
            }


    const multipleFunctions = () => {
        setCont(contador)
        props.funcionBoton(props.compras)
    }

    return (    
        <>
            <div className="contador-app">
                <div className="contador-container">
                    <button className="boton-invisible">
                    <i className="bi bi-file-plus-fill icono-boton" onClick={() => {
                        sumarContador();
                        }}>
                    </i></button>
                    <p id="contador-actual">{contador}</p>
                    <button className="boton-invisible">
                    <i className="bi bi-file-minus-fill icono-boton" onClick={() => {
                        restarContador();
                        }}>
                    </i></button>
                </div>
                <button className="agregador-btn" onClick={() => {
                    multipleFunctions()
                    }}>Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default Contador
