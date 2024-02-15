import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      id: cards.length + 1,
      title: title,
      content: content,
      image: URL.createObjectURL(image) 
    };

    setCards([...cards, newCard]);
    setTitle('');
    setContent('');
    setImage(null);
  };

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };
  
  const handleRemoveCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dynamic Cards App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <button type="submit">Add Card</button>
        </form>
      </header>

      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            {card.image && <img src={card.image} alt="Card" />}
            <button className="close-button" onClick={() => handleRemoveCard(card.id)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
