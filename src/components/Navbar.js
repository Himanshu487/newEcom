import React, { useState } from 'react';
import Basket from './Basket';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar(props) {
  
    const {basketButton,cartData,removeItem,addItem}=props;

    const [showBasket,setBasketVis] = useState(false);

    const basketbtn =() =>{
        setBasketVis(!showBasket);
    }

  return (
    <div>
        <div className='fixed top-0 w-full bg-gray-800 text-white p-4 justify-between'>
            Himanshu Store
           <ShoppingCartIcon className='float-right text-red-500' onClick={basketbtn}/>
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