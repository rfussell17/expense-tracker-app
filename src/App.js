import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Input from "./components/Input";
import Header from "./components/Header";
import Output from "./components/Output";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      idForm: "id",
      itemForm: "item",
      dateForm: "date",
      typeForm: "type",
      amountForm: "amount"
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input  itemForm= {this.state.itemForm}/>
        <Output />
        <Footer />
      </div>
    );
  }
}

export default App;
