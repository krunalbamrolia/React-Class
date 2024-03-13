import React, { useState } from 'react';
import axios from 'axios';

function EditProductForm({ product, onEdit }) {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value
    });
  };

  const handleEdit = () => {
    axios.put(`http://localhost:3001/products/${editedProduct.id}`, editedProduct)
      .then(() => {
        onEdit();
      })
      .catch((error) => {
        console.error('Error editing product: ', error);
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={editedProduct.name} onChange={handleInputChange} />
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" value={editedProduct.description} onChange={handleInputChange} />
      <label htmlFor="price">Price:</label>
      <input type="text" id="price" name="price" value={editedProduct.price} onChange={handleInputChange} />
      <button onClick={handleEdit}>Save Changes</button>
    </div>
  );
}

export default EditProductForm;
