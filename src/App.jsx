import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';

function App() {

  const[location , setLocation] = useState();
  const [openDropDown, setOpenDropDown] = useState(false);


  const getLocation = async ()=>{
    navigator.geolocation.getCurrentPosition(async (pos) =>{
      const{latitude, longitude} = pos.coords;
      // console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org./reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const location = await axios.get(url);

        const exactLocation = location.data.address;
        setLocation(exactLocation)
        toast.success("Location detected successfully");
        setOpenDropDown(false);
      } catch (error) {
        console.log(error);
        toast.error("Error detecting location");
        setOpenDropDown(false);
      }
    })
  }

  // useEffect(()=>{
  //   getLocation();
  // },[])

  return (
  <BrowserRouter>
    <ToastContainer/>
    
      <NavBar location={location} getLocation={getLocation} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown} />


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>

      <Footer></Footer>
  </BrowserRouter>
  )
}

export default App
