import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import FuncHandler from './hooks/FuncHandler';
import Navbar from './components/Navbar';

function App() {

  const FuncHandlerHelper = FuncHandler();

  return (
    
    <div className="containerMain">
     <Navbar cartData={FuncHandlerHelper.cartItems} removeItem={FuncHandlerHelper.OnRemove} addItem={FuncHandlerHelper.OnAdd} />
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/SideMenu" element={<SideMenu />} />
      </Routes>
    </div>

  );
}

export default App;
