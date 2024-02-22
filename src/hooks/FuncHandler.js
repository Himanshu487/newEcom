import React from 'react'
import { useState } from 'react';

function FuncHandler() {

    const [cartItems,setCartItems] = useState([]);
    const [amount, setAmount] = useState({qty:1});

  
    const OnAdd=(item)=>{
      
        console.log("item 12",item)

      let exist = cartItems.find((x) =>  x.id === item.id );
      if(exist){
        setCartItems(cartItems.map((x)=> x.id === item.id ? {...exist, qty: exist.qty + 1}: x));
        // here we have really important think, which we have implemented, which while using the usestate hook,
        // by the help of that we are also returning, the newly added data with it ,
        // for the further usage in our component, which is returned as a object  from the above, for particular products. 
      }else{
        setCartItems([...cartItems, { ...item, qty:1 }]);
      }
    }

    const OnRemove=(item)=>{
        let exist = cartItems.find((x) =>  x.id === item.id );
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


 return{
    OnAdd,
    OnRemove,
    cartItems
 }
}

export default FuncHandler