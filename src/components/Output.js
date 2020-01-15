import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function Output() {
  return (
    <Container>
      <Jumbotron>
        <Table responsive>
          <thead>
            <tr id="tableTitle">
              <th id="id">#</th>
              <th id="Item">Item</th>
              <th id="Date">Date</th>
              <th id="Type">Type</th>
              <th id="Amount">Amount</th>
              <th id="delete"></th>
            </tr>
          </thead>
          <tbody>
            <tr id="table">
              <td id="id">097</td>
              <td id="Item">MIDI Keyboard</td>
              <td id="Date">01/21/2020</td>
              <td id="Type">Debit</td>
              <td id="Amount">$92.89</td>
              <td>
                <input id="delete" input type="checkbox" />
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
