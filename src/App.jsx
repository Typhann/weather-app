import { Suspense, useState } from 'react'
import Navbar from "./components/Navbar"
import React from 'react'
import Weather from "./Weather"
import News from './News'



function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
      document.body.style = darkMode ? 'background: white;' : 'background: rgb(45, 45, 45);';
  }


  return (
    <>
    <Suspense fallback={<div className='loading'>Loading...</div>}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className={darkMode ? "dark" : ""}> 
        <Weather darkMode={darkMode} />
        <News darkMode={darkMode} />
      </main>
    </Suspense>
    </>
 
  )
}

export default App

