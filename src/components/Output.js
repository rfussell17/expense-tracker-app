import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./Output.css";

function Output(props) {
  const removeExpense = props.removeExpense;
  const rows = props.expenses.map(function(expense) {
    return (
      <tr key={expense.id}>
        <td id="item">{expense.item}</td>
        <td id="date">{expense.date}</td>
        <td id="amount">${expense.amount}</td>
        <td id="type">{expense.type}</td>
        <td>
          <Button 
           variant="dark"
           type="submit" 
           onClick={removeExpense}>
            X
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <Jumbotron>
        <Table responsive>
          <thead>
            <tr>
              <th id="item">Item</th>
              <th id="date">Date</th>
              <th id="amount">Amount</th>
              <th id="type">Type</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Jumbotron>
    </Container>
  );
}

export default Output;
