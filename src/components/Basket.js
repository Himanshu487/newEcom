import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Basket(props) {

  const {cartData,onRemove,onAdd}=props;

    // const {data,cartData} = props;

    const [ show, setShow] = useState(true);

    const handleClose=()=>{
        setShow(false);
    }


    console.log("cartData",cartData);
    
    let priceArray = [];
    let sum = 0; //always initialize sum with a initial value
    let finalAmount = 0; //always initialize sum with a initial value
    
    let totalSum = 0; //always initialize sum with a initial value

    cartData.forEach(element => {
      priceArray.push(element.price);
      totalSum += element.price * element.qty;
    });
 
      finalAmount = totalSum ;

      console.log("finalAmount",finalAmount);

  return (
    <>
    {
        show 
        ? 
        <div className='cartBasket relative'>
        
        <div className='absolute bg-yellow-500 w-full h-80 modal'>

         <div className='Innermodal bg-yellow-500 w-full'>
        <CloseIcon className="relative float-right cursor-pointer" onClick={()=>{handleClose()}} />
           
           {cartData.length === 0 ? " Basket is empty currently": 
           
        
          cartData.map((item)=>
           
            <div>
                <h1>{item.title}</h1>
                {/* <p>{item.price}</p> */}
                <p className='text-green-500'>{item.qty}*{item.price} : {item.qty * item.price}</p>
                <button className='bg-green-500 p-2 m-2' onClick={()=>{onRemove(item)}}>-</button>
                <button className='bg-green-500 p-2 m-2' onClick={()=>{onAdd(item)}}>+</button>
                
            </div>
           
          )

        // "hello"

           }
           
           <p>Total sum:</p>
        </div>
        </div>
    </div>
        :
        ""
    }
   
    </>
  )
}

export default Basket