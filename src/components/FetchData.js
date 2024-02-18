import React, { useEffect, useState } from 'react'
import Product from './Product';
import SideMenu from './SideMenu';
import Cart from './Cart';
import Basket from './Basket';

function FetchData({addProduct}) {

    const [data,setData]= useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // const [category, setCategory] = useState("");
    const [category, setCategory] = useState([]);

    let categoryData;

    const toggleDropdown = (e) => {
      console.log("e toggleDropdown",e)
      setIsOpen(!isOpen);
    };

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
    },[categoryData])

    const handleDropDown=(event)=>{

      const selectedCategory = event.target.textContent;
      setCategory(selectedCategory);

       categoryData = data.filter((item) => item.category === selectedCategory);
       setData(categoryData);
    }
    
    console.log("data 52 ",data);
  
  return (
   
     <>
    {/* {console.log("data",data)} */}

    <div className='flex flex-col'>
    <div className="dropdown mt-16">
          <button className="dropbtn" onClick={toggleDropdown}>
            categories
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <a href="#" onClick={handleDropDown}>men's clothing</a>
              <a href="#" onClick={handleDropDown}>jewelery</a>
              <a href="#" onClick={handleDropDown}>electronics</a>
              <a href="#" onClick={handleDropDown}>women's clothing</a>
            </div>
          )}
        </div>
        
    <div className='checkTheContainer flex flex-wrap mt-2'>

        

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
    </div>

    <div className='sideMenu'>
         <SideMenu/>
    </div>

     </> 
  )
}

export default FetchData