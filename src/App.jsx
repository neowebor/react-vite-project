import React from "react";
import Greeting from "./components/Greetings";
import MyClassComponent from "./components/MyClassComponent";
import MyFuncComponent from "./components/MyFuncComponent";
import Product from "./components/Product/Product";

const product = {
  id: 0,
  name: "Product 1",
  price: 1234.33,
  description: "Lorem Ipsum bla bla bla",
};

function App() {
  const shouldClassComponentsRender = Math.random() > 0.5;

  const funcElem1 = React.createElement(MyFuncComponent);
  const funcElem2 = React.createElement(MyFuncComponent);

  // if (shouldClassComponentsRender) {
  //   return (
  //     <>
  //       <Greeting userFirstName="John" userLastName="Doe" />
  //       <Greeting userFirstName="Sarah" />
  //       <Greeting />
  //       <MyClassComponent />
  //       <MyClassComponent />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Greeting userFirstName="John" userLastName="Doe" />
  //       <Greeting userFirstName="Sarah" />
  //       <Greeting />
  //       <MyFuncComponent />
  //       <MyFuncComponent />
  //     </>
  //   )
  // }

  return (
    <>
      {/* <Greeting userFirstName="John" userLastName="Doe" />
      <Greeting userFirstName="Sarah" />
      <Greeting /> */}
      <Product product={product} />
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
