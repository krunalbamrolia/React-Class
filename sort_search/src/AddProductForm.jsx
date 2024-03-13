import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm({ onAdd }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleAdd = () => {
    axios.post('http://localhost:3001/products', newProduct)
      .then(() => {
        onAdd();
        setNewProduct({
          name: '',
          description: '',
          price: ''
        });
      })
      .catch((error) => {
        console.error('Error adding new product: ', error);
      });
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add New Product</h2>
        <form onSubmit={handleAdd}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={newProduct.name} onChange={handleInputChange} />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={newProduct.description} onChange={handleInputChange} />
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value={newProduct.price} onChange={handleInputChange} />
          <button type="submit">Add Product</button>
        </form>
        <button className="close-btn" onClick={onAdd}>Close</button>
      </div>
    </div>
  );
}

export default AddProductForm;
