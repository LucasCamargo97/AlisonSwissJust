import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link as LinkReactRd } from "react-router-dom";

const NavBarr = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkReactRd className="linkTituloLucas" to="/">
            <Navbar.Brand>Swiss Just vendedores</Navbar.Brand>
          </LinkReactRd>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkReactRd
                className="linkClassLucas"
                to="/categoria/AceitesEscenciales"
              >
                Aceites Escenciales{" "}
              </LinkReactRd>
              <LinkReactRd className="linkClassLucas" to="/categoria/Cremas">
                Cremas
              </LinkReactRd>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <LinkReactRd to="/cart">
                <CartWidget />
              </LinkReactRd>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarr;
