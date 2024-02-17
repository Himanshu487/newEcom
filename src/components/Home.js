import React, { useState } from 'react'
import FetchData from './FetchData'
import Navbar from './Navbar';
import Basket from './Basket';
import Product from './Product';
import SideCartBasket from './SideCartBasket';

function Home() {

    const [cartItems,setCartItems] = useState([]);

    // const [showAddtoCart, setshowAddtoCart] = useState(false);

    const OnAdd=(item)=>{
      console.log("cartItems",cartItems);
      let exist = cartItems.find((x) =>  x.id === item.id );
      if(exist){
        setCartItems(cartItems.map((x)=> x.id === item.id ? {...exist, qty: exist.qty + 1}: x))
      }else{
        setCartItems([...cartItems, { ...item, qty:1 }])
      }
    }

    const OnRemove=()=>{
        console.log("remove button");
    }

    const BasketClick=(item)=>{

      //   setshowAddtoCart(value);
       console.log("item",item);
    
    }

  return (
    <div>
        {/* <Navbar basketbtn={BasketClick} cartVisibility={showAddtoCart}/> */}
        <Navbar basketButton={BasketClick} cartData={cartItems} />
         
         <div className='Maincontainer flex'>
        <FetchData addProduct={OnAdd}/>
        <SideCartBasket cartData={cartItems}/>
        </div>
    </div>
  )
}

export default Home