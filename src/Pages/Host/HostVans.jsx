import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HostVans() {
  
  const [hostVanList, setHostVanList] = useState([])
  
 
  useEffect(()=> {

    const fetchData = async () => {

      const response = await fetch("/api/host/vans")
      try{
        
        if(!response.ok){
          throw new Error("Response was not ok")
        }

        const data = await response.json()
        setHostVanList(data.vans)
        console.log(hostVanList)
      }

      catch(error){
        console.log(error)
      }

    }

    fetchData()

  },[])

  const vanList = hostVanList.map((van) => (
    <Link to={`/host/vans/${van.id}`} className='no-underline no-hover-active'>
      <div key={van.id} className='host-van-card'>
        <img src={van.imageUrl} alt={`An image of the ${van.name} van`}></img>
        <div className='host-van-details'>
          <h3 className='host-van-name'>{van.name}</h3>
          <p className='host-van-price'>€{van.price}/day</p>
        </div>
      </div>
    </Link>
  ))  

  
  return (
    <>
      {
        hostVanList ?
        <div className='host-van-container'>
          <h1 className='host-van-title'>Your Listed Vans</h1> 
          <div className='host-van-list-container'>
            {vanList}
          </div>
        </div>
        :
        <h1>Loading...</h1> 
      }
    </>
  )
}
