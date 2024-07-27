import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from '../assets/welcome-image.jpg';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6' }}>
      <Image src={welcomeImage} alt="Welcome" fluid style={{ marginBottom: '20px' }} />
      <h1 style={{ color: '#343a40' }}>Welcome to Our Store!</h1>
      <Button variant="primary" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        Shop Now
      </Button>
      <div style={{ marginTop: '20px' }}>
        <Card style={{ width: '18rem', margin: 'auto', marginTop: '20px' }}>
          <Card.Body>
            <Card.Title>Featured Product</Card.Title>
            <Card.Text>
              Check out our latest product with amazing features!
            </Card.Text>
            <Button variant="secondary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;