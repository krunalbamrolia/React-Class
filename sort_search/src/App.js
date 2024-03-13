// App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard.jsx';
import NavBar from './NavBar.jsx';
import './style.css';
import EditProductForm from './EditProductForm.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' exect element={<Dashboard />} />
        <Route path='/update' exect element={<EditProductForm />} />
      </Routes>

    </div>
  );
}

export default App;

//------------------------------------------------------------
// import React, { useState } from 'react';
// import { Route, Routes } from "react-router-dom";
// import Dashboard from './Dashboard.jsx';
// import NavBar from './NavBar.jsx';
// import './style.css';
// import AddProductForm from './AddProductForm.jsx';
// import DeleteConfirmation from './DeleteConfirmation.jsx';
// import EditProductForm from './EditProductForm.jsx';

// function App() {
//   const [isAdding, setIsAdding] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);

//   const handleAddProduct = () => {
//     setIsAdding(!isAdding);
//   };

//   const handleDeleteProduct = (productId) => {
//     setIsDeleting(true);
//     setProductToDelete(productId);
//   };



//   const handleCancelDelete = () => {
//     setIsDeleting(false);
//     setProductToDelete(null);
//   };

//   return (
//     <div className="App">
//       <NavBar />
//       <Routes>
//         <Route path='/' exect element={<Dashboard onAddProduct={handleAddProduct} onDeleteProduct={handleDeleteProduct} />} />
//       </Routes>
//       {isAdding && <AddProductForm onAdd={handleAddProduct} />}
//       {isDeleting && <DeleteConfirmation onConfirm={handleDeleteProduct} onCancel={handleCancelDelete} />}
//     </div>
//   );
// }

// export default App;