import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: true,
    };
  }

  handleEvent = () => {
    // alert('click!')

    // мутація стану. код не буде працювати
    // this.state.isFavorite = true;

    // функція зміни стану
    // приймає об'єкт властивості якого доповнюють або перезаписують властивості стану
    this.setState({
      isFavorite: false,
    })
  }

  render() {
    // зміна стану викличе повторне відмалювання компоненту
    // зміна пропсів також змушує ререндеритися компонент

    const {
      product: { id, name, price, description },
      handleSwitchOrder
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
        <button id="btn" onClick={this.handleEvent}>Make product</button>
        {/* Взаємодія Дитина -> Батько (коллбек, який змінює стан батька) */}
        <button onClick={handleSwitchOrder}>Change Parent order</button>
      </article>
    );
  }
}

export default Product;
