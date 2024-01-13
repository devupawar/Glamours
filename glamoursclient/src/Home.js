import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import image2 from '../src/images/bg_1.png'
import image3 from '../src/images/bg_2.png'
import { Col, Container, Row } from 'react-bootstrap';


const Home = () => {

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
    </>
  )
}

export default Home