import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../actions/cart'
import * as checkoutActions from '../actions/checkout'


class Checkout extends Component {

  addUser = (values) => {
   this.props.checkoutActions.addUser(values, this.props.cart)
   this.props.history.push("/success")
}

  render() {

    let checkoutList = this.props.cart.map((coitem,idx) =>
      <div key={idx} className="indItem"><h3>({coitem.quant}) {coitem.name} @ ${coitem.price} </h3></div>)
    let total = this.props.cart.reduce((acc,curr) => { return acc + (Number(curr.price)* Number(curr.quant))},0)

  return (
    <div className="checkoutContainer">
    <div className="products">
      {checkoutList}
      Total: ${total}
      </div>
      <br/>
      <form onSubmit={ this.props.handleSubmit(this.addUser)}>
         <div>
          <h3>Payment Info</h3>
           <label htmlFor="first_name">First Name</label>
           <Field name="first_name" id="first_name" className="form-control" component="input" type="text"/>
         </div>
         <div>
           <label htmlFor="last_name">Last Name</label>
           <Field name="last_name" id="last_name" className="form-control" component="input" type="text"/>
         </div>
         <div>
           <label htmlFor="email">Email</label>
           <Field name="email" id="email" className="form-control" component="input" type="text"/>
         </div>
         <div>
           <label htmlFor="street_address">Street Address</label>
           <Field name="street_address" id="street_address" className="form-control" component="input" type="text" />
         </div>
         <div>
           <label htmlFor="city">City</label>
           <Field name="city" id="city" className="form-control" component="input" type="text" />
         </div>
         <div>
           <label htmlFor="state">State</label>
           <Field name="state" id="state" className="form-control" component="input" type="text" />
         </div>
         <div>
           <label htmlFor="zip">Zip Code</label>
           <Field name="zip" id="zip" className="form-control" component="input" type="text" />
         </div>
         <div>
           <label htmlFor="cc_type">Credit Card Type</label>
           <Field name="cc_type" id="cc_type" className="form-control" component="input" type="text" />
         </div>
         <div>
           <label htmlFor="cc_name_on">Name on Card</label>
           <Field name="cc_name_on" id="cc_name_on" className="form-control" component="input" type="text" />
         </div>
         <div>
           <label htmlFor="cc_number">Credit Card Number</label>
           <Field name="cc_number" id="cc_number" className="form-control" component="input" type="text" />
         </div>
         <div>
           <label htmlFor="cc_code">Code</label>
           <Field name="cc_code" id="cc_code" className="form-control" component="input" type="text" />
         </div>
         <div>
           <label htmlFor="cc_expire">Expiration Date (MMYY)</label>
           <Field name="cc_expire" id="cc_expire" className="form-control" component="input" type="text" />
         </div>
         <div className="form-group">
           <button type="submit" className="btn2 btn-primary">
             Submit Order
           </button>
         </div>
      </form>
    </div>
    )
  }
  }

  Checkout = reduxForm({
    // a unique name for the form
    form: 'Checkout',
  })(Checkout)

  function mapStateToProps(state, props) {
    return {
      cart: state.cart
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      cartActions: bindActionCreators(cartActions, dispatch),
      checkoutActions: bindActionCreators(checkoutActions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
