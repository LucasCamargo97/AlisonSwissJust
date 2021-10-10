import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link as LinkReactRd } from "react-router-dom";
import { Facebook, Instagram } from "react-bootstrap-icons";

const NavBarr = () => {
  return (
    <div>
      <Navbar className='navBar' expand="lg">
        <Container>
          <LinkReactRd className="linkTituloLucas" to="/">
            <Navbar.Brand>
              <h1 className='navbarTitle'>Alison SwissJust</h1>
              <div className='divIcons'>
                <a href='https://www.facebook.com/alison.swiss.just.21'><Facebook className='navbarIcons'></Facebook></a>
                <a href='https://instagram.com/byali.uy'><Instagram  className='navbarIcons'></Instagram></a>
              </div>
            </Navbar.Brand>
          </LinkReactRd>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkReactRd
                className="linkClassLucas"
                to="/categoria/AceitesEsenciales"
              >
                Aceites Esenciales{" "}
              </LinkReactRd>
              <LinkReactRd className="linkClassLucas" to="/categoria/Cremas">
                Cremas
              </LinkReactRd>
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
