import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header() {
  return (
    <Container>
      <Jumbotron>
      <header className="title">Expense-Tracker Application</header>
      </Jumbotron>
      </Container>
  );
}

export default Header;
