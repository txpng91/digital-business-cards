import React from 'react';

import Card from './Card';

import Pete from './images/people/Pete.png';
import Michael from './images/people/Michael.png';
import Samuel from './images/people/Samuel.png';
import Anna from './images/people/Anna.png';
import Olivia from './images/people/Olivia.png';

const members = [
  {
    name: 'Pete Garcia',
    image: Pete,
    occupation: 'Front-End Developer',
    description: 'Working to be a front-end developer',
    interest1: 'Gaming',
    interest2: 'Football',
    interest3: 'Work Out',
    interest4: 'Watch Anime',
  },
  {
    name: 'Michael',
    image: Michael,
    occupation: 'Gas Deliverer',
    description: 'Married to Olivia with two kids',
    interest1: 'Going to Disney World',
    interest2: 'Football',
    interest3: 'Exploring',
    interest4: 'Watching Movies',
  },
  {
    name: 'Samuel Garcia',
    image: Samuel,
    occupation: 'General Manager',
    description: 'Married to Anna with two kids',
    interest1: 'Football',
    interest2: 'Family Vacations',
    interest3: 'Cooking',
    interest4: 'Card Games',
  },
  {
    name: 'Anna Garcia',
    image: Anna,
    occupation: 'Photographer',
    description: 'Married to Samuel with two kids',
    interest1: 'Football',
    interest2: 'Photography',
    interest3: 'Editing',
    interest4: 'Family Vacation',
  },

  {
    name: 'Olivia Garcia',
    image: Olivia,
    occupation: 'Customer Service Representative',
    description: 'Married to Michael with two kids',
    interest1: 'Reality TV Shows',
    interest2: 'Watching Movies',
    interest3: 'Staying at home',
    interest4: 'Exploring',
  },
];

function Cards() {
  return (
    <div className='column'>
      <div className='row'>
        {members.map((member, index) => {
          return <Card {...member} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
