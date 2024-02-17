import React, { useEffect, useState } from 'react'
import Product from './Product';
import SideMenu from './SideMenu';
import Cart from './Cart';
import Basket from './Basket';

function FetchData({addProduct}) {

    const [data,setData]= useState([]);


    const getData= async ()=>{
        // try and catch is used to handle the error which occur's(error handling)
      try{
        const response =await fetch('https://fakestoreapi.com/products');
        const checkD = await response.json();
        setData(checkD);
      }
      catch(error){
        console.log("the error is occuring currently",error);
      }
    }
    
    useEffect(()=>{
        getData();
    },[])

    // console.log(data);

  
  return (
   
     <>
    {/* {console.log("data",data)} */}
    <div className='checkTheContainer flex flex-wrap mt-20'>

          {/* when you are mapping data make sure it's and array(if data is an ) */}
          {data?.map((item,key)=>{

            //  console.log(item.id,"item-------")

              return(
                <>
                  <div className='productCard bg-transparent-500 w-21 m-2'>
                  <Product item={item} key={item.id} onAdd={addProduct}/>
                  <Cart id={item.title} props={item}/>
                  {/* <Basket item={item} /> */}
                  </div>
                </>  
              )
          })}
    
    </div> 
    <div className='sideMenu'>
         <SideMenu/>
    </div>

     </> 
  )
}

export default FetchData