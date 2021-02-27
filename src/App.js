import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './assets/scss/style.scss';
import LandingPage from 'Pages/LandingPage';
import DetailPage from 'Pages/DetailPage';
import Checkout from 'Pages/Checkout';
import Example from 'Pages/Example';

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/properties/:id" component={DetailPage} />
				<Route path="/example" component={Example} />
				<Route path="/checkout" component={Checkout} />
			</Router>

			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
