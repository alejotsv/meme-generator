import React from 'react';
import GenerateButton from './GenerateButton';
import InputFields from './InputFields';

const Top = () => {
  return(
    <div className='top-content'>
      <InputFields />
      <GenerateButton />
    </div>
  )
}

export default Top;