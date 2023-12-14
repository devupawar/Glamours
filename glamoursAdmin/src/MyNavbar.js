import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  const [show, setshow] = useState(false)

  const handleShow = () => {
    setshow(true)
  }
  const handleHide = () => {
    setshow(false)
  }

  return (
    <div>
      <Navbar expand="lg" className="Nav">
        <Container >
          <Navbar.Brand onClick={() => handleShow()}>Admin Panel</Navbar.Brand>
        </Container>
        
      </Navbar>

      <Offcanvas show={show} onHide={handleHide}>
        <Offcanvas.Header closeButton className='offhead'>
          Beauty Admin
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='flex-column'>
            <Nav.Link>
              <Link className='mlink' to='/dashboard'>Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='mlink' to='/addservice'>Add Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='mlink' to='/services'>Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='mlink' to='/appointment'>Appointments</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='mlink' to='/customer'>Customers</Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default MyNavbar