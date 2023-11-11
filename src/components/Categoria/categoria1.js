import React from 'react'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Categoria1() {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top"  src="/img5.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
         <h6> Precio:$0000 </h6>    
         <h6> Categoria:Categoria 1</h6>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Categoria1;