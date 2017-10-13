import React, { Component } from 'react';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as indProductActions from '../actions/indProduct'
import * as cartActions from '../actions/cart'


class IndProduct extends Component {

componentWillMount = () => {
  this.props.indProductActions.getIndProduct(this.props.match.params.id);
  this.props.cartActions.getCart();
}


render() {
return (
  <div className="masterInd">
    <div className="IndproductLeft">
      <div className="IndwatchImage">
        <img className="Indmedia-object" src={this.props.indProduct.picurl} alt="BLERG" />
      </div>
    </div>
    <div className="IndproductRight">
      <div className="Indmedia-objectwatch">
        <h4 className="IndwatchTitleH">{this.props.indProduct.name}</h4><br/>
        <h5 className="IndwatchPriceH">${this.props.indProduct.price}</h5>
        <p className="quantityP">Quantity: </p>
        <form onSubmit={(e) =>{
            this.props.cartActions.addCartItems(this.props.indProduct, {quant: Number(e.target.quantity.value)})
            e.preventDefault()
          }
          }>
        <select className="quantity" name="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <br/>
        <input className="addToCart" type="submit" value="Add to Cart"/>
      </form>
      </div>
    </div>

  </div>
  )
}
}

function mapStateToProps(state, props) {
  return {
    indProduct: state.indProduct
  }
}

function mapDispatchToProps(dispatch) {
  return {
    indProductActions: bindActionCreators(indProductActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndProduct);
