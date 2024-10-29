import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from "react";
import './App.css';
import './server.js';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Vans from './Components/Vans';


function App() {


  //useState to store the van data from mirage server
  const [vanList, setVanList] = useState([])
  // const [error, setError] = useState(null)


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

  console.log(vanList)



 
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans vanList={vanList}/>}></Route>
      </Routes>
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
