import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Input() {
  return (
    <Container>
    <Jumbotron>
      <form>
        <label>
          Item  
          <input type="text" name="item"/>
        </label>
  
        <label>
          Amount  
          <input type="text" name="amount"/>
        </label>
        </form>

        <br></br>

        <form>
        <label>
          Description  
          <input type="text" name="description"/>
        </label>

        <label>
          Location  
          <input type="text" name="location"/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>

      <hr></hr>
    </Jumbotron>
    </Container>
  );
}

export default Input;
