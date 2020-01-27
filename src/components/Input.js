import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Input(props) {
  console.log(props)
  return (
    <Container>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId="item">
          <Form.Label>Item</Form.Label>
          <Form.Control
            name="item"
            type="text"
            value={props.item}
            placeholder="Enter Item"
            onChange={props.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            name="date"
            type="date"
            value={props.date}
            placeholder="Enter Date"
            onChange={props.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            name="amount"
            type="text"
            value={props.amount}
            placeholder="Enter Amount"
            onChange={props.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            name="location"
            type="text"
            value={props.location}
            placeholder="Where was the purchase made"
            onChange={props.handleChange}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Input;
