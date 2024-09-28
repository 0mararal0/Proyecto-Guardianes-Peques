import "./styleNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/Logo.png";

export const NavbarApp = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img className="logoNavbarApp" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#link">FAQ´S</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
