import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import image2 from '../src/images/bg_1.png'
import image3 from '../src/images/bg_2.png'
import haircut from '../src/images/haircut.jpg'
import bleach from '../src/images/bleach.jpg'
import facial from '../src/images/facial.jpg'

import { Card, Col, Container, Row } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navi = useNavigate()
  const carsoualimage = useRef()
  const options = {
    items: 1,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000
  }
  const events = {
    onDragged: function (event) { },
    onChanged: function (event) { }
  }
  return (
    <>
      <Container className='bg' fluid>
        <OwlCarousel ref={carsoualimage} events={events} options={options}>
          <Container  >
            <Row >
              <Col></Col>
              <Col>
                <img src={image2} className='model1' />
              </Col>
            </Row>
          </Container >
          <Container  >
            <Row >
            <Col></Col>
              <Col>
                <img src={image3} className='model1' />
              </Col>
            </Row>
          </Container >
          
          
        </OwlCarousel>
      </Container>

      <Container >
        <Row lg="3" md="6" sm="12"  >
          <Col  >
            <Card className='scard'>
              <Card.Title>HAIRCUTS</Card.Title>
              <Card.Img className='simg' onClick={() => navi(`/service/Haircut`)} src={haircut}></Card.Img>
            </Card>
          </Col>
          <Col >
          <Card className='scard'>
              <Card.Title>FACIAL</Card.Title>
              <Card.Img className='simg' onClick={() => navi(`/service/Facial`)} src={facial}></Card.Img>
          </Card>
          </Col>
          <Col >
          <Card className='scard'>
              <Card.Title>MAKE-UPS</Card.Title>
              <Card.Img className='simg'  onClick={() => navi(`/service/Makeups`)} src={bleach}></Card.Img>
          </Card>
          </Col>
          <Col >
          <Card className='scard'>
              <Card.Title>MAKE-UPS</Card.Title>
              <Card.Img className='simg'  onClick={() => navi(`/service/Menicure`)} src={bleach}></Card.Img>
          </Card>
          </Col>

          <Col >
          <Card className='scard'>
              <Card.Title>BLEACH</Card.Title>
              <Card.Img className='simg'  onClick={() => navi(`/service/Bleach`)} src={bleach}></Card.Img>
          </Card>           
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Home