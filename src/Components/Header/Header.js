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
           <h3>SOCIAL<span>MEN</span>TE</h3>
           <nav className="links" ref={navRef}>
              <a href='/'>Inicio</a>
              <button onClick={clickModal}>
              <Link to='/details'>Referência</Link>
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