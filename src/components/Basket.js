import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Basket(props) {


    const {data,cartData} = props;

    const [ show, setShow] = useState(true);

    const handleClose=()=>{
        setShow(false);
    }

    console.log("cartData",cartData);

  return (
    <>
    {
        show 
        ? 
        <div className='cartBasket relative'>
        
        <p className='absolute bg-yellow-500 w-full h-80'>
        <CloseIcon className="relative float-right" onClick={()=>{handleClose()}} />
           
           {cartData.length === 0 ? " Basket is empty currently": 
           

          cartData.map((item)=>{
           
            <div>
                <h1>{item.title}</h1>
                <p>{item.price}</p>
            </div>
           
          })

        // "hello"

           }
           
           
        </p>
    </div>
        :
        ""
    }
   
    </>
  )
}

export default Basket