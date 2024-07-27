import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import notFoundImage from '../assets/not-found.jpg';

const NotFound = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '40px' }}>
      <Row>
        <Col>
          <Image src={notFoundImage} alt="Not Found" fluid style={{ marginBottom: '20px' }} />
          <h1 style={{ color: '#dc3545' }}>404 - Page Not Found</h1>
          <p>Sorry, the page you're looking for does not exist.</p>
          <Button href="/" variant="primary">Go to Homepage</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;