import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Input from "./components/Input";
import Header from "./components/Header";
import Output from "./components/Output";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      item: "",
      date: "",
      type: "",
      amount: "",
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

  removeExpense(){
    this.setState({
      expenses: this.state.expenses.filter()
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.gatherOutput(this.state);
    this.setState({ expense: "" });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("handle change");
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
        />
        <Footer />
      </div>
    );
  }
}

export default App;
