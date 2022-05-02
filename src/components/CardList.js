import React from 'react';
import CardItem from './CardItem';
import '../css/cards.css';

function CardList() {
  return (
    <div className='cards'>
      <h1 className='card__header'>
        Here are different style cards I'm working on!
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Pete.png'
              text='ECPI University graduate working at becoming a React Developer.'
              name='Nicholas Garcia'
            />
            <CardItem
              src='Michael.png'
              text='Married to Olivia Garcia with two children, Nakoa and Ahanu Garcia.'
              name='Nash Garcia'
            />
            <CardItem
              src='Olivia.png'
              text='Married to Michael Garcia with two children, Nakoa and Ahanu Garcia.'
              name='Hope Garcia'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Samuel.png'
              text='Married to Anna Garcia with having children, Leon and Mia Garcia.'
              name='Matthew Garcia'
            />
            <CardItem
              src='Anna.png'
              text='Married to Samuel Garcia with two children, Leon and Mia Garcia.'
              name='Elise Garcia'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardList;
