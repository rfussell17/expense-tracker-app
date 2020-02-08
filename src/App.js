import React from "react";
import uuid from "uuid/v4";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import ExpenseForm from "./components/ExpenseForm";
import Header from "./components/Header";
import ExpenseTable from "./components/ExpenseTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      date: "",
      location: "",
      amount: "",
      id: uuid(),
      expenses: []
    };
    this.removeExpense = this.removeExpense.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.gatherOutput = this.gatherOutput.bind(this);
  }

  gatherOutput(expense) {
    this.setState({
      expenses: [...this.state.expenses, expense]
    });
  }

  removeExpense(id, event) {
    event.preventDefault();
    this.setState({
      expenses: this.state.expenses.filter(expense => {
        return expense.id !== id;
      })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.gatherOutput({ ...this.state, id: uuid() });
    this.setState({
      item: "",
      date: "",
      amount: "",
      location: ""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <ExpenseForm
            expenses={this.state.expenses}
            item={this.state.item}
            date={this.state.date}
            amount={this.state.amount}
            location={this.state.location}
            handleChange={this.handleChange}
            gatherOutput={this.gatherOutput}
            handleSubmit={this.handleSubmit}
          />
        </Container>
        <Container>
          <Jumbotron>
            <ExpenseTable
              expenses={this.state.expenses}
              removeExpense={this.removeExpense}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              gatherOutput={this.gatherOutput}
            />
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default App;
