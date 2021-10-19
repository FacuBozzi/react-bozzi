import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import CartWidget from './CartWidget';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';


const NavBar = () => {
    return (
        <header>
            <Navbar bg="light" collapseOnSelect expand="lg" variant="light">
                <Container className="mi-container">
                    <Navbar.Brand href="#home">Coderstore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#cart" className="carrito">Cart</Nav.Link>
                            <CartWidget/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar