import React from 'react';
import memesData from '../assets/memesData';
import { useState } from 'react';

const GenerateButton = () => {
  const [memeImg, setMemeImg] = useState(null);

  const getRandomMeme = () => {
    let ran = Math.floor(Math.random()*memesData.data.memes.length);
    let memeUrl = memesData.data.memes[ran].url;    
    setMemeImg(memeUrl);
  }

  return(
    <div>
      <span className='generate-button'>
        <button onClick={getRandomMeme} >Get a new meme image 🖼</button>
      </span>
      <div className='meme-img'>
        <img src={memeImg} />
        <p className='top-text'>Top text</p>
        <p className='bottom-text'>Bottom text</p>
      </div>
    </div>
  )
}

export default GenerateButton;