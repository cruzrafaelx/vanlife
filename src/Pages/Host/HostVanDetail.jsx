import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Link, useParams, Outlet } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";
import HostVanLayout from '../../Components/HostVanLayout';

export default function HostVansDetail() {

  const params = useParams()
  const [hostVanDetails, setHostVanDetails] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      try{

        const response = await fetch(`/api/host/vans/${params.id}`)

        if(!response.ok){
          throw new Error("Network response was not ok")
        }

        const data = await response.json()
        setHostVanDetails(data.vans)
        console.log(data.vans)
      }

      catch(error){
        console.log(error)
      }

    }
    fetchData()
  },[])


  const hostVan = hostVanDetails.map(detail => (
    <div key={detail.id} className='host-van-details-card'>
        <img src={detail.imageUrl} className=''></img>
        <div className='host-van-details'>
          <span className={`van-host-desc-btn  ${detail.type}`}>{detail.type.charAt(0).toUpperCase() + detail.type.slice(1)}</span>
          <h1>{detail.name}</h1>
          <h1>€{detail.price}<span className='no-bold'>/day</span></h1>
        </div>
    </div>
  ))

  return (
    <div>
      <Link   to={".."}
              relative='path'
              className='host-van-back-link no-underline'><GoArrowLeft/>Back to all vans
      </Link>
      <div className='host-van-details-container'>
      
        {hostVan}
        
        <div className='host-van-details-links'>
            <NavLink 
                to="." 
                end className={({ isActive }) => `${isActive ? 'active-link' : ''}`}>
                Info
            </NavLink>

            <NavLink 
                to="pricing"  
                className={({ isActive }) => `${isActive ? 'active-link' : ''}`}>
                Pricing
            </NavLink>

            <NavLink 
                to="photos" 
                className={({ isActive }) => `${isActive ? 'active-link' : ''}`}>
                Photos
            </NavLink>
        </div>

        <div className='host-van-details-outlet'>
         {hostVanDetails.length > 0 ? <Outlet context={hostVanDetails}/> : <p>Loading data...</p>} 
        </div>
      </div>
    </div>
    
  )
}
