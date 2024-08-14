import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  // Fetch product details based on id here

  return (
    <Container>
      <h1 className="my-4">Detalles del producto</h1>
      <p>Comida para perro Cachorro: {id}</p>
    </Container>
  );
}

export default ProductDetail;
