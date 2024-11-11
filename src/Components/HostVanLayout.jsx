import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HostVanLayout() {
  return (
    <nav className='host-van-layout'>
        <div className='van-host-details-links'>
            <NavLink 
                to="/host/vans/:id/details" 
                end className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Details
            </NavLink>

            <NavLink 
                to="/host/vans/:id/pricing"  
                className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Pricing
            </NavLink>

            <NavLink 
                to="/host/vans/:id/photos" 
                className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Photos
            </NavLink>
        </div>
    </nav>
  )
}
