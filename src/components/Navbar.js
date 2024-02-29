import React, { useState } from 'react';
import Basket from './Basket';
import FuncHandler from '../hooks/FuncHandler';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';

function Navbar(props) {

  const FuncHandlerHelper = FuncHandler();
  
    const {basketButton,cartData,removeItem,addItem}=props;

    const [showBasket,setBasketVis] = useState(false);

    const basketbtn =() =>{
        setBasketVis(!showBasket);
    }

    console.log("FuncHandlerHelper.cartItems",FuncHandlerHelper.cartItems);

  return (
    <div>
        <div className='Navbar fixed top-0 w-full bg-gray-800 text-white p-4 justify-between'>
           
            <NavLink to="/" activeClassName="active" className='titleMain'>Bijender properties</NavLink>

       <div className='NavbarContent'>
           <Button className='contactbutton'> <Link to="/EnquiryForm" className='LinkContact'>Contact Us</Link></Button>
           {/* <Button className='contactbutton'>About Us</Button> */}
           <Button className='contactbutton'><Link to="/AboutUs">About Us</Link></Button>

           {/* <Link to="/Wewillcontact"></Link> */}
           
      </div>

        </div>

    {/* {  
    showBasket
        ? 
<Basket data={basketButton} cartData = {cartData} onAdd={addItem} onRemove={removeItem} />
        :
    ""
    } */}

    </div>
  )
}

export default Navbar