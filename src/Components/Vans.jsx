
function Vans({vanList}) {

const vans =  vanList.map( van => { 

    const btn = 
    van.type === "simple" ? "simple" :
     van.type === "rugged" ? "rugged" : "luxury"
         

    return(
    <div key={van.id} className="van-card">
        <img className="van-img" src={van.imageUrl} alt={`the van ${van.name}`}/>
        <div className="van-desc-container">
            <div className="van-desc-top">
                <p className="van-name">{van.name}</p>
                <p className="van-price">€{van.price}/day</p>
            </div>
            <button className={`van-desc-btn ${btn}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</button>
        </div>
    </div>
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