import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function ExpenseTable(props) {
  const removeExpense = props.removeExpense;
  const rows = props.expenses.map(function(expense) {
    return (
      <tr key={expense.id}>
        <td id="item">{expense.item}</td>
        <td id="date">{expense.date}</td>
        <td id="amount">{expense.amount}</td>
        <td id="location">{expense.location}</td>
        <td>
          <Button
            variant="dark"
            type="submit"
            onClick={removeExpense.bind(this, expense.id)}
          >
            X
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <Table responsive>
      <thead>
        <tr>
          <th id="item">Item</th>
          <th id="date">Date</th>
          <th id="amount">Amount</th>
          <th id="location">Location</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default ExpenseTable;
