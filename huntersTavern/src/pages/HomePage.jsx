import React from 'react';
import '../styles/HomePage.css';
import { useLocation } from 'react-router-dom';


function HomePage() {
    const location = useLocation();
    const userName = location.state?.id || localStorage.getItem('userName');

    return (
        <div className='HomeContainer'>
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

            <div className='aboutContainer'>
                <div className='aboutTitle'>
                    <h2>About Hunter x Hunter</h2>
                </div>
                <div className='aboutText'>
                    <h1>Hunter x Hunter follows Gon Freecss, a boy who discovers his father is a legendary Hunter, and embarks on a journey to become one. He meets friends and faces dangerous foes in a world filled with mysterious creatures and powerful Nen users. The manga, created by Yoshihiro Togashi, debuted on March 16, 1998, in Weekly Shonen Jump.</h1>
                </div>
            </div>


            {/* <h3>Hello {userName|| "Guest"}, welcome to the home</h3> */}
        </div>
    );
}

export default HomePage;
