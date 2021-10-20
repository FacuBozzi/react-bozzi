import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Contador from "./components/Contador"


const App = () => {

    return (
        <>
            <NavBar/>
            <ItemListContainer name="tutores de Coder"/>
            <Contador onAdd={function() {console.log("Accion realizada exitosamente")}}/>
        </>
    )
}

export default App
