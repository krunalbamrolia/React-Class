import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditProductForm from './EditProductForm.jsx';

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

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:3001/products")
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
    axios.delete(`http://localhost:3001/products/${productId}`)
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
    // Implement add functionality here
    console.log('Adding new product:', newProduct);
    axios.post('http://localhost:3001/products', newProduct)
      .then(() => {
        fetchProducts();
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

//   const generateId = () => {
//     // Find the maximum id in the current products list and increment by 1
//     const maxId = Math.max(...products.map(product => product.id), 0);
//     return maxId + 1;
//   };

  return (
    <>
      <div>
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
      <div>
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
      </div>
      <div>
      {editingProduct && (
        <EditProductForm product={editingProduct} onEdit={handleEditComplete} />
      )}
      </div>
    </>
  );
}

export default Dashboard;
// --------------------------------------


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import EditProductForm from './EditProductForm.jsx';

// function Dashboard({ onAddProduct, onDeleteProduct }) {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [sortedProducts, setSortedProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     description: '',
//     price: ''
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     axios.get("http://localhost:3001/products")
//       .then((res) => {
//         setProducts(res.data);
//         setSortedProducts(res.data.slice().sort((a, b) => a.name.localeCompare(b.name)));
//       })
//       .catch((error) => {
//         console.error('Error fetching products: ', error);
//       });
//   };

//   const handleSearch = (event) => {
//     const term = event.target.value.toLowerCase();
//     setSearchTerm(term);
//     const filtered = products.filter(product => 
//       product.name.toLowerCase().includes(term) ||
//       product.price.toString().includes(term)
//     );
//     setSortedProducts(filtered.slice().sort((a, b) => a.name.localeCompare(b.name)));
//   };

//   const handleDeleteConfirmation = (productId) => {
//     onDeleteProduct(productId);
//   };

//   const handleDelete = (productId) => {
//     axios.delete(`http://localhost:3001/products/${productId}`)
//       .then(() => {
//         fetchProducts();
//       })
//       .catch((error) => {
//         console.error('Error deleting product: ', error);
//       });
//   };

//   const handleEdit = (productId) => {
//     const productToEdit = products.find(product => product.id === productId);
//     setEditingProduct(productToEdit);
//   };

//   const handleAdd = () => {
//     // Implement add functionality here
//     console.log('Adding new product:', newProduct);
//     axios.post('http://localhost:3001/products', newProduct)
//       .then(() => {
//         fetchProducts();
//         setNewProduct({
//           name: '',
//           description: '',
//           price: ''
//         });
//       })
//       .catch((error) => {
//         console.error('Error adding new product: ', error);
//       });
//   };

//   const handleEditComplete = () => {
//     setEditingProduct(null);
//     fetchProducts();
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewProduct({
//       ...newProduct,
//       [name]: value
//     });
//   };

//   return (
//     <>
//       <div>
//         <label htmlFor="search">Search: </label>
//         <input type="text" id="search" value={searchTerm} onChange={handleSearch} />
//       </div>
//       <button onClick={onAddProduct}>Add Product</button>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedProducts.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => handleEdit(product.id)}>Edit</button>
//                 <button onClick={() => handleDeleteConfirmation(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         {editingProduct && (
//           <EditProductForm product={editingProduct} onEdit={handleEditComplete} />
//         )}
//       </div>
//     </>
//   );
// }

// export default Dashboard;
