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
    
    
        console.log(stockRestante)
            const sumarContador = () => {
                if (contador < stockRestante) {
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
                    props.onAdd();
                    }}>Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default Contador
