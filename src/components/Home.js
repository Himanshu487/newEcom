import React, { useState } from 'react'
import FetchData from './FetchData'
import SideCartBasket from './SideCartBasket';
import { createContext, useContext} from 'react';
import FuncHandler from '../hooks/FuncHandler';

const DataContext = createContext();

function Home() {

    const FuncHandlerHelper = FuncHandler();

  return (
<>
    <div>
         <div className='Maincontainer flex justify-between'>
        <FetchData addProduct={FuncHandlerHelper.OnAdd}/>
        <SideCartBasket className="hidden sm:block" cartData={FuncHandlerHelper.cartItems} removeItem={FuncHandlerHelper.OnRemove} addItem={FuncHandlerHelper.OnAdd} />
        </div>
    </div>

</>
  )
}

export default Home