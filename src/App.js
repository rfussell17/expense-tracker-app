import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid/v4";

import Input from "./components/Input";
import Header from "./components/Header";
import Output from "./components/Output";

class App extends React.Component {
  constructor() {
    super();
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
      expense: { item: "", date: "", amount: "", location: "" }
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render(props) {
    return (
      <div className="App">
        <Header />
        <Input
          expenses={this.state.expenses}

          handleChange={this.handleChange}
          gatherOutput={this.gatherOutput}
          handleSubmit={this.handleSubmit}
        />
        <Output
          expenses={this.state.expenses}
          removeExpense={this.removeExpense}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          gatherOutput={this.gatherOutput}
        />
      </div>
    );
  }
}

export default App;
