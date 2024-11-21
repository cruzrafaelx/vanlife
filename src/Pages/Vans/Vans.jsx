import {useState, useEffect} from "react";
import { Link, useSearchParams } from 'react-router-dom';

function Vans() {

//useSearchParams
const [searchParams, setSearchParams] = useSearchParams()
const typeFilter = searchParams.get("type")

console.log(searchParams.toString())

 //useState to store the van data from mirage server
 const [vanList, setVanList] = useState([])

 function handleFilterChange(key, value){

    setSearchParams(prevParams => {
      if(value === null){
        prevParams.delete(key)
      } else{
        prevParams.set(key, value)
      }
      return prevParams
    })

 }

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

 //searchParams filter
 const filteredVanList = typeFilter 
 ? vanList.filter( van => van.type === typeFilter.toLowerCase())
 : vanList

const vans =  filteredVanList.map( van => { 
    return(
    <Link to={van.id}
          state={{search: searchParams.toString()}}
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
            <button 
            onClick={() => handleFilterChange("type", "simple")} 
            className={`filter-btn simple 
            ${typeFilter === "simple" ? "select" :""}`}>
            Simple</button>
            
            <button 
            onClick={() => handleFilterChange("type", "luxury")} 
            className={`filter-btn luxury 
            ${typeFilter === "luxury" ? "select" :""}`}>
            Luxury</button>

            <button 
            onClick={() => handleFilterChange("type", "rugged")} 
            className={`filter-btn rugged 
            ${typeFilter === "rugged" ? "select" :""}`}>
            Rugged</button>

            {typeFilter ? 
            (<button onClick={() => handleFilterChange("type", null)} className="clear-btn">Clear</button>) :
            null
            }  
            
        </div>
        <div className="vans-list-container">
            {vans}
        </div> 
    </div>
  )
}

export default Vans