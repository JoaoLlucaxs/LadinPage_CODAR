import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import { Detalhes } from '../Components/Detalhes/Detalhes'

function route() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/details' element={<Detalhes/>}/>
   </Routes>
  )
}

export default route