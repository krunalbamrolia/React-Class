import React, { useEffect, useState, useRef } from 'react';
// import { getAllData, saveItem, updateItem, deleteItem } from './firebase/functions/function';
import { getAllData, saveItem } from './firebase/functions/function';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const fname = useRef();
  const email = useRef();

  const fetchData = async () => {
    const data = await getAllData();
    setItems(data);
  };

  const save = async () => {
    const data = {
      fname: fname.current.value,
      email: email.current.value,
    };
    await saveItem(data);
    fetchData(); // Refresh data after saving
  };

//   const update = async (id) => {
//     const data = {
//       fname: fname.current.value,
//       email: email.current.value,
//     };
//     await updateItem(id, data);
//     fetchData(); // Refresh data after updating
//   };

//   const remove = async (id) => {
//     await deleteItem(id);
//     fetchData(); // Refresh data after deleting
//   };

  useEffect(() => {
    fetchData(); // Load data on initial render
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <input type="text" ref={fname} placeholder="First Name" />
        <input type="text" ref={email} placeholder="Email" />
        <button onClick={save}>Add</button>
      </div>

      <h3>Items List</h3>
      <ul>
        {items.map(({ id, data }) => (
          <li key={id}>
            {data.fname} - {data.email}
            {/* <button onClick={() => update(id)}>Update</button>
            <button onClick={() => remove(id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
