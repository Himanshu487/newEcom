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

    const OnRemove=(item)=>{

        console.log("OnRemove item",item);
    
        let exist = cartItems.find((x) =>  x.id === item.id );

        console.log("exist", exist.qty);

      if(exist.qty == 1){
        setCartItems(cartItems.filter((x)=> x.id !== item.id ))
      }else{

        setCartItems(
          cartItems.map((x) =>
            x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );

      }

      }

    const BasketClick=(item)=>{

      //   setshowAddtoCart(value);
       console.log("item",item);
    
    }

  return (
    <div>
        {/* <Navbar basketbtn={BasketClick} cartVisibility={showAddtoCart}/> */}
        <Navbar basketButton={BasketClick} cartData={cartItems} />
         
         <div className='Maincontainer flex justify-between'>
        <FetchData addProduct={OnAdd}/>
        <SideCartBasket cartData={cartItems} removeItem={OnRemove} addItem={OnAdd}/>
        </div>
    </div>
  )
}

export default Home