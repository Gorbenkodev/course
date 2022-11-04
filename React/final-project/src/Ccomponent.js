import React, { Component } from "react";
import { json } from "react-router-dom";

export default class Ccomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch('https:www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.drinks
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  render () {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <p>Error: {error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.strDrink}
              <img src={item.strDrinkThumb} />
            </li>
          ))}
        </ul>
      )
    }
  }
}
