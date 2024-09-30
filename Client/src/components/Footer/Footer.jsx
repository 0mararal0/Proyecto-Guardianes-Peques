import "./styleFooter.css";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-contenedor">
        <Nav className="d-flex justify-content-center align-items-center py-3 text-link">
          <Nav.Link as={Link} to="/about" className="tipo-letra">Sobre Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/legalNotice" className="tipo-letra">Legal Notice</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="tipo-letra">Contact</Nav.Link>
        </Nav>
        <hr />
        <p className="text-footer">
          Guardianes & Peques es una plataforma online que conecta a familias con cuidadores
          especializados en el cuidado de bebés y niños pequeños. A través de nuestro sitio, 
          las familias pueden ponerse en contacto con los guardianes, revisar sus perfiles y 
          encontrar al cuidador ideal para sus pequeños.
        </p>
      </Container>
    </footer>
  );
};
