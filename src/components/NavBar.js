import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import CartWidget from './CartWidget';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';


const NavBar = () => {
    return (
        <header>
            <Navbar bg="light" collapseOnSelect expand="lg" variant="light">
                <Container className="mi-container">
                    <Navbar.Brand ><Link to={"/"} className="route-link">Coderstore</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><Link to={"/category/:categoryId"} className="route-link">Sign In</Link></Nav.Link>
                            <Nav.Link>Products</Nav.Link>
                            <Nav.Link  className="carrito">Cart</Nav.Link>
                            <CartWidget/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar