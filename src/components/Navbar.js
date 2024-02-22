import React, { useState } from 'react';
import Basket from './Basket';
import FuncHandler from '../hooks/FuncHandler';
import { NavLink } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
            Himanshu Store
            
            <NavLink to="/SideMenu" activeClassName="active">SideMenu</NavLink>
            <NavLink to="/Pay" activeClassName="active">Pay</NavLink>

           <ShoppingCartIcon className='float-right text-red-500 cursor-pointer' onClick={basketbtn}/>
        </div>

    {  
    showBasket
        ? 
<Basket data={basketButton} cartData = {cartData} onAdd={addItem} onRemove={removeItem} />
        :
    ""
    }

    </div>
  )
}

export default Navbar