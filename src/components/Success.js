import React, { Component } from 'react';

class Success extends Component {

  render() {
    return (
      <div className="success">
        <h1 className="successh1">THANK YOU</h1>
        <h3 className="successh3">your order has been placed</h3>
        <a className="successbh" href="/">Back to Home</a>
      </div>
    );
  }
}



export default Success;
