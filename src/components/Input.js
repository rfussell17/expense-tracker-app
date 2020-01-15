import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Input() {
  return (
    <Container>
      <Form>
        <Form.Group controlId="Item">
          <Form.Label>Item</Form.Label>
          <Form.Control type="text" placeholder="Enter Item" />
          <p></p>
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" />
          <p></p>
        </Form.Group>

        <Form.Group controlId="Amount">
          <Form.Label>Cost</Form.Label>
          <Form.Control type="text" placeholder="Enter Amount" />
          <p></p>
        </Form.Group>

        <Form.Group controlId="Type">
          <Form.Label>Type</Form.Label>
          <br></br>
          <select>
            <option value="PayPal">PayPal</option>
            <option value="Credit">Credit</option>
            <option selected value="Debit">
              Debit
            </option>
            <option value="Cash">Cash</option>
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
