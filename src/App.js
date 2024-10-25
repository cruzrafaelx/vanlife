import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import image54 from './bgImages/image54.png'
import image55 from './bgImages/image55.png'

function Home(){
  return(
    <div>
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
    <div>
      <Header/>

      <div>
        <img src={image55} alt='A boy sitting on a van looking up the stars'></img>
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
