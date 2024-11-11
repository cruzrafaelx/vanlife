import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './server.js';
import Layout from './Components/Layout.jsx';
import Home from './Pages/Vans/Home.jsx';
import About from './Pages/Vans/About.jsx';
import Vans from './Pages/Vans/Vans.jsx';
import VanDetail from './Pages/Vans/VanDetail.jsx';

import HostLayout from './Components/HostLayout.jsx';
import Dashboard from './Pages/Host/Dashboard.jsx';
import Income from './Pages/Host/Income.jsx';
import Reviews from './Pages/Host/Reviews.jsx';
import HostVans from './Pages/Host/HostVans.jsx';
import HostVansDetail from './Pages/Host/HostVansDetail.jsx';



function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />}></Route>
          <Route path="vans/:id" element={<VanDetail />}></Route>

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path='income' element={<Income />}></Route>
            <Route path='vans' element={<HostVans />}></Route>
            <Route path='vans/:id' element={<HostVansDetail />}></Route>
            <Route path='reviews' element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
