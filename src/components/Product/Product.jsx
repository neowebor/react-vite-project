import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: true,
    };
  }
  render() {
    const {
      product: { id, name, price, description },
    } = this.props;

    const {isFavorite} = this.state;

    return (
      <article id={`product ${id}`}>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>{description}</p>
        {/* <p>{name} is {isFavorite ? '' : 'not'} favorite</p> */}
        <p>{name} is {!isFavorite && 'not'} favorite</p>
        {/* {isFavorite && <p>{name} is favorite</p>} */}
        <button>Make product</button>
      </article>
    );
  }
}

export default Product;
