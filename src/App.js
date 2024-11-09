import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import './server.js';
// import Header from './Pages/Header.jsx';
// ;
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Vans from './Pages/Vans.jsx';
import VanDetail from './Pages/VanDetail.jsx';
import Layout from './Components/Layout.jsx';


function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/vans/:id" element={<VanDetail />}></Route>
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
