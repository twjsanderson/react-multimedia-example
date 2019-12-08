import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';

// 

const Multimedia3 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container fluid>
        <Row className="p-3 justify-content-center align-items-start">
          <Col md={8}>
              <img
                  className="d-block w-100"
                  src={animal1}
                  alt="First slide"
                />
          </Col>
          <Col md={4} className="text-center">
              <h1 className="text-black">Title</h1>
              <p className="text-black pt-3">
                  fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                  tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                  eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                  scelerisque purus semper eget duis nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                  eleifend mi in nulla
              </p>

          </Col>
        </Row>
        <Row className="p-3 justify-content-center align-items-center">
          <Col md={8}>
              <img
                  className="d-block w-100"
                  src={animal2}
                  alt="First slide"
                />
          </Col>
          <Col md={4} className="text-center">
              <h1 className="text-black">Title</h1>
              <p className="text-black pt-3">
                  fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                  tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                  eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                  scelerisque purus semper eget duis nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                  eleifend mi in nulla
              </p>

          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Multimedia3;
