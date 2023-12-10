import React from 'react'

const Product = ({props}) => {
  return (
    <>
    {
    <div className='productSty'>
    <img className='itemSty' src={props.image} alt="Girl in a jacket" width="500" height="600"></img>
    <p>{props.title}</p>
    </div>
    }
    </>
  )
}

export default Product