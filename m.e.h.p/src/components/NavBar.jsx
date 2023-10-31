import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="barra">
    <Container>
      <Navbar.Brand href="#home" class="title">Meli. Entre hilos y papeles</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features" class="botones">Sobre nosotros</Nav.Link>
          <NavDropdown title="Productos" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Agendas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Libretas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Organizadores</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cuadernos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Lapiceros</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Atrapasueños</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Gomitas de pelo</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tejidos en hilo</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
        </svg>
        <CartWidget />
        <span>0</span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
