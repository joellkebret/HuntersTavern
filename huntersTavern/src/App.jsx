import { useState } from 'react'
import './App.css'
import Background from './background'
import Header from './Sections/header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import pages
import HomePage from './pages/HomePage.jsx';
import PopularPage from './pages/PopularPage.jsx';
import LorePage from './pages/LorePage.jsx';
import ForumPage from './pages/ForumPage.jsx';
import AnimePage from './pages/AnimePage.jsx';
import MangaPage from './pages/MangaPage.jsx';

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
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/lore" element={<LorePage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/manga" element={<MangaPage />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
