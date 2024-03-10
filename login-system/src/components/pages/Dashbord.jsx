import React, { useState, useEffect } from 'react';
import DashboardData from '../data/DashboardData';
import NavBar from '../NavBar';
import Tom from '../../assets/tom-jerry.jpeg';
import Pingu from '../../assets/pingu.jpeg';
import Oswald from '../../assets/oswald-boat.png';
import Popeye from '../../assets/Popeye.jpg';
import Spd from '../../assets/spd.jpg';
import DoubleClickPopup from './DoubleClickPopup.jsx';

const defaultCartoonsData = [
  {
    title: 'Tom And Jerry',
    image: Tom,
    description: 'Tom and Jerry is an American cartoon series about a hapless cat\'s never-ending pursuit of a clever mouse. Tom is the scheming cat, and Jerry is the spunky mouse.',
  },
  {
    title: 'Pingu',
    image: Pingu,
    description: 'Pingu is a 5-year-old boy penguin. Although he is quite cheeky and mischievous, Pingu has a good heart. However, he has caused some unexpected incidents when he does crazy things!',
  },
  {
    title: 'Oswald',
    image: Oswald,
    description: "Oswald is an animated children's TV series that ran from 2001–2003. The show is about a blue octopus named Oswald who lives in Big City, a colorful world made up of anthropomorphic animals, mythological creatures, and humanoid beings.",
  },
  {
    title: 'Power Rangers S.P.D.',
    image: Spd,
    description: 'Saban Entertainment produced and distributed Power Rangers from 1993 until the end of 2001, with Fox Kids broadcasting the series in the United States until the Fall of 2002. ',
  },
  {
    title: 'Popeye',
    image: Popeye,
    description: 'Popeye is a scrappy little seaman with bulging forearms, a squinty eye, and a screwed-up face, punctuated with an ever-present pipe in his mouth.',
  },
];

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    const storedCartoons = JSON.parse(localStorage.getItem('cartoons'));
    setCartoons(storedCartoons || defaultCartoonsData);
  }, []);

  const handleDoubleClick = (index) => {
    setSelectedCard(index);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const handleAddCard = (newCard) => {
    const updatedCartoons = [...cartoons, newCard];
    setCartoons(updatedCartoons);
    localStorage.setItem('cartoons', JSON.stringify(updatedCartoons));
    handleClosePopup();
  };

  const handleDeleteCard = (index) => {
    const updatedCartoons = cartoons.filter((_, i) => i !== index);
    setCartoons(updatedCartoons);
    localStorage.setItem('cartoons', JSON.stringify(updatedCartoons));
  };

  return (
    <div>
      <NavBar onAddCard={handleAddCard} />
      <DashboardData cartoons={cartoons} onDoubleClick={handleDoubleClick} onDelete={handleDeleteCard} />
      {selectedCard !== null && (
        <DoubleClickPopup
          cartoon={cartoons[selectedCard]}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Dashboard;