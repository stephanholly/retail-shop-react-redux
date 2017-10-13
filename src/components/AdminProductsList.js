import React from 'react'
import AdminProduct from './AdminProduct'


const AdminProductsList = ({products}) => {

  let theProducts = products.map((product, idx) => <AdminProduct
      key={idx}
      id={product.id}
      name={ product.name }
      price={ product.price }
      soldout={ product.soldout}
      picurl={ product.picurl }
    />)


    return (

      <div className="admin-product-container">

        <div className="admin-product">
          {theProducts}
        </div>
        
      </div>
    )
}

export default AdminProductsList;
