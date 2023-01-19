import React from 'react';
import Form from './Form';
import MemeImg from './MemeImg';
import GenerateButton from './GenerateButton';

const Top = () => {
  const clicker = () => {
    console.log('clicked');
  }
  return(
    <div className='top-content'>
      <Form />       
      <GenerateButton />      
      <MemeImg />  
    </div>
  )
}

export default Top;