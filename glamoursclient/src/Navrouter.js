import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import parlourlogo from './images/pngtree-salon-logo-png-image_4024992-removebg-preview.png'
const Navrouter = () => {
  return (
    <div>
   <Navbar expand="lg" className=" Navbar">
      <Container >
        <img className='navbarimg' src={parlourlogo}></img>
        <Navbar.Brand className='parlourname' >Glamours</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link  >
                <Link className='routes' to="/">Home</Link>
            </Nav.Link>
            <Nav.Link >
                <Link className='routes' to="/service">Services</Link>
            </Nav.Link>
            <Nav.Link >
                <Link className='routes' to='/appointment'>Appointments</Link>
            </Nav.Link>
            <Nav.Link >
                <Link className='routes' to='/profile'>Profile</Link>
            </Nav.Link>
            <Nav.Link >
                <Link className='routes' to='/register'>Register</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navrouter