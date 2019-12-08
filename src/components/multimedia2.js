import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';

// change from template, put title above carousel, maybe fixed using different library 

const Multimedia2 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container>
      <Row className="h-100 justify-content-center align-items-center">
                    <Col className="m-4 text-center">
                        <h1>Main Title</h1>
                    </Col>
                </Row>
        <Row className="h-100 p-3 justify-content-center align-items-start">
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={animal1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={animal2}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={animal3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Multimedia2;
