import React from 'react';

function Cards() {
  return (
    <div className='column'>
      <div className='row'>
        <div className='card'>
          <img className='card-image' src='Pete.png' alt='Pete' />
          <div className='container'>
            <h3>
              <b>Nicholas Garcia</b>
            </h3>
            <p>Front-End Developer</p>
            <div className='btn-container'>
              <button className='email-btn'>Email</button>
              <button className='linkedIn-btn'>LinkedIn</button>
            </div>
            <h4>
              <b>About Me</b>
            </h4>
            <p>Growing to be a frontend developer.</p>
            <h4>Interests</h4>
            <ul>
              <li>Football</li>
              <li>Cooking</li>
              <li>Exploring cities</li>
              <li>Going to the gym</li>
            </ul>
          </div>
        </div>
        <div className='card'>
          <img className='card-image' src='Samuel.png' alt='Samuel' />
          <div className='container'>
            <h3>
              <b>Mathew Garcia</b>
            </h3>
            <p>General Manager</p>
            <div className='btn-container'>
              <button className='email-btn'>Email</button>
              <button className='linkedIn-btn'>LinkedIn</button>
            </div>
            <h4>
              <b>About Me</b>
            </h4>
            <p>
              Married to Elise Garcia with two children, Leon and Mia Garcia
            </p>
            <h4>Interests</h4>
            <ul>
              <li>Music</li>
              <li>Card Games</li>
              <li>Socializing</li>
            </ul>
          </div>
        </div>
        <div className='card'>
          <img className='card-image' src='Michael.png' alt='Michael' />
          <div className='container'>
            <h3>
              <b>Nash Garcia</b>
            </h3>
            <p>Gas Delivery Driver</p>
            <div className='btn-container'>
              <button className='email-btn'>Email</button>
              <button className='linkedIn-btn'>LinkedIn</button>
            </div>
            <h4>
              <b>About Me</b>
            </h4>
            <p>
              Married to Hope Garcia with two children, Nakoa and Ahanu Garcia
            </p>
            <h4>Interests</h4>
            <ul>
              <li>Watching movies</li>
              <li>Disney World</li>
              <li>Crypto currency</li>
            </ul>
          </div>
        </div>
        <div className='card'>
          <img className='card-image' src='Anna.png' alt='Anna' />
          <div className='container'>
            <h3>
              <b>Elise Garcia</b>
            </h3>
            <p>Bank Associate</p>
            <div className='btn-container'>
              <button className='email-btn'>Email</button>
              <button className='linkedIn-btn'>LinkedIn</button>
            </div>
            <h4>
              <b>About Me</b>
            </h4>
            <p>
              Married to Matthew Garcia with two children, Leon and Mia Garcia
            </p>
            <h4>Interests</h4>
            <ul>
              <li>Photography</li>
              <li>Dogs</li>
              <li>Socializing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
