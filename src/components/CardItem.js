import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='card__item'>
          <figure className='cards__item__pic-wrap' data-category={props.name}>
            <img className='cards__item__img' alt='Cards' src={props.src} />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
