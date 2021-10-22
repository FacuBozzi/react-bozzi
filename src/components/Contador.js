import { useState } from "react"
import "../style.css"

const Contador = (props) => {

    const limit = props.limit;
    const initial = props.initial;
    let [contador, setContador] = useState(0);
    
            const sumarContador = () => {
                if (contador < limit) {
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
                <button  onClick={() => {
                    sumarContador();
                    }}>Aumentar!
                </button>
                <button  onClick={() => {
                    restarContador();
                    }}>Restar!
                </button>
                <button  onClick={() => {
                    props.onAdd();
                    }}>Agregar al carrito
                </button>
                <p id="contador-actual">Contador actual: {contador}</p>
            </div>
        </>
    )
}

export default Contador
