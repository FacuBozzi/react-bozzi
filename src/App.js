import ItemListContainer from "./components/Items/ItemListContainer"
import NavBar from "./components/NavBar"
import Contador from "./components/Contador"
import Titulo from "./components/Titulo"
import ItemDetailContainer from "./components/Details/ItemDetailContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {

    return (
        <>
            <Router> 
                <NavBar/>
                <Titulo name="tutores de Coder"/>
                <Contador initial={0} limit={9} onAdd={function() {console.log("Accion realizada exitosamente")}}/>
                <Switch> 
                    <Route path="/" exact> 
                        <ItemListContainer/>
                    </Route>
                    <Route path="/category/:id" exact> 
                        <ItemListContainer/>
                    </Route>
                    <Route path="/item/:id" exact> 
                        <ItemDetailContainer/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
