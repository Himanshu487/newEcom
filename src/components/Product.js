import React from 'react'

const Product = (props) => {

  const {onAdd,key,item} = props;

  // console.log(item,"item");
  
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }
  
  const originalText = item.title;
  // console.log(originalText,"originalText");

  const truncatedText = truncateText(originalText, 50);
  // console.log(truncatedText);

  return (
    <>
    {
    <div className='productSty w-32 flex justify-center items-center flex-col'>
    <img className='itemSty w-full h-28' src={item.image} alt="Girl in a jacket" width="500" height="600"></img>
    <p className='w-32 h-32'>{truncatedText}</p>
    <button className='bg-yellow-500 text-white px-4 rounded-md addTocart' onClick={()=>onAdd(item)}>Add to Cart</button>
    </div>
    }
    </>
  )
}

export default Product