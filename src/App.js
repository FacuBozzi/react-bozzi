import ItemListContainer from "./components/Items/ItemListContainer"
import NavBar from "./components/NavBar"
import Titulo from "./components/Titulo"
import ItemDetailContainer from "./components/Details/ItemDetailContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { CartProvider } from "./components/context/CartContext"
import Cart from "./components/Cart"

const App = () => {

    return (
        <>
            <CartProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <NavBar />
                            <Titulo name="tutores de Coder" />
                            <ItemListContainer />
                        </Route>
                        <Route path="/category/:id" exact>
                            <NavBar />
                            <ItemListContainer />
                        </Route>
                        <Route path="/item/:id" exact>
                            <NavBar />
                            <ItemDetailContainer />
                        </Route>
                        <Route path="/cart" exact>
                            <NavBar />
                            <Cart />
                        </Route>
                    </Switch>
                </Router>
            </CartProvider>
        </>
    )
}

export default App
