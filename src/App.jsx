import React from 'react'
import Navitems from './navbar/Navitems'
import { Outlet } from 'react-router-dom'
import Footer from './fotter/Footer'

const App = () => {
  return (
    <div>
      <Navitems/>
    <Outlet/>
      <Footer/>
    </div>
  )
}

export default App