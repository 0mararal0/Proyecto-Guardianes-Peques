import "./styleFooter.css";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-body-tertiary containerFooter">
      <Container>
        <div className="d-flex justify-content-center align-items-center py-3">
          <Nav>
            <Nav.Link as={Link} to="/about" className="text-dark">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link href="#legalNotice" className="text-dark">
              Legal Notice
            </Nav.Link>
            <Nav.Link href="#contact" className="text-dark">
              Contact
            </Nav.Link>
          </Nav>
        </div>
        <hr />
        <div>
          <p className="text-footer">
            Guardianes & Peques es una plataforma online que conecta a familias
            con cuidadores especializados en el cuidado de bebés y niños
            pequeños. A través de nuestro sitio, las familias pueden ponerse en
            contacto con los guardianes, revisar sus perfiles y encontrar al
            cuidador ideal para sus pequeños.
          </p>
        </div>
      </Container>
    </footer>
  );
};
