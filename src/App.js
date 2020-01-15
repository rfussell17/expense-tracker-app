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
      expense: [
        {
          id: 1,
          item: "Table",
          date: "2019-01-15",
          type: "debit",
          amount: "22.50"
        },
        {
          id: 2,
          item: "Stable",
          date: "2019-11-08",
          type: "cash",
          amount: "2.50"
        }
      ]
    };
  }

  handleChange = e => {
    this.setState({
      id: e.target.value,
      item: e.target.value,
      date: e.target.value,
      type: e.target.value,
      amount: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <Output expenses={this.state.expenses}/>
        <Footer />
      </div>
    );
  }
}

export default App;
