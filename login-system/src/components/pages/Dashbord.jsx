import React from 'react';
import DashboardData from '../data/DashboardData';
import Tom from '../../assets/tom-jerry.jpeg';
import Pingu from '../../assets/pingu.jpeg';
import Oswald from '../../assets/oswald-boat.png';
import Pokemon from '../../assets/Pokemon.jpg';
import Bunny from '../../assets/bunny.jpg';
import Mickey from '../../assets/mickey.jpg';
import Popeye from '../../assets/Popeye.jpg';
import ScoobyDoo from '../../assets/Scooby-Doo.jpg';
import Spd from '../../assets/spd.jpg';
import Train from '../../assets/thomas-train.jpg';

const cartoonsData = [
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
    title: 'Pokémon',
    image: Pokemon,
    description: 'Pingu is a 5-year-old boy penguin. Although he is quite cheeky and mischievous, Pingu has a good heart. However, he has caused some unexpected incidents when he does crazy things!',
  },
  {
    title: 'The Bugs Bunny Show',
    image: Bunny,
    description: 'The Bugs Bunny Show is an American animated anthology series that aired on ABC and CBS from 1960–1975. It features Looney Tunes and Merrie Melodies cartoons, including newly animated wraparounds, and is hosted by Bugs Bunny.',
  },
  {
    title: 'Mickey Mouse Clubhouse',
    image: Mickey,
    description: 'Mickey Mouse Clubhouse is an animated series for preschoolers that aired on Disney Channel from 2006–2016. The show features Mickey and his friends, including Minnie, Donald, Daisy, Goofy, and Pluto, as they interact with the viewer to solve problems.',
  },
  {
    title: 'Popeye',
    image: Popeye,
    description: 'Popeye is a scrappy little seaman with bulging forearms, a squinty eye, and a screwed-up face, punctuated with an ever-present pipe in his mouth.',
  },
  {
    title: 'Scooby-Doo, Where Are You!',
    image: ScoobyDoo,
    description: 'Scooby-Doo, American animated cartoon series featuring the adventures of Scooby-Doo, a talking Great Dane, and his mystery-solving teenage companions. The original Scooby-Doo-based cartoon series, Scooby-Doo, Where Are You! (1969–70), established the basic template for more than 30 years of stories.',
  },
  {
    title: 'Power Rangers S.P.D.',
    image: Spd,
    description: 'Saban Entertainment produced and distributed Power Rangers from 1993 until the end of 2001, with Fox Kids broadcasting the series in the United States until the Fall of 2002. ',
  },
  {
    title: 'Thomas & Friends',
    image: Train,
    description: 'This series follows the adventures of Thomas the Tank Engine and all of his engine friends on the Island of Sodor. This series follows the adventures of Thomas the Tank Engine and all of his engine friends on the Island of Sodor.',
  },
];

const Dashboard = () => {
  return (
    <div>
      <DashboardData cartoons={cartoonsData} />
    </div>
  );
};

export default Dashboard;
