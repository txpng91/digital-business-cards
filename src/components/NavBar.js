import React from 'react';
import '../css/style.css';

function NavBar() {
  return (
    <nav className='navbar'>
      <img className='nav-icon' src='favicon.ico' alt='React' />
      <h3 className='nav-logo'>React Development</h3>
      <h4 className='nav-title'>Digital Business Cards</h4>
    </nav>
  );
}

export default NavBar;
