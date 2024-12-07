import React from "react";
import ProductList from "../ProductList/ProductList";
import FavoriteProducts from "../FavoriteProducts/FavoriteProducts";

class ProductDashboard extends React.Component {
  state = {
    products: [
      {
        id: 0,
        name: "Product 1",
        price: 1234.33,
        description: "Lorem Ipsum bla bla bla",
        isFavorite: false,
      },

      {
        id: 1,
        name: "Product 2",
        price: 1111,
        description: "Lorem Ipsum bla bla bla HOLA HELLO",
        isFavorite: true,
      },

      {
        id: 2,
        name: "Product 3",
        price: 1112131231,
        description: "bla bla HOLA HELLO",
        isFavorite: true,
      },
    ],
  };

  toggleFavoriteProduct = (productId) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          isFavorite: !product.isFavorite,
        };
      } else {
        return product;
      }
    });

    this.setState({
      products: updatedProducts,
    });
  };

  render() {
    const { products } = this.state;

    const favoriteProducts = products.filter((product) => product.isFavorite);

    return (
      <article>
        <h1>Products Dashboards</h1>
        <ProductList products={products} toggleFavoriteProduct={this.toggleFavoriteProduct}/>
        <hr />
        <FavoriteProducts products={favoriteProducts} />
      </article>
    );
  }
}

export default ProductDashboard;
