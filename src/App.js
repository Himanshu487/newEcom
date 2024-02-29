import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import FuncHandler from './hooks/FuncHandler';
import { useGlobalContext } from './hooks/DataMain';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import Footer from './components/Footer';
import FloatingActionBtn from './components/FloatingActionBtn';
// import CustomerR from './components/CustomerR';
import EnquiryForm from './components/EnquiryForm';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Wewillcontact from './components/Wewillcontact';

// import { Fab,AddIcon,EditIcon,NavigationIcon,FavoriteIcon } from '@mui/material';
// import Pay from './Pay';

function App() {
  const { OnAdd,OnRemove,cartItems } = useGlobalContext() || {}
  // const FuncHandlerHelper = FuncHandler();

  // console.log("FuncHandlerHelper.cartItems 12",FuncHandlerHelper.cartItems)

  // distributor();


  
  console.log("cartItems App", cartItems);


  return (
    
    <div className="containerMain">
     <Navbar cartData={cartItems} removeItem={OnRemove} addItem={OnAdd} />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/EnquiryForm" element={<EnquiryForm />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Wewillcontact" element={<Wewillcontact />} />
        {/* <Route exact path="/Pay" element={<Pay />} /> */}
      </Routes>

      <FloatingActionBtn/>   

      {/* the component present below should be shown conditionally */}


          
      <Footer/>
    </div>

  );
}

export default App;
