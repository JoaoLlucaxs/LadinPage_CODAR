import React,{useEffect} from 'react'

function Head({title,description}) {
  useEffect(() => {
    if( document.title === null)return
    document.title=title
    document.querySelector('meta[name="description"]').setAttribute('content',description)
  },[title,description]);

  return (
    <div></div>
  )
}

export default Head