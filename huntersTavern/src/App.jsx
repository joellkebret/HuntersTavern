import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './background'

function App() {

  const imageUrl = '/background.jpg';


  return (



    <div>

      <Background imageUrl={imageUrl} />


      <h1>Welcome to My App</h1>
      
    </div>
  )
}

export default App
