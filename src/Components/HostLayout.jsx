import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HostLayout() {
  return (
    <nav className='host-layout'>
        <div className='links-container host-links'>
            <NavLink 
                to="/host" 
                end className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Dashboard
            </NavLink>

            <NavLink 
                to="/host/income" 
                className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Income
            </NavLink>

            <NavLink 
                to="/host/vans" 
                className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Vans
            </NavLink>

            <NavLink 
                to="/host/reviews" 
                className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Reviews
            </NavLink>
        </div>
        <Outlet />
    </nav>

  )
}
