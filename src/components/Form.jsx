import React from 'react';
import GenerateButton from './GenerateButton';

const Form = () => {
  return(
    <form className='form'>
      <span className='input-fields'>
        <input maxlength='30'/>
        <input maxlength='30'/>
      </span>
      <GenerateButton />
    </form>
  )
}

export default Form;