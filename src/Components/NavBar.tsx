import logo from '../assets/logo.png';
import Nav from 'react-bootstrap/esm/Nav';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const NavBar = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img
          src={logo}
          width="20"
          height="20"
          className="d-inline-block align-top"
          alt="Logo"
          style={{transform: 'translate(600%, 50%) scale(8, 8)'}}
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Row>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Col xs="auto" className='px-2'><Nav.Link  href="#home">Acceuil</Nav.Link></Col>
              <Col xs="auto" className='px-2'> <Nav.Link href="#link">Qui sommes nous?</Nav.Link></Col>
              <Col xs="auto" className='px-2'><Nav.Link href="#link">Contacter nous</Nav.Link></Col>
              <Col xs="auto" className='px-2'><Nav.Link href="#link">Representation EMI</Nav.Link></Col>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
    )
}

export default NavBar