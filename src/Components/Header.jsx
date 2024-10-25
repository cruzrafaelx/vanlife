import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
        <img src="./images/logog.png" className='logo' alt="background-image"></img>
        <div className='links-container'>
            <Link to="/about">About</Link>
            <Link to="/about">Vans</Link>
        </div>
  </header>
  )
}
