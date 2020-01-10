import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Input from './components/Input'
import Header from './components/Header'
import Output from './components/Output'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Output />
      <Footer />

    </div>
  );
}

export default App;
