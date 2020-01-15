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
      Id: "",
      Item: "",
      Date: "",
      Type: "",
      Amount: "",
    };
  }

  handleChange = e => {
    this.setState({
      Id: e.target.value,
      Item: e.target.value,
      Date: e.target.value,
      Type: e.target.value,
      Amount: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <Output />
        <Footer />
      </div>
    );
  }
}

export default App;
