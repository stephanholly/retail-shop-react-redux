import React, {Component} from 'react';
import { Field, reduxForm, reset } from 'redux-form'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as productActions from '../actions/products';

class AddProduct extends Component {

  addNewItem = (values) => {
     this.props.productActions.addNewItem(values)

  }

  toggleForm = () => {
    let x = document.getElementById("addNewItemForm")
  if(x.style.display === "none") {
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
}

  render(){

    return (
        <div className="addItemFormContainer">
           <form className="addItemForm" onSubmit={ this.props.handleSubmit(this.addNewItem) }>
             <div className="form-group1">
               <label className="formName" htmlFor="name">Name</label>
               <Field name="name" id="name" className="form-control2" component="input" type="text"/>
             </div>
             <div className="form-group1">
               <label className="formName" htmlFor="price">Price</label>
               <Field name="price" id="price" className="form-control2" component="input" type="text"/>
             </div>
             <div className="form-group1">
               <label className="formName" htmlFor="picurl">Image URL</label>
               <Field name="picurl" id="picurl" className="form-control2" component="input" type="text" />
             </div>
             <div className="form-group2">
               <button type="submit" className="btn22 btn-primary">
                 Add product
               </button>
             </div>
           </form>
         </div>
    )
  }
}


const afterSubmit = (result, dispatch) =>
  dispatch(reset('AddProduct'));

AddProduct = reduxForm({
  // a unique name for the form
  form: 'AddProduct',
  onSubmitSuccess: afterSubmit,
})(AddProduct)



function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddProduct);
