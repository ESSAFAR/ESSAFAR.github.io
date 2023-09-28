import logo from '../assets/logo.png';
import Nav from 'react-bootstrap/esm/Nav';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';


const NavBar = () => {


  const scrollToBottom = () => {    
      window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth', 
      });
  };



  const buttonRef = useRef<HTMLButtonElement>(null);
  

  return (
    <Navbar expand="lg" className="bg-secondary-subtle sticky-md-top">
      <Container>
        <Navbar.Brand>
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
              <Col xs="auto" className='px-2'><Link to = {'/'} className='link'>Acceuil</Link></Col>
              <Col xs="auto" className='px-2'><Link to = {'/AllArticles'} className='link'>Articles</Link></Col>
              <Col xs="auto" className='px-2'> <Link to = {'/AboutUsMore'} className='link'>Qui sommes nous?</Link></Col>
              <Col xs="auto" className='px-2 link'> <a onClick={scrollToBottom}>Contacter nous</a></Col>
              <Col xs="auto" className='px-2'><Link to = {'/PresentationEMI'} className='link'>Presentation EMI</Link></Col>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
    )
}

export default NavBar