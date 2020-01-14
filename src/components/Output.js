import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Output() {
  return (
    <Container>
      <Jumbotron>
        <Table responsive>
          <thead>
            <tr>
              <th id="id">#</th>
              <th id="Item">Item</th>
              <th id="Date">Date</th>
              <th id="Type">Type</th>
              <th id="Amount">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="id">0</td>
              <td id="Item">Table cell</td>
              <td id="Date">Table cell</td>
              <td id="Type">Table cell</td>
              <td id="Amount">Table cell</td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    </Container>
  );
}

export default Output;
