import React from 'react';
import Form from './Form';

const Header = ({ addCard }) => {
  return (
    <header className="App-header">
      <h1>Dynamic Cards App</h1>
      <Form addCard={addCard} />
    </header>
  );
};

export default Header;
