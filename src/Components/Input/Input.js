import React from 'react'

function Input({type,onChange,placeholder}) {
  return (
 <input className='input' type={type} placeholder={placeholder}
 onChange={onChange}/>
  )
}

export default Input