import ItemListContainer from "./components/Items/ItemListContainer"
import NavBar from "./components/NavBar"
import Contador from "./components/Contador"
import ItemList from "./components/Items/ItemList"
import Titulo from "./components/Titulo"

const App = () => {

    return (
        <>
            <NavBar/>
            <Titulo name="tutores de Coder"/>
            <Contador initial={0} limit={9} onAdd={function() {console.log("Accion realizada exitosamente")}}/>
            <ItemList className="todos-productos"/>
            <ItemListContainer/>
        </>
    )
}

export default App
