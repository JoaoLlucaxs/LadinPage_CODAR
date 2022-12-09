import {Link} from 'react-router-dom'
import React,{useRef} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

function Header() {
  const navRef=useRef()
  
  const showNaVbar=()=>{
    navRef.current.classList.toggle("responsive")
  }

  return (
    <header>
           <h3>CO<span>D</span>AR</h3>

           <nav className="links" ref={navRef}>
                    <a href='/'>Inicio</a>
                    <a href='/'>Serviço</a>
                    <a href='/'>Contato</a>
                    <a href='/'>Login</a>
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