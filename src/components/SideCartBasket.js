import React from 'react'

function SideCartBasket(props) {
    const {cartData,removeItem,addItem}=props;

    let priceArray = [];
    let sum = 0; //always initialize sum with a initial value

    cartData.forEach(element => {
      priceArray.push(element.price);
    });
    // calculate the total amount of product in the basket
    for(let i=0; i < priceArray.length;i++){
      console.log("priceArray[i]",priceArray[i]);
      sum+=priceArray[i];
    }

  return (
    // <div className='SideCart mt-12 bg-slate-500'>
    <div className='SideCart mt-12 bg-slate-500'>
        {cartData.map((item) => (
          <div key={item.id}> {/* Added key prop for each item */}
              <h1>{item.title}</h1>
              <h1>{item.description}</h1>
              <p>{item.category}</p>
              <p className='text-green-500'>{item.price}$</p>
              <button className='bg-yellow-500 p-2 m-2' onClick={()=>{removeItem(item)}}>-</button>
              <button className='bg-yellow-500 p-2 m-2' onClick={()=>{addItem(item)}}>+</button>
          </div>
      ))}
       <p className='text-green-500'>Total cost of Items : {sum}$</p>
  </div>
  )
}

export default SideCartBasket