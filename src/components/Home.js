import React, { useState } from 'react'
import FetchData from './FetchData'
import SideCartBasket from './SideCartBasket';
import { createContext, useContext} from 'react';
import { useGlobalContext } from '../hooks/DataMain';
import FuncHandler from '../hooks/FuncHandler';

// const DataContext = createContext();

function Home() {
  const { OnAdd,OnRemove,cartItems } = useGlobalContext() || {}
    // const FuncHandlerHelper = FuncHandler();

    
    console.log("cartItems 000", cartItems);


  return (
<>
    <div>
         <div className='Maincontainer flex justify-between'>
        <FetchData addProduct={OnAdd}/>
        <SideCartBasket className="hidden sm:block" cartData={cartItems} removeItem={OnRemove} addItem={OnAdd} />
        </div>
    </div>

</>
  )
}

export default Home