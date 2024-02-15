import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Cards = ({ cards, removeCard }) => {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h2>{card.title}</h2>
          <p>{card.content}</p>
          {card.image && <img src={card.image} alt="Card" />}
          <button className="close-button" onClick={() => removeCard(card.id)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
