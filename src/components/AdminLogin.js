import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from '../actions/login'

class AdminLogin extends Component {

  adminLoginCred = (values) => {
   this.props.loginActions.adminLoginCred(values)
}

  render() {
    return (
      <div className="masterInd">
      <div className="indContainerLogin">
      <form className="loginForm" onSubmit={ this.props.handleSubmit(this.adminLoginCred)}>
         <div>
          <h3 className="h3login">Admin Login</h3>
           <label htmlFor="username">Username</label>
           <Field name="username" id="username" className="form-control1" component="input" type="text"/>
         </div>
         <div>
           <label htmlFor="password">Password</label>
           <Field name="password" id="password" className="form-control1" component="input" type="text"/>
         </div>
         <div className="form-group">
           <button type="submit" className="btn1 btn-primary">
             Login
           </button>
         </div>
      </form>
      </div>
      </div>
    );
  }
}

AdminLogin = reduxForm({
  // a unique name for the form
  form: 'AdminLogin',
})(AdminLogin)

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AdminLogin);
