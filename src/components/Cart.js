import React, { useState } from 'react'
import SideMenu from './SideMenu';

const Cart = ({props,id}) => {

    const [cart,setCart] = useState([]);

    const addToCart=(props)=>{
      console.log(id);

      let dataAdd = cart && cart.push(id);
 
      console.log("cart",cart);

      console.log(dataAdd,"added data");
      <SideMenu dataAdd={dataAdd}/>
     
    }

    const removeItem=(props)=>{
      console.log(id);
      let deletedData=cart && cart.pop(id);
      
      console.log("cart",cart);


      <SideMenu dataDel={deletedData}/>
      console.log(deletedData,"22 deleted");
    
    }

  return (
    <div className='cartUpdate'>
        {/* <div className='button bg-green-500 m-1' onClick={removeItem}>-</div>
        <div className='button  bg-green-500 m-1' onClick={addToCart}>+</div> */}
    </div>
  )
}

export default Cart