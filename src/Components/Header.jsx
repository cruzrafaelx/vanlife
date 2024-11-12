import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <header className='header'>
        <NavLink to="/">
            <img src="./images/logog.png" className='logo' alt="background-image"/>        
        </NavLink>

        <div className='header-links links-container'>
            <NavLink 
                to="/host" 
                className={({isActive}) => isActive ? 'active-link' : ''}>
                Host
            </NavLink>

            <NavLink 
                to="/about" 
                className={({isActive}) => isActive ? 'active-link' : ''}>
                About
            </NavLink>

            <NavLink 
                to="/vans" 
                className={({isActive}) => isActive ? 'active-link' : ''}>
                Vans
            </NavLink>
        </div>
  </header>
  )
}
