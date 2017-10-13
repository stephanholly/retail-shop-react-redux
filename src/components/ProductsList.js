import React from 'react'
import Product from './Product'

const ProductsList = ({products}) => {

  let theProducts = products.map((product, idx) => <Product
      key={idx}
      id={product.id}
      name={ product.name }
      price={ product.price }
      soldout={ product.soldout}
      picurl={ product.picurl }
    />)


    return (

      <div className="product-container">
          {theProducts}
      </div>
    )
}

export default ProductsList;
