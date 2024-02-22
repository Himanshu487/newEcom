import { useState } from 'react';
import './App.css';
import './Pay.css';
// import spatula from './assets/spatula.jpg';
import StripeContainer from './components/StripeContainer';
// import Basket from './components/Basket';

function Pay(props) {
	const [showItem, setShowItem] = useState(false);

	console.log(props,"totalPrice");

	return (
		<div className='App1'>
			<h1>Proceed to Buy</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					{/* <h3>$10.00</h3> */}
                    <h3>{props.totalPrice}</h3>
					{/* <img src={spatula} alt='Spatula' /> */}
					<button onClick={() => setShowItem(true)}>Continue</button>
				</>
			)}
		</div>
	);
}

export default Pay;
