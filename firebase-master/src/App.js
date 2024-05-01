import React from 'react';
import EmployeeCRUD from './EmployeeCRUD';
import './App.css';

function App() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">Employee Management</h1>
      <EmployeeCRUD />
    </div>
  );
}

export default App;
