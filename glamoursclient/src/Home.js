import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-owl-carousel2/lib/styles.css';
import '../src/home.css';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from './images/HD-wallpaper-beauty-salon-vectors-stock-psd-beautician.jpg'
import image4 from './images/parlour.jpeg'
import image2 from '../src/images/pexels-asad-photo-maldives-1654834.jpg';
import image3 from '../src/images/grouped-makeup-products-brushes_23-2148181394.jpg';
import haircut from '../src/images/haircut.jpg';
import bleach from '../src/images/bleach.jpg';
import facial from '../src/images/facial.avif';
import makeup from '../src/images/makeup.jpeg';
import menicure from '../src/images/Manicure.avif';
import pedicure from '../src/images/pedicure.jpg';
import waxing from '../src/images/wax.avif';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navi = useNavigate();


  return (
    <div>
      <Carousel autoPlay={true} showThumbs={false} className="custom-carousel">
        <div className="carousel-slide">
          <div className="carousel-image-container">
            <img src={image1} className="carousel-image" alt="Carousel Image" />
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-image-container">
            <img src={image2} className="carousel-image" alt="Hospital Image" />
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-image-container">
            <img src={image3} className="carousel-image" alt="Carousel Image 1" />
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-image-container">
            <img src={image4} className="carousel-image" alt="Carousel Image 1" />
          </div>
        </div>
      </Carousel>

      <Container>
        <div className='multicarousel-header'>EXPLORE MORE</div>
        <MultiCarousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,

              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >

          <Card className='scard'>
            <Card.Img className='img' alt='Waxing' src={waxing} />
            <Button className='sbutton' onClick={() => navi(`/service/waxing`)} >Let's See</Button>
          </Card>

          <Card className='scard'>
            <Card.Img className='img' alt='haircut' src={haircut} />
            <Button className='sbutton' onClick={() => navi(`/service/Haircut`)} >Let's See</Button>
          </Card>

          <Card className='scard'>
            <Card.Img className='img' alt='facial' src={facial} />
            <Button className='sbutton' onClick={() => navi(`/service/Facial`)} >Let's See</Button>
          </Card>

          <Card className='scard'>
            <Card.Img className='img' alt='makeup' src={makeup} />
            <Button className='sbutton' onClick={() => navi(`/service/Makeups`)} >Let's See</Button>
          </Card>

          <Card className='scard'>
            <Card.Img className='img' alt='bleach' src={bleach} />
            <Button className='sbutton' onClick={() => navi(`/service/Bleach`)} >Let's See</Button>
          </Card>

          <Card className='scard'>
            <Card.Img className='img' alt='menicure' src={menicure} />
            <Button className='sbutton' onClick={() => navi(`/service/Menicure`)}>Let's See</Button>
          </Card>
          <Card className='scard'>
            <Card.Img className='img' alt='pedicure' src={pedicure} />
            <Button className='sbutton' onClick={() => navi(`/service/pedicure`)}>Let's See</Button>
          </Card>

        </MultiCarousel>
      </Container>
    </div>
  );
};

export default Home;
