import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">

        <div className="navbar-left">
            <a href="/" className="homeLink">
            <img src="./HUNTERS'xTAVERN.png" alt="HUNTERS' TAVERN" className="logo" />
            </a>
        </div>


        <div className="navbar-center">
          <ul className="nav-links">
              <li>
                <a href="/popular">Popular</a>
              </li>
              <li>
                <a href="/lore">Lore</a>
              </li>
              <li>
                <a href="/manga">Manga</a>
              </li>
              <li>
                <a href="/anime">Anime</a>
              </li>
          </ul>
        </div>


        <div className="navbar-right">
            <a href="/notifications" className="noti-icon">
              <img src="./notiIcon.svg" alt="Notifications" />
            </a>
            <a href="/account" className="user-icon">
              <img src="./userIcon.svg" alt="Account" />
            </a>
        </div>

    </nav>
  )
}


export default Navbar;