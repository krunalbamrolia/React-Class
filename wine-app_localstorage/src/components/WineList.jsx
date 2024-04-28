import React from 'react';
import { Table, Button } from 'react-bootstrap';

const WineList = ({ wines, onEdit, onDelete }) => {
  return (
    <>
      <h2>Wine List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Vintage</th>
            <th>Region</th>
            <th>Type</th>
            <th>Grape</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {wines.map((wine) => (
            <tr key={wine.id}>
              <td>{wine.id}</td>
              <td>{wine.name}</td>
              <td>{wine.vintage}</td>
              <td>{wine.region}</td>
              <td>{wine.type}</td>
              <td>{wine.grape}</td>
              <td>{wine.price}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit(wine)}>
                  Edit
                </Button>
                {' '}
                <Button variant="danger" onClick={() => onDelete(wine.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default WineList;
