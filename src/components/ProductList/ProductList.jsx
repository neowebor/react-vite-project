import React from 'react'
import Product from '../Product/Product';

class ProductList extends React.Component {
  render () {
    const {products} = this.props;

    const productsComponents = products.map((product) => {
      return <Product product={product} key={product.id}/>
    })

    return <>{productsComponents}</>
  }
}

export default ProductList;