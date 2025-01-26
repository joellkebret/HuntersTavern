import { useState } from 'react'
import './App.css'
import Background from './background'
import Header from './Sections/header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import pages
import HomePage from './pages/HomePage.jsx';
import PopularPage from './pages/PopularPage.jsx';
import CharacterPage from './pages/CharacterPage.jsx';
import ForumPage from './pages/ForumPage.jsx';
import AnimePage from './pages/AnimePage.jsx';
import MangaPage from './pages/MangaPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

function App() {

  const imageUrl = '/background.jpg';


  return (
    <>
        <Router>
      {/* Header is always displayed */}
      <Header />

      {/* Background is always displayed */}
      <Background imageUrl={imageUrl} />

      {/* Routes for the content of the app */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular" element={<ErrorPage/>} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Sign-Up" element={<SignupPage/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
