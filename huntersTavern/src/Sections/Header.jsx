import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const navigate = useNavigate();

  // Get userName from localStorage
  const userName = localStorage.getItem('userName');

  // Logout function to remove user info and redirect
  const handleLogout = () => {
    localStorage.removeItem('userName'); // Remove the stored user email
    navigate('/login');  // Redirect to login page
  };

  return (
    <div className='topContainer'>
      <header className='header__topContainer'>
        <div className="headerContainer">
          <nav className="navbar">
            <a href="/" className="homeLink">
              <img src="./HUNTERS'xTAVERN.png" alt="Hunters' Tavern Logo" className="logo" />
            </a>

            <div className="navbar-center">
              <ul className="nav-links">
              <li><Link to="/chat">Chat</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/characters">Characters</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              </ul>
            </div>

            <div className="navbar-right">
              <a href="/notifications" className="noti-icon">
                <img src="./notiIcon.svg" alt="Notifications Icon" />
              </a>

              {userName ? (
                <div className="user-info">
                  <p className='user-name'>Hello, {userName}</p>
                  <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <button className='LoginButton'>
                  <Link to="/login" className="user-icon">
                    <img src="./userIcon.svg" alt="User Account Icon" />
                    <p className='signText'>Login</p>
                  </Link>
                </button>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
