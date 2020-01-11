import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Container>
      <Jumbotron>
        <header className="title">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Expense-Tracker</Navbar.Brand>
          </Navbar>
        </header>
      </Jumbotron>
    </Container>
  );
}

export default Header;
