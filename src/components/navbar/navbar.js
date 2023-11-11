import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nvar.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand> 



           <img className=" d-inline-block align-top "  src="imagenes/logo-mejorao.png" width="60" height="60" /> </Navbar.Brand>


          <Nav className=" nav-link">

            <Nav.Link as={Link} to="/"> Home  </Nav.Link>
            <Nav.Link to="/nosotros"> Nosotros </Nav.Link>
            <Nav.Link as={Link} to="/slider"> Novedades</Nav.Link>
            <Nav.Link as={Link}  to="/categoria1"> Categoria1</Nav.Link>
            <Nav.Link as={Link}  to="/categoria2"> Categoria2</Nav.Link>
            <Nav.Link href="/cat3"> Categoria3</Nav.Link>
            <Nav.Link href="/cat4"> Categoria4</Nav.Link>
            <Nav.Link href="/cat5"> Categoria5</Nav.Link>
            <Nav.Link href="/contacto"> Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;