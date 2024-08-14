import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" as={Link} to={`/product/${product.id}`}>
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
