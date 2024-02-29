import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useState } from 'react';

import {getDatabase, ref, set, collection, getDocs } from "firebase/database";
import { app } from "./Firebase";
import { Link } from 'react-router-dom';


const db = getDatabase(app);

function EnquiryForm() {


  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("Plot's");


  const [name,setName] =useState();
  const [number,setnumber] =useState();
  const [location,setlocation] =useState();

  // const [property,setProperty] = useState();

  const [success,setSuccess] = useState(false);

  const putData=()=>{
    //  set(ref(db,'users/himanshu'),{ // himanshu )---> ye breacket nhi thi ish wajah se issue aa rha tha
     set(ref(db,`users/${name}`),{ // himanshu )---> ye breacket nhi thi ish wajah se issue aa rha tha
      name:name,
      number:number,
      location:location,
      category:category
     });

     setSuccess(true);
  };




  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
  };

  const handleDropDown = (selectedCategory) => {
    console.log("selectedCategory",selectedCategory);
     setCategory(selectedCategory);

 };

  return (
    <div>
 
{/* { success ? } */}

    <MDBContainer fluid>

      <div className='text-black m-5' style={{borderRadius: '25px'}}>
        <div>
          <div className='bodyRow'>
            {/* <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'> */}
            <div className='FormContent'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Enter your details</p>

              <div className="d-flex flex-row align-items-center mb-4 alignLabel alignLabel1">
                <span>Enter your name: </span><MDBInput id='form1' type='text' className='w-100' onChange={(e)=>{setName(e.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 alignLabel alignLabel2">
                <span>Mobile number: </span><MDBInput  id='form2' type='email' onChange={(e)=>{setnumber(e.target.value)}} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 alignLabel alignLabel3">
                <span>Current location: </span><MDBInput  id='form3' type='email' onChange={(e)=>{setlocation(e.target.value)}} />
              </div>


          {/* <div className='flex flex-col items-start mr-2 bgColor'> */}
          <div className='dropData'>
            <div className="dropdown">
                
                  <button className="dropbtn rounded-lg w-full" onClick={toggleDropdown}>
                  
                    {category}
                  </button>
                  {isOpen && (
                    <div className="dropdown-content">
                    
                      <a href="#" onClick={()=> handleDropDown("Home's")}>Home's</a>
                      <a href="#" onClick={()=> handleDropDown("Plot's")}>Plot's</a>
                      <a href="#" onClick={()=> handleDropDown("Farm House")}>Farm House</a>
                      <a href="#" onClick={()=> handleDropDown("Other's")}>Other's</a>
                    </div>
                  )}
                </div>
            </div>

            {/* <button className='ContactUs' onClick={putData}>Register</button> */}
            <button className='ContactUs' onClick={putData}><Link to="/Wewillcontact">Register</Link></button>

            </div>

            {/* <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'> */}
            <div className='ImageContent'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </div>

          </div>
        </div>
      </div>

    </MDBContainer>



    </div>
  )
}

export default EnquiryForm