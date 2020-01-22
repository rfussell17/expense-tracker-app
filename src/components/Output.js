import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";


function Output(props) {
  const rows = props.expenses.map(function(expense) {
    return (
      <tr>
        <td id="id">{expense.id}</td>
        <td id="item">{expense.item}</td>
        <td id="date">{expense.date}</td>
        <td id="type">{expense.type}</td>
        <td id="amount">{expense.amount}</td>
        <td>
          <input
           id="delete"
           type="checkbox"
           
            />
        </td>
      </tr>
    );
  });

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
          <tbody>{rows}</tbody>
        </Table>
      </Jumbotron>
      <Button variant="dark" type="submit">
        Delete
      </Button>
    </Container>
  );
}

export default Output;
