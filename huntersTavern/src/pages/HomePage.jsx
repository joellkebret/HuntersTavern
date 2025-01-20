import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
    return (
      <div className='WelcomeContainer'>
          <div className='welcomeImg'>
              <img src='./welcomeImg.jpg' alt='Welcome Image' />
          </div>
          <div className='welcomeMsg'>
              <h1>
                  Welcome to The Hunter's Tavern! Your ultimate Hunter x Hunter sanctuary, where fans gather to explore deep lore, lively forums, and the latest buzz from the web. Dive into dedicated sections for anime and manga, and relive your favorite moments. Enter The Hunter's Tavern, where your next Hunter x Hunter discovery awaits!
              </h1>
          </div>
      </div>
    );
  }

export default HomePage;
