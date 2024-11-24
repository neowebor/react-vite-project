import React from "react";

function App() {
  const classElem1 = React.createElement(MyClassComponent);
  const classElem2 = React.createElement(MyClassComponent);
  
  const funcElem1 = React.createElement(MyFuncComponent);
  const funcElem2 = React.createElement(MyFuncComponent);
  
  return React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2)
}

export default App;