import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';

function Output() {
  return (
      <Jumbotron>
      <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Item</th>
      <th>Date</th>
      <th>Type</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</Table>
      </Jumbotron>
  );
}

export default Output;
