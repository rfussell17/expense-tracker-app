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
    /*this.handleSubmit = this.handleSubmit.bind(this);*/
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ expense });
  }

  /* 
  handleSubmit(event){
    event.preventDefault();
  }*/

  render(props) {
    return (
      <div className="App">
        <Header />
        <Input handleChange={this.handleChange} {...this.state} />
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
