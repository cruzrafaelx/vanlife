import React from 'react'
import { NavLink} from 'react-router-dom'

export default function HostVanLayout() {
  return (
    <nav className='host-van-layout'>
        <div className='van-host-details-links'>
            <NavLink 
                to="." 
                end className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Info
            </NavLink>

            <NavLink 
                to="pricing"  
                className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Pricing
            </NavLink>

            <NavLink 
                to="photos" 
                className={({ isActive }) => `hover ${isActive ? 'active-link' : ''}`}>
                Photos
            </NavLink>
        </div>
    </nav>
  )
}
