import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";


export default function VanDetail() {

    const [van, setVan] = useState(null)

    const params = useParams()
    console.log(params.id)
    
    useEffect(()=>{

        const fetchData = async () => {

            const response = await fetch(`/api/vans/${params.id}`)

            try {
                if(!response.ok){
                    throw new Error("Response was not ok")
                }
                
                const data = await response.json()
                setVan(data.vans)
                console.log(van)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        console.log(van)
    },[params.id])




//   if(!van){
//     return <p>Loading...</p>
//   }    
  
  return (
    <div className='van-detail-container'>
    {van ? (
        <div className='van-detail'>
            <Link   to={'/Vans'}
                    className='back-link'><GoArrowLeft/>Back to all vans</Link>
            <img className='van-img' src={van.imageUrl} alt='a van' ></img>
            <span className={`van-desc ${van.type}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</span>
            <h1>{van.name}</h1>
            <h3>€{van.price}<span>/day</span></h3>
            <p>{van.description}</p>
            <button className='van-det-btn'>Rent this van</button>
        </div>
        
    ) : <h2>Loading...</h2>
    }
        
    </div>
    
  )
}
