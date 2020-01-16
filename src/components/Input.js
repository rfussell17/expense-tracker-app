import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Input() {
  return (
    <Container>
      <Form>
        <Form.Group controlId="item">
          <Form.Label>Item</Form.Label>
          <Form.Control type="text" placeholder="Enter Item" />
          <p></p>
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" />
          <p></p>
        </Form.Group>

        <Form.Group controlId="amount">
          <Form.Label>Cost</Form.Label>
          <Form.Control type="text" placeholder="Enter Amount" />
          <p></p>
        </Form.Group>

        <Form.Group controlId="type">
          <Form.Label>Type</Form.Label>
          <br></br>
          <select>
            <option value="paypal">PayPal</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
            <option value="cash">Cash</option>
          </select>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Input;
