import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap'

const NavBar = () => {
    return (
        <header>
            <Navbar className="nav-dark" variant="dark" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="#h">
                        <div className="logo-title-content">
                            <img src="/img/wolf_white.png" alt="Logo" className="img-main-logo"/>
                            <h1 className="main-title">
                                Wolfmark
                            </h1>
                        </div>
                        </Navbar.Brand>
                    </Link> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <Link to="/category/Casual">
                                <NavDropdown.Item href="#a">Casual</NavDropdown.Item>
                            </Link> 
                            <Link to="/category/Formal">
                                <NavDropdown.Item href="#a">Formal</NavDropdown.Item>
                            </Link>  
                            <NavDropdown.Divider />
                            <Link to="/">
                                <NavDropdown.Item href="#action/3.4">Todas</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <CartWidget />
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar