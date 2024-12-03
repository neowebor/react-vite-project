import React from "react";

class Product extends React.Component {
  render() {

    const { product : {id, name, price, description} } = this.props;

    return <article id={`product ${id}`}>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </article>
  }
}

export default Product;