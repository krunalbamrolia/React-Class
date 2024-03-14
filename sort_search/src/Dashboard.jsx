import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditProductForm from './EditProductForm.jsx';
import AddProduct from './AddProduct.jsx';
import { api_url } from './constant/constant.js';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(api_url)
      .then((res) => {
        setProducts(res.data);
        setSortedProducts(res.data.slice().sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch((error) => {
        console.error('Error fetching products: ', error);
      });
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(term) ||
      product.price.toString().includes(term)
    );
    setSortedProducts(filtered.slice().sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleDeleteConfirmation = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      handleDelete(productId);
    }
  };

  const handleDelete = (productId) => {
    axios.delete(api_url + `/${productId}`)
      .then(() => {
        fetchProducts();
      })
      .catch((error) => {
        console.error('Error deleting product: ', error);
      });
  };

  const handleEdit = (productId) => {
    const productToEdit = products.find(product => product.id === productId);
    setEditingProduct(productToEdit);
  };

  const handleAdd = () => {
    axios.post(api_url, newProduct)
      .then(() => {
        fetchProducts();
        setNewProduct({
          name: '',
          description: '',
          price: ''
        });
        setShowPopup(false); 
      })
      .catch((error) => {
        console.error('Error adding new product: ', error);
      });
  };

  const handleEditComplete = () => {
    setEditingProduct(null);
    fetchProducts();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  return (
    <>
      <div>
        <button className="btn btn-primary float-right" onClick={() => setShowPopup(true)}>Add Product</button>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => handleDeleteConfirmation(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <AddProduct
          newProduct={newProduct}
          onAdd={handleAdd}
          onClose={() => setShowPopup(false)}
          onInputChange={handleInputChange}
        />
      )}
      {editingProduct && (
        <EditProductForm 
          product={editingProduct}
          onClose={() => setShowPopup(false)} 
          onEdit={handleEditComplete} />
      )}
    </>
  );
}

export default Dashboard;
