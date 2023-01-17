import React from 'react';
import GenerateButton from './GenerateButton';

const Form = () => {
  return(
    <form className='form'>
      <span className='input-fields'>
        <input type='text' maxLength='30'/>
        <input type='text' maxLength='30'/>
      </span>
      <GenerateButton />
    </form>
  )
}

export default Form;