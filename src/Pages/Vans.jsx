import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

function Vans() {

 //useState to store the van data from mirage server
 const [vanList, setVanList] = useState([])

 //useEffect to fetch data from server
 useEffect(()=> {

   const fetchData = async () => {

     try{
       const response = await fetch("api/vans")
       if(!response.ok){
         throw new Error("Network response was not ok")
       }
       const result = await response.json()
       setVanList(result.vans)
     }

     catch(error){
       console.log(error)
     }

     //you can also add a finally block if you want to add a loading function

   }

   fetchData()

 }, [])


const vans =  vanList.map( van => { 

    return(
    <Link to={`/Vans/${van.id}`}
          className="no-underline"
          aria-label={`View details for ${van.name}, 
          priced at $${van.price} per day`}
    >
      <div key={van.id} className="van-card">
          <img className="van-img" src={van.imageUrl} alt={`the van ${van.name}`}/>
          <div className="van-desc-container">
              <div className="van-desc-top">
                  <p className="van-name">{van.name}</p>
                  <p className="van-price">€{van.price}/day</p>
              </div>
              <button className={`van-desc-btn ${van.type}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</button>
          </div>
      </div>
    </Link>
    )
})


  return (
    <div className="vans-container">
        <h1>Explore our van options</h1>
        <div className="filter-btns">
            <button className="filter-btn">Simple</button>
            <button className="filter-btn">Luxury</button>
            <button className="filter-btn">Rugged</button>
            <button className="clear-btn">Clear filters</button>
            
        </div>
        <div className="vans-list-container">
            {vans}
        </div> 
    </div>
  )
}

export default Vans