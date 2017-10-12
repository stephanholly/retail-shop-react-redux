import React, { Component } from 'react';
import ProductsList from './ProductsList'
import { connect } from 'react-redux';


class Products extends Component {

  render() {
    return (
      <div className="Products">
        <ProductsList products={this.props.products}/>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    products: state.products
  }
}


export default connect(mapStateToProps, null)(Products);
