import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const WineForm = ({ initialWine, onSubmit }) => {
  const [wine, setWine] = useState({
    name: '',
    vintage: '',
    region: '',
    type: '',
    grape: '',
    price: '',
  });

  useEffect(() => {
    if (initialWine) {
      setWine(initialWine);
    }
  }, [initialWine]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWine((prevWine) => ({
      ...prevWine,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(wine);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* name */}
      <Form.Group controlId="wineName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={wine.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* vintage */}
      <Form.Group controlId="wineName">
        <Form.Label>Vintage</Form.Label>
        <Form.Control
          type="text"
          name="vintage"
          value={wine.vintage}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* region */}
      <Form.Group controlId="wineName">
        <Form.Label>Region</Form.Label>
        <Form.Control
          type="text"
          name="region"
          value={wine.region}
          onChange={handleChange}
          required
        />
      </Form.Group>
    
      {/* type */}
      <Form.Group controlId="wineType">
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          name="type"
          value={wine.type}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* grape */}
      <Form.Group controlId="wineRegion">
        <Form.Label>Grape</Form.Label>
        <Form.Control
          type="text"
          name="grape"
          value={wine.grape}
          onChange={handleChange}
          required
        />
      </Form.Group>
      
      {/* price */}
      <Form.Group controlId="wineRegion">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={wine.price}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {initialWine ? 'Update' : 'Add'}
      </Button>
    </Form>
  );
};

export default WineForm;
