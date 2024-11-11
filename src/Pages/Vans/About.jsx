import image55 from '../../bgImages/image55.png'



export default function About(){
    return(
      <div className='about'>
        
        <img src={image55} 
               class='about-img'
               alt='A boy sitting on a van looking up the stars'>
          </img>
  
        <div className='about-container'>
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
          <br/>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          <div className='about-explore-container'>
            <h1>Your destination is waiting. <br/> Your van is ready.</h1>
            <a href='#'>Explore our vans</a>
          </div>
        </div>
      </div>
    )
  }