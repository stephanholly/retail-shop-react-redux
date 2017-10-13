import React, { Component } from 'react';
import AdminProductsList from './AdminProductsList'
import { connect } from 'react-redux';
import AddProduct from './AddProduct'


class Admin extends Component {

  toggleForm = () => {
    let x = document.getElementById("addNewItemForm")
  if(x.style.display === "none") {
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
}

  render() {
    return (
      <div className="AdminProducts">
        <div className="admin-title">
          <h1 className="inventoryText">INVENTORY</h1>
        </div>
        <AdminProductsList products={this.props.products}/>
        <div className="addNewItem">
          <button onClick={this.toggleForm} className="addNewItemButton">+</button>
        </div>
        <div id="addNewItemForm" className="addNewItemForm">
          <AddProduct/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    products: state.products
  }
}


export default connect(mapStateToProps, null)(Admin);
