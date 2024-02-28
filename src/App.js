import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import FuncHandler from './hooks/FuncHandler';
import { useGlobalContext } from './hooks/DataMain';
import Navbar from './components/Navbar';
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
        <Route exact path="/SideMenu" element={<SideMenu />} />
        {/* <Route exact path="/Pay" element={<Pay />} /> */}
      </Routes>
    </div>

  );
}

export default App;
