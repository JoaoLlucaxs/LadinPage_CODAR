import {Link} from 'react-router-dom'
import React,{useRef, useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

function Header() {
  const navRef=useRef()
  const[modal,setModal]=useState(false)
  
  const showNaVbar=()=>{
    navRef.current.classList.toggle("responsive")
  }

  const clickModal=(e)=>{
    e.preventDefault();
    setModal(true)
  }

  return (
    <header>
           <h3>CO<span>D</span>AR</h3>

           <nav className="links" ref={navRef}>
              <a href='/'>Inicio</a>
              <a href='/'>Serviços</a>
              <a href='/'>Contato</a>
              <button onClick={clickModal}>
              <a href='/'>Planos</a>
              </button>    
              
                    <button className='nav-btn nav-close-btn' onClick={showNaVbar}>
                      <FaTimes/>
                    </button>
            </nav>
          <button className='nav-btn' onClick={showNaVbar}>
            <FaBars/>
          </button>
    </header>
  )
}

export default Header