import { useState } from "react"
import "../style.css"
import { useParams } from "react-router"

const Contador = (props) => {

    const {id} = useParams()
    
    let stockRestante;

    const initial = props.initial;
    let [contador, setContador] = useState(initial);

    //consigue el stock restante de los detalles del producto
    (props.stock).filter(desc => desc.id.toString() === id).map((desc, index) => (
        stockRestante = desc.stock
        ))
        
    //consigue la cantidad de productos que el usuario quiere agregar al carrito
    // cantidadProductos = props.carritoActual
    
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
        props.changeCont(contador);
        setContador(props.initial);
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
