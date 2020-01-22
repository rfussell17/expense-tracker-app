import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";



function Output(props) {


  return (
    <Container>
      <Jumbotron>
        <Table responsive>
          <thead>
            <tr id="tableTitle">
              <th id="id">#</th>
              <th id="item">Item</th>
              <th id="date">Date</th>
              <th id="type">Type</th>
              <th id="amount">Amount</th>
              <th id="delete"></th>
            </tr>
          </thead>
          <tbody>
            <tr id="table">
              <td id="id">{props.expenses[0].id}</td>
              <td id="item">{props.expenses[0].item}</td>
              <td id="date">{props.expenses[0].date}</td>
              <td id="type">{props.expenses[0].type}</td>
              <td id="amount">{props.expenses[0].amount}</td>
              <td>
                <input id="delete" input type="checkbox" input="true" />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
      <Button variant="dark" type="submit">
        Delete
      </Button>
    </Container>
  );
}

export default Output;
