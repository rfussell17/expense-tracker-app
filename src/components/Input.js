import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Input() {




  return (
<Container>
<Form>
  <Form.Group   controlId="Item">
    <Form.Label>Item</Form.Label>
    <Form.Control type="text" placeholder="Enter Item" />
  </Form.Group>
  
  <Form.Group   controlId="Date">
    <Form.Label>Date</Form.Label>
    <Form.Control type="date" placeholder="Enter Date" />
  </Form.Group>
 
  <Form.Group   controlId="Type">
    <Form.Label>Type</Form.Label>
    <Form.Control type="text" placeholder="Enter Payment Type" />
  </Form.Group>

  <Form.Group   controlId="Amount">
    <Form.Label>Cost</Form.Label>
    <Form.Control type="number" placeholder="Enter Amount" />
  </Form.Group>

</Form>
</Container>
  );
}

export default Input;
