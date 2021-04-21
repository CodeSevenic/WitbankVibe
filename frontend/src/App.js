import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <header className="row">
        <div>
          <a className="brand" href="/">
            WitbankViBE
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="siginin">Sign In</a>
        </div>
      </header>
      <div id="container" className="container">
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
      </div>
      <footer className="row center">
        <div className="footer-content">All rights reserved</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
