import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import logo from './Images/logo-header.png';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavbarBrand href='/'>
                        <Card.Img alt="logo.png" variant="top" src={logo} className="image-header" /> 
                    </NavbarBrand>
                    <Navbar.Brand href="/" className='name-company'> <span className='title-proyectos'>PROYECTOS</span> <span className='title-tecnologicos'>TECNOLOGICOS</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/tbs">¿Quienes somos?</Nav.Link>&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="/servicios">Servicios</Nav.Link>&nbsp;&nbsp;&nbsp;
                        <NavDropdown title="Productos" id="basic-nav-dropdown" > 
                        <NavDropdown.Item href="/producto1">Producto 1</NavDropdown.Item>
                        <NavDropdown.Item href="/producto2">
                            Producto 2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/producto3">Producto 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/productos">
                            Todos los productos
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contactanos">Contactanos</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;