import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid/v4";

import Input from "./components/Input";
import Header from "./components/Header";
import Output from "./components/Output";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
      date: "",
      type: "",
      amount: "",
      id: uuid(),
      expenses: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.gatherOutput = this.gatherOutput.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
  }

  gatherOutput(expense) {
    this.setState({
      expenses: [...this.state.expenses, expense]
    });
  }

  removeExpense(event) {
    event.preventDefault();
    console.log("delete clicked");
    console.log(this.state.expenses);
    this.setState({
      expenses: this.state.expenses.filter(expense => {
        console.log(expense.id);
        console.log(expense.id);
        return expense.id !== expense.id
      })      
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.gatherOutput({ ...this.state, id: uuid() });
    this.setState({ expense: "" });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          gatherOutput={this.gatherOutput}
        />
        <Output
          expenses={this.state.expenses}
          handleChange={this.handleChange}
          removeExpense={this.removeExpense}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
