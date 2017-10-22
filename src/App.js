import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './components/Home';
import Products from './components/Products';
import IndProduct from './components/IndProduct';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './components/Success';
import AdminLogin from './components/AdminLogin'
import Admin from './components/Admin'
import AddProduct from './components/AddProduct'

import * as productActions from './actions/products'



export class App extends Component {

  viewCart = () => {
    let x = document.getElementById("cartContainer")
  if(x.style.display === "none") {
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
}

  componentWillMount = () => {
    this.props.productActions.getProducts();
  }



  render() {
    return (
      <Router>
        <div className="appContainer">
          <div className="header">
            <div className="headerHome">
              <Link to="/products"><img className="home" src="https://upload.wikimedia.org/wikipedia/commons/9/92/Less_than_sign.png"></img></Link>
            </div>
            <div className="headerLogo">
              <img className="logo" src="https://i.pinimg.com/736x/df/d3/fb/dfd3fb13e5e81631c35268bb0f8e3cdf--wear-watch-watch-faces.jpg"></img>
            </div>
            <div className="headerCart">
              <a onClick={this.viewCart}><img className="cartImg" src="https://d30y9cdsu7xlg0.cloudfront.net/png/28468-200.png"></img></a>
            </div>
            <Cart />
          </div>


          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/products/:id" component={IndProduct}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/success" component={Success}/>
          <Route exact path="/adminLogin" component={AdminLogin}/>
          <Route exact path="/admin" component={Admin}/>


          <div className="footer">
            <div className="adminLink">
              <Link className="adminLinkText" to="/adminLogin">Admin</Link>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state, props) {
  return {
    products: state.products

  }
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
