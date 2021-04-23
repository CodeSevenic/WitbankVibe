import React from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <header className="row">
        <div>
          <Link className="brand" to="/">
            WitbankViBE
          </Link>
        </div>
        <div>
          <Link to="cart.html">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          <Link to="siginin">Sign In</Link>
        </div>
      </header>
      <div id="container" className="container">
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
      </div>
      <footer className="row center">
        <div className="footer-content">All rights reserved</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
