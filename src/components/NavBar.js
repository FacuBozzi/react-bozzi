import "../style.css"

const NavBar = () => {
    return (
        <header>
            <nav className="mi-nav">
                <h1>Coderstore</h1>
                <div id="links">
                    <a href="">Sobre Nosotros</a>
                    <a href="" id="tienda">Tienda</a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar