import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
// import Search from './components/Search'

function App() {
  

  return (
    <>
     <Header />
     
     <Outlet />
     

    </>
  )
}

export default App
