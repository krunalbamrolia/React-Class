import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const removeCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className="App">
      <Header addCard={addCard} />
      <Cards cards={cards} removeCard={removeCard} />
    </div>
  );
}

export default App;
