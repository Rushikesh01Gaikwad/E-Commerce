import './App.css';
import Navbar from './header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Allsidebar from './sidebarcontents/Allsidebar';
import Allpopup from './popups/Allpopup';
import Alldives from './shopdives/Alldives';
import Aboutus from './footer/Aboutus';
import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maincard from './shopdives/Maincard';
import Menscatagory from './Catagories/Menscatagory';
import Womenscatagory from './Catagories/Womenscatagory';
import Electronicscat from './Catagories/Electrocatagory';
import Jwellerycatagory from './Catagories/Jwellerycatagory';
import Flipflop from './Catagories/Flipflop';
import Goggles from './Catagories/Goggles';
import Hatcat from './Catagories/Hatcat';
import Keychain from './Catagories/Keychain';
import Makupkit from './Catagories/Makupkit';
import Shoes from './Catagories/Shoes';
import Showpiece from './Catagories/Showpiece';
import Swetors from './Catagories/Swetors';
import Viewcards from './shopdives/Viewcards';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Header/>
        <Allsidebar/>
        <Allpopup/>
        <Routes>
          <Route path='/' element={<Alldives/>}></Route>
          <Route path='/mens' element={<Menscatagory/>}></Route>
          <Route path='/women' element={<Womenscatagory/>}></Route>
          <Route path='/electronics' element={<Electronicscat/>}></Route>
          <Route path='/jwellery' element={<Jwellerycatagory/>}></Route>
          <Route path='/flipflop' element={<Flipflop/>}></Route>
          <Route path='/hat' element={<Hatcat/>}></Route>
          <Route path='/Goggles' element={<Goggles/>}></Route>
          <Route path='/Keycains' element={<Keychain/>}></Route>
          <Route path='/makupkits' element={<Makupkit/>}></Route>
          <Route path='/shoes' element={<Shoes/>}></Route>
          <Route path='/showpiece' element={<Showpiece/>}></Route>
          <Route path='/swetors' element={<Swetors/>}></Route>
          <Route path='/products' element={<Viewcards/>}></Route>
          <Route path='/Mainproduct' element={<Maincard/>}></Route>
        </Routes>
        <Aboutus/>
        <Footer/>
      </BrowserRouter>
      </>
  );
}

export default App;
