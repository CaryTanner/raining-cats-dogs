import React from "react";
import "./App.css";
import "fontsource-roboto";

import Header from "./components/Header/Header";
import AnimalMain from "./components/AnimalMain/AnimalMain";

import AnimalPage from "./components/AnimalPage/AnimalPage";
import Home from "./components/Home/Home"
import { fetchCatBreeds, fetchDogBreeds } from "./api";
import uuid from 'react-uuid'

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catBreeds: "",
      dogBreeds: "",
      cartItems: []
    }
    
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);  
    
  };

  async componentDidMount() {
    const catBreeds = await fetchCatBreeds();
    const dogBreeds = await fetchDogBreeds();

    this.setState({ catBreeds, dogBreeds });
    
  }

  addToCart(item, count) {
      this.setState((state) => ({
        cartItems: [...this.state.cartItems, {item, count, cartItemId: uuid() }]
      })

      )
    
    }

    removeFromCart(productId){
      this.setState((state) => ({
        cartItems: this.state.cartItems.filter(item => item.cartItemId !== productId)
      }))

    }
    
  render() {
    console.log(this.state.cartItems)
    return (
      <>
        <Header removeFromCart={this.removeFromCart} products={this.state.cartItems}/>
        <Switch>
        
          <Route path="/:animals/:id">
            <AnimalPage  dogBreeds={this.state.dogBreeds} catBreeds={this.state.catBreeds} addToCart={this.addToCart}/>
          </Route>
          <Route path="/:animals">
            <AnimalMain  dogBreeds={this.state.dogBreeds} catBreeds={this.state.catBreeds} />
          </Route>
          
          
          <Route path="/">
            <Home  />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
