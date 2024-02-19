import React, { useState } from 'react'
import FetchData from './FetchData'
import Navbar from './Navbar';
import Basket from './Basket';
import Product from './Product';
import SideCartBasket from './SideCartBasket';

function Home() {

    const [cartItems,setCartItems] = useState([]);

    const [amount, setAmount] = useState({qty:1});

    // const [showAddtoCart, setshowAddtoCart] = useState(false);

    const OnAdd=(item)=>{
      

      let exist = cartItems.find((x) =>  x.id === item.id );
      if(exist){
        setCartItems(cartItems.map((x)=> x.id === item.id ? {...exist, qty: exist.qty + 1}: x))
        // here we have really important think, which we have implemented, which while using the usestate hook,
        // by the help of that we are also returning, the newly added data with it ,
        // for the further usage in our component, which is returned as a object  from the above, for particular products. 
      }else{
       
        setCartItems([...cartItems, { ...item, qty:1 }])
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

    const BasketClick=(item)=>{

      //   setshowAddtoCart(value);
       console.log("item",item);
    
    }

   

  return (
    <div>
        {/* <Navbar basketbtn={BasketClick} cartVisibility={showAddtoCart}/> */}
        <Navbar basketButton={BasketClick} cartData={cartItems} removeItem={OnRemove} addItem={OnAdd} />
         
         <div className='Maincontainer flex justify-between'>
        <FetchData addProduct={OnAdd}/>
        <SideCartBasket className="hidden sm:block" cartData={cartItems} removeItem={OnRemove} addItem={OnAdd} />
        </div>
    </div>
  )
}

export default Home