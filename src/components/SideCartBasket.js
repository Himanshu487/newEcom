import React from 'react'

function SideCartBasket(props) {
    const {cartData}=props;

    console.log(cartData);

  return (
    // <div className='SideCart mt-12 bg-slate-500'>
    <div className='SideCart mt-12'>
        {/* hhhhhh */}
        {cartData.map((item)=>{
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
        })}
    </div>
  )
}

export default SideCartBasket