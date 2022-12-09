import React from 'react'

function Button({type,name}) {
  return (
    <button className='children-btn'  type={type}>{name}</button>
  )
}

export default Button