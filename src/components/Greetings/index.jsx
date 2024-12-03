import React from "react";
import "./Greeting.css";
// function Greeting(props) {
//   // props - об'єкт, який містить зовнішні налаштування для компонента
//   // console.log(props);
//   const {userFirstName = '', userLastName = ''} = props;

//   const fullName = `${userFirstName} ${userLastName}`.trim();

//   return React.createElement(
//     "p",
//     { className: "greetingText" },
//     `Hello, ${fullName ? fullName : 'Guest'}!`
//   );
// }

class Greeting extends React.Component {
  render() {
    const { userFirstName = "", userLastName = "" } = this.props;

    // ніколи не змінювати пропси в компоненті які він приймає

    // Умовний рендерінг - рендерінг певних елементів / компонентів за певною умовою
    const fullName = `${userFirstName} ${userLastName}`.trim();

    return fullName ? (
      <h1 className="greetingText">Hello {fullName}</h1>
    ) : (
      <p className="guestGreeting">Hello Guest</p>
    );

    // return React.createElement(
    //   "p",
    //   { className: "greetingText" },
    //   `Hello, ${fullName ? fullName : "Guest"}!`
    // );
  }
}

export default Greeting;
