import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../actions/cart'


class Cart extends Component {

  closeCart = () => {
    let x = document.getElementById("cartContainer")
  if(x.style.display = "block") {
    x.style.display = "none"
  }
}

componentWillMount = () => {
  this.props.cartActions.getCart();
}


render() {
let cartItems = this.props.cart.map((item,idx) =>
  <div key={idx} className="indCartItem"><h3>{item.quant}: {item.name} @ ${item.price} </h3></div>)
let total = this.props.cart.reduce((acc,curr) => { return acc + (Number(curr.price)* Number(curr.quant))},0)

  console.log(this.props.cart)
return (
  <div className="cartContainer" id="cartContainer">
      <div className="innerCartContainer">
      {cartItems}
      <hr/>
      <div className="total">
        <h2>Total: ${total}</h2>
      </div>
      </div>
      <div className="checkoutButton">
        <Link to="/checkout"><button onClick={this.closeCart}>Checkout</button></Link>
      </div>
  </div>
  )
}
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
