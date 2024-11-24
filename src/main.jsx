import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import MyClassComponent from './components/MyClassComponent';
// import MyFuncComponent from './components/MyFuncComponent';
import App from './App';

/*
  Компоненти бувають двох видів:
    - класові
    - функціональні
*/

// const classElem1 = React.createElement(MyClassComponent);
// const classElem2 = React.createElement(MyClassComponent);

// const funcElem1 = React.createElement(MyFuncComponent);
// const funcElem2 = React.createElement(MyFuncComponent);

// Фрагмент - спеціальний компонент який дозволяє створювати обгорту для елементів яку реакт потім не буде малювати в верстці. пропси завжди мають бути null
// const frag = React.createElement(React.Fragment, null, classElem1, classElem2, funcElem1, funcElem2)


const app = React.createElement(App);

createRoot(document.getElementById('root')).render(app);
