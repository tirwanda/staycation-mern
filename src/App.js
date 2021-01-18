import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './assets/scss/style.scss'
import LandingPage from 'Pages/LandingPage'
import DetailPage from 'Pages/DetailPage'
import Example from 'Pages/Example'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/example" component={Example} />
        <Route exact path="/properties/:id" component={DetailPage} />
      </Router>
    </div>
  );
}

export default App;
