import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function Output(props) {
  console.log(props.expenses);

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
              <td id="id">097</td>
              <td id="item">MIDI Keyboard</td>
              <td id="date">01/21/2020</td>
              <td id="type">Debit</td>
              <td id="amount">$92.89</td>
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
