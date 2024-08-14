import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Comida para Perro', price: '$20', description: 'Grande calidad Cachorro', image: 'image.png' },
  { id: 2, name: 'Comida para Gato', price: '$30', description: 'Grande calidad Adulto', image: 'image2.png' },

  // Add more products here
];

function Home() {
  return (
    <Container>
      <h1 className="my-4">Bienvenido a  OmegaPetShop</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
