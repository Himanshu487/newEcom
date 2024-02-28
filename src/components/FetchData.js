import React, { useEffect, useState } from 'react'


function FetchData({addProduct}) {

    const [data,setData]= useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // const [category, setCategory] = useState("");
    // const [category, setCategory] = useState([]);
    const [category, setCategory] = useState("All categories");

    let filteredData;

    const toggleDropdown = (e) => {
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
    },[])

    const handleDropDown = (selectedCategory) => {
       console.log("selectedCategory",selectedCategory);
        setCategory(selectedCategory);

    };


    if(category === "All categories"){
      filteredData =  data;
    }else{
      filteredData = category ? data.filter((item) => item.category === category) : data;
    }

  // const filteredData = category ? alert('true ? ') : alert('false : ');

    // const handleDropDown=(event)=>{
    //   const selectedCategory = event.target.textContent;
    //   setCategory(selectedCategory);
    //    categoryData = data.filter((item) => item.category === selectedCategory);
    //    setData(categoryData);
    // }

  
  return (
   
     <>

    {/* <div className='flex flex-col items-start mr-2 bgColor'>
    <div className="dropdown mt-16">
         
          <button className="dropbtn rounded-lg w-full" onClick={toggleDropdown}>
           
            {category}
          </button>
          {isOpen && (
            <div className="dropdown-content">
            
              <a href="#" onClick={()=> handleDropDown("All categories")}>All categories</a>
              <a href="#" onClick={()=> handleDropDown("men's clothing")}>men's clothing</a>
              <a href="#" onClick={()=> handleDropDown("jewelery")}>jewelery</a>
              <a href="#" onClick={()=> handleDropDown("electronics")}>electronics</a>
              <a href="#" onClick={()=> handleDropDown("women's clothing")}>women's clothing</a>
            </div>
          )}
        </div>
        
    
    </div> */}

    {/* <div className='sideMenu'>
         <SideMenu/>
    </div> */}

     </> 
  )
}

export default FetchData