import React, { useEffect, useState } from 'react'
import Product from './Product';
import SideMenu from './SideMenu';
import Cart from './Cart';

function FetchData() {

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


  
  return (
   
     <>
    {console.log("data",data)}
    <div className='checkTheContainer'>

          {/* when you are mapping data make sure it's and array(if data is an ) */}
          {data?.map((item,key)=>{
              return(
                <>
                  <div className='productCard'>
                  <Product props={item}/>
                  <Cart id={item.title} props={item}/>
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