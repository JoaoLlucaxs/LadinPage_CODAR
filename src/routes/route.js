import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import BudGet from '../pages/Budget/Budget'

function route() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/budget' element={<BudGet/>}/>
   </Routes>
  )
}

export default route