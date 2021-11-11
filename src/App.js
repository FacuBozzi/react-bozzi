import ItemListContainer from "./components/Items/ItemListContainer"
import NavBar from "./components/NavBar"
import Contador from "./components/Contador"
import Titulo from "./components/Titulo"
import ItemDetailContainer from "./components/Details/ItemDetailContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { CartProvider } from "./components/context/CartContext"

const App = () => {

    return (
        <>
        <CartProvider>
                <Router> 
                    <NavBar/>
                    <Titulo name="tutores de Coder"/>
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
            </CartProvider>
        </>
    )
}

export default App
