import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Product extends Component {


  render() {
  return (
    <div className="master">
    <Link to={'/products/' + this.props.id}><div className="productContainer">
      <div className="watchImage">
        <img className="media-object" src={this.props.picUrl} alt="BLERG" />
      </div>
      <hr/>
      <div className="watchTitle">
        <h4 className="watchTitleH">{this.props.name}</h4>
      </div>
      <div className="watchPrice">
        <h5 className="watchPriceH">${this.props.price}</h5>
      </div>
    </div></Link>
  </div>

  )
}
}



export default Product
