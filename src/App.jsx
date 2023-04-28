import { useState } from 'react'

import './App.css'
import { Route,Routes,Link } from 'react-router-dom'
import AddCategories from './Pages/AddCategories'
import AllCategories from './Pages/AllCategories'
import AddProducts from './Pages/AddProducts'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/addcategories' element={<AddCategories/>}/>
        <Route path='/allcategories' element={<AllCategories/>}/>
        <Route path='/addproducts' element={<AddProducts/>}/>


      </Routes>      
    </>
  )
}

export default App
