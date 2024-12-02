import React from "react";
import Greeting from "./components/Greetings";
import MyClassComponent from "./components/MyClassComponent";
import MyFuncComponent from "./components/MyFuncComponent";

function App() {
  const classElem1 = React.createElement(MyClassComponent);
  const classElem2 = React.createElement(MyClassComponent);

  const funcElem1 = React.createElement(MyFuncComponent);
  const funcElem2 = React.createElement(MyFuncComponent);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Greeting, {
      userFirstName: "John",
      userLastName: "Doe",
    }),
    React.createElement(Greeting, {
      userFirstName: "Andrew",
    }),
    React.createElement(Greeting, ),
    classElem1,
    classElem2,
    funcElem1,
    funcElem2
  );
}

export default App;
