import { useState } from "react"
import "../style.css"

const Contador = (props) => {

    let [contador, setContador] = useState(0);

            const sumarContador = () => {

                setContador(contador + 1);
                
            }
            const restarContador = () => {
                
                setContador(contador - 1);

            }
    return (    
        <>
            <div className="contador-app">
                <button  onClick={() => {
                    sumarContador();
                    props.onAdd();
                    }}>Aumentar!
                </button>
                <button  onClick={() => {
                    restarContador();
                    props.onAdd();
                    }}>Restar!
                </button>
                <p>Contador actual: {contador}</p>
            </div>
        </>
    )
}

export default Contador
