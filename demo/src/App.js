
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Hello
//         </p>
        
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputFields, setInputFields] = useState([{ id: 0, value: '' }]);
  const [idCounter, setIdCounter] = useState(1);

  const handleAddFields = () => {
    const newInputFields = [...inputFields];
    newInputFields.push({ id: idCounter, value: '' });
    setIdCounter(idCounter + 1);
    setInputFields(newInputFields);
  };

  const handleInputChange = (id, event) => {
    const newInputFields = inputFields.map(field => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setInputFields(newInputFields);
  };

  const handleRemoveFields = id => {
    const newInputFields = inputFields.filter(field => field.id !== id);
    setInputFields(newInputFields);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputFields);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {inputFields.map(field => (
          <div key={field.id}>
            <input
              type="text"
              value={field.value}
              onChange={e => handleInputChange(field.id, e)}
            />
            <button type="button" onClick={() => handleRemoveFields(field.id)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddFields}>
          Add Input Field
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
