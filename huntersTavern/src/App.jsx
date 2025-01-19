import { useState } from 'react'
import './App.css'
import Background from './background'
import Header from './Sections/header.jsx'

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
