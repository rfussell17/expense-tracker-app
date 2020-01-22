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
      expenses: [
        {
          id: 97,
          item: "MIDI Keyboard",
          date: "2020-01-15",
          type: "debit",
          amount: "22.50"
        },
        {
          id: 98,
          item: "Tv",
          date: "2020-01-15",
          type: "cash",
          amount: "24.50"
        },
        {
          id: 99,
          item: "butt",
          date: "2020-01-15",
          type: "cash",
          amount: "24.50"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <Output expenses={this.state.expenses} />
        <Footer />
      </div>
    );
  }
}

export default App;
