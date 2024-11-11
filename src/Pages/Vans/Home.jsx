import image54 from '../../bgImages/image54.png'

export default function Home(){
    return(
      <div className='home'>
        <div className='hero-container' style={{
          backgroundImage: `url(${image54})`,
          backgroundPosition: `center`,
          }}>
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button>Find your van</button>
        </div>
      </div>
    )
  }
  