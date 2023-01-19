import React from 'react';
import memesData from '../assets/memesData';

const GenerateButton = () => {

  const getRandomMeme = () => {    
    let ran = Math.floor(Math.random()*100 + 1);
    let memeUrl = memesData.data.memes[ran].url;
    console.log(memeUrl);
  }

  return(
    <span className='generate-button'>
      <button onClick={getRandomMeme} >Get a new meme image 🖼</button>
    </span>
  )
}

export default GenerateButton;