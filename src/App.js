import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './assets/scss/style.scss';
import LandingPage from 'Pages/LandingPage';
import DetailPage from 'Pages/DetailPage';
import Checkout from 'Pages/Checkout';
import Example from 'Pages/Example';
import NotFound from 'Pages/404';

const history = createBrowserHistory({
	basename: process.env.PUBLIC_URL,
});

function App() {
	return (
		<div className="App">
			<Router history={history} basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route
						exact
						path="/properties/:id"
						component={DetailPage}
					/>
					<Route path="/example" component={Example} />
					<Route path="/checkout" component={Checkout} />
					<Route path="/*" component={NotFound} />
				</Switch>
			</Router>

			<ToastContainer></ToastContainer>
		</div>
	);
}

export default App;
