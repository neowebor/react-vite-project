import React from "react";
import Product from "./components/Product/Product";
import ProductList from "./components/ProductList/ProductList";

const products = [
  {
    id: 0,
    name: "Product 1",
    price: 1234.33,
    description: "Lorem Ipsum bla bla bla",
  },

  {
    id: 1,
    name: "Product 2",
    price: 1111,
    description: "Lorem Ipsum bla bla bla HOLA HELLO",
  },
]

function App() {
  // const shouldClassComponentsRender = Math.random() > 0.5;

  // const components = new Array(5).fill(null).map(() => {
  //   return <p>text</p>
  // });

  // console.log(components);
  
  // const productsComponents = products.map((product) => {
  //   return <Product product={product} />
  // })

  return (
    <>
      <ProductList products={products} />
      {/* <Greeting userFirstName="John" userLastName="Doe" />
      <Greeting userFirstName="Sarah" />
      <Greeting /> */}
      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
      {/* {shouldClassComponentsRender ? <MyClassComponent /> : <MyFuncComponent />} */}
    </>
  );

  // return React.createElement(React.Fragment, null, elem1, elem2);
}

// звичайний елемент у реакті
const elem1 = React.createElement(
  "div",
  { id: "div", title: "title", className: "div" },
  React.createElement("h3", { className: "heading" }, "Div title"),
  React.createElement("p", { className: "text" }, "Div text")
);

// JSX Версія елементу зверху
const elem2 = (
  <div id="div" title="div" className="div">
    <h3 className="heading">Div Title</h3>
    <p className="text">Div text</p>
  </div>
);

export default App;
