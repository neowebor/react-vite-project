import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/*
  Компоненти бувають двох видів:
    - класові
    - функціональні
*/

// Класовий компонент
class MyClassComponent extends React.Component {
  render() {
    // має повертати якусь річ яку реакт буде відмальовувати на його місці
    /*
      реакт малює:
        цифри
        непусті рядки
        реакт-елементи
        інші реакт компоненти
        в залежності від вмісту може відмальовувати масиви
      реакт НЕ відображає:  
        булеві значення
        null
        undefined
        Symbol
      реакт буде кидати помилку якщо змусити його відмалювати звичайний об'єкт
    */
    
    const heading = React.createElement('h2', {className: 'articleHeading'}, 'Class Component heading');

    const textPar = React.createElement('p', null, 'Lorem Ipsum')

    const article = React.createElement('article', null, heading, textPar)
    
    return article;
  }
}

function MyFuncComponent() {
  const heading = React.createElement('h2', {className: 'articleHeading'}, 'Class Component heading');

    const textPar = React.createElement('p', null, '12345')

    const article = React.createElement('article', null, heading, textPar)
    
    return article;
}

const classElem1 = React.createElement(MyClassComponent);
const classElem2 = React.createElement(MyClassComponent);

const funcElem1 = React.createElement(MyFuncComponent);
const funcElem2 = React.createElement(MyFuncComponent);

// Фрагмент - спеціальний компонент який дозволяє створювати обгорту для елементів яку реакт потім не буде малювати в верстці. пропси завжди мають бути null
// const frag = React.createElement(React.Fragment, null, classElem1, classElem2, funcElem1, funcElem2)

function App() {
  const classElem1 = React.createElement(MyClassComponent);
  const classElem2 = React.createElement(MyClassComponent);
  
  const funcElem1 = React.createElement(MyFuncComponent);
  const funcElem2 = React.createElement(MyFuncComponent);
  
  return React.createElement('div', null, classElem1, classElem2, funcElem1, funcElem2)
}

const app = React.createElement(App);

createRoot(document.getElementById('root')).render(app);
