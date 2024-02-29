import React, { useState } from 'react'
import FetchData from './FetchData'
// import SideCartBasket from './SideCartBasket';
import { createContext, useContext} from 'react';
import { useGlobalContext } from '../hooks/DataMain';
import FuncHandler from '../hooks/FuncHandler';
import BackgroundImage from './BackgroundImage';

import OurServices from './OurServices';
// import CustomerR from './CustomerR';
import Carousel from './Carousel';
// const DataContext = createContext();

// const images = [
//   'https://www.bing.com/images/search?view=detailV2&ccid=K2XHZApj&id=8D150B209D49125D5F2EEC35358B21775155C979&thid=OIP.K2XHZApjhJtr7KaMROuZiQHaE7&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f259600%2fpexels-photo-259600.jpeg%3fcs%3dsrgb%26dl%3darchitecture-facade-house-259600.jpg%26fm%3djpg&exph=3997&expw=5997&q=image+house&simid=608029767637488160&FORM=IRPRST&ck=A77D22A3B083D67C4E1459EA46D9C4D5&selectedIndex=0&itb=0',
//   'https://www.bing.com/images/search?view=detailV2&ccid=K2XHZApj&id=8D150B209D49125D5F2EEC35358B21775155C979&thid=OIP.K2XHZApjhJtr7KaMROuZiQHaE7&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f259600%2fpexels-photo-259600.jpeg%3fcs%3dsrgb%26dl%3darchitecture-facade-house-259600.jpg%26fm%3djpg&exph=3997&expw=5997&q=image+house&simid=608029767637488160&FORM=IRPRST&ck=A77D22A3B083D67C4E1459EA46D9C4D5&selectedIndex=0&itb=0',
//   'https://www.bing.com/images/search?view=detailV2&ccid=K2XHZApj&id=8D150B209D49125D5F2EEC35358B21775155C979&thid=OIP.K2XHZApjhJtr7KaMROuZiQHaE7&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f259600%2fpexels-photo-259600.jpeg%3fcs%3dsrgb%26dl%3darchitecture-facade-house-259600.jpg%26fm%3djpg&exph=3997&expw=5997&q=image+house&simid=608029767637488160&FORM=IRPRST&ck=A77D22A3B083D67C4E1459EA46D9C4D5&selectedIndex=0&itb=0'
// ];

function Home() {
  const { OnAdd,OnRemove,cartItems } = useGlobalContext() || {}
    // const FuncHandlerHelper = FuncHandler();



  return (
<>
    <div>
         <div className='Maincontainer flex justify-between'>
          <BackgroundImage/>
        {/* <FetchData addProduct={OnAdd}/> */}
        {/* <SideCartBasket className="hidden sm:block" cartData={cartItems} removeItem={OnRemove} addItem={OnAdd} /> */}
        </div>
        <OurServices/>
        {/* <div>
            <h1>My Image Carousel</h1>
            <Carousel images={images} />
        </div> */}
    </div>

</>
  )
}

export default Home