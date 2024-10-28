import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import image54 from './bgImages/image54.png'
import image55 from './bgImages/image55.png'

function Home(){
  return(
    <div className='home'>
      <Header/>

      <div className='hero-container' style={{
        backgroundImage: `url(${image54})`,
        backgroundPosition: `center`,
        }}>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button>Find your van</button>
      </div>

      <Footer/>
    </div>
  )
}

function About(){
  return(
    <div className='about'>
      <Header/>
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

      <Footer/>
    </div>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
