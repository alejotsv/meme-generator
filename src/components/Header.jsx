import React from 'react';
import trollface from '../assets/trollface.png';

const Header = () => {
  return(
    <header className='header'>
      <div className ='header-logo'>
        <img src={trollface} />
        Meme Generator
      </div>
      <div className='header-title'>
        React Course - Project 3
      </div>      
    </header>      
  )
}

export default Header;