import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Background from './background'
import Header from './Sections/Header.jsx'

function App() {

  const imageUrl = '/background.jpg';


  return (
    <>

      <Header/>
      <Background imageUrl={imageUrl} />

    

    </>
  )
}

export default App
