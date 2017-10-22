import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productActions from '../actions/products'

class AdminProduct extends Component {

  toggleEditForm = () => {
    let x = document.getElementById(this.props.id)
  if(x.style.display === "none") {
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
}

editItem = (values) => {
   this.props.productActions.editItem(values, this.props.id)

}

  render() {
    console.log(this.props.id);
  return (

      <div className="adminProductContainer">
        <div className="innerAPC">
        <div className="leftAdminProduct">
        <div className="adminWatchId">
            <h5 className="adminWatchIdH">{this.props.id}</h5>
        </div>
        <div className="adminWatchImage">
          <img className="admin-Media-object" src={this.props.picurl} alt="BLERG" />
        </div>
        </div>
          <div className="middleAdminProduct">
      <div className="adminWatchTitle">
        <h4 className="adminWatchTitleH">{this.props.name}</h4>
      </div>
      <div className="adminWatchPrice">
        <h5 className="adminWatchPriceH">${this.props.price}</h5>
      </div>
    </div>
      <div className="rightAdminProduct">
      <div className="adminWatchEdit">
        <button onClick={this.toggleEditForm} className="adminWatchEditButton">Edit</button>
      </div>
      <div className="adminWatchDelete">
        <button onClick={(e) =>{
            this.props.productActions.deleteProduct(this.props.id)}} className="adminWatchEditDelete">X</button>
      </div>
    </div>
      </div>
      <div id={this.props.id} className="editForm1" style={{display: 'none'}}>
        <form onSubmit={ this.props.handleSubmit(this.editItem, this.props.id) }>
          <div className="editInputs">
            <label htmlFor="name">Name</label>
            <Field name="name" id="name" className="form-control3" component="input" type="text"/>
          </div>
          <div className="editInputs">
            <label htmlFor="price">Price</label>
            <Field name="price" id="price" className="form-control3" component="input" type="text"/>
          </div>
          <div className="editInputs">
            <label htmlFor="soldout">Sold Out?(true or false)</label>
            <Field name="soldout" id="soldout" className="form-control3-1" component="input" type="text"/>
          </div>
          <div className="editInputs">
            <label htmlFor="picurl">Image URL</label>
            <Field name="picurl" id="picurl" className="form-control3" component="input" type="text" />
          </div>
          <div className="form-group">
            <button type="submit" className="btnEdit btn-primary">
              Edit Product
            </button>
          </div>
        </form>
      </div>
    </div>


  )
}
}


const afterSubmit = (result, dispatch) =>
  dispatch(reset('AdminProduct'));

AdminProduct = reduxForm({
  // a unique name for the form
  form: 'AdminProduct',
  onSubmitSuccess: afterSubmit,
})(AdminProduct)


function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AdminProduct);
