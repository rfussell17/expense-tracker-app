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
  }

  handleSubmit(event){
    alert( {expenses} )
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  /* 
      this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    alert(`expenses: ${this.state.id} ${this.state.item} ${this.state.date} ${this.state.type}
    ${this.state.amount}`);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  */

  render() {
    return (
      <div className="App">
        <Header />
        <Input handleChange={this.handleChange}  {...this.state}
        handleSubmit={this.handleSubmit}  {...this.state} />
        <Output
          expenses={this.state.expenses}
          handleChange={this.handleChange}
          {...this.state}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
