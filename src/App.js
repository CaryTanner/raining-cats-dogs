import React from "react";
import "./App.css";
import "fontsource-roboto";

import Header from "./components/Header/Header";
import CatMain from "./components/CatMain/CatMain";
import DogMain from "./components/DogMain/DogMain";
import DogPage from "./components/DogPage/DogPage";
import CatPage from "./components/CatPage/CatPage";
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
        cartItems: [...this.state.cartItems, {item, count, itemId: uuid() }]
      })

      )
    
    }

    removeFromCart(productId){
      this.setState((state) => ({
        cartItems: this.state.cartItems.filter(item => item.itemId !== productId)
      }))

    }
    
  render() {
    console.log(this.state.cartItems)
    return (
      <>
        <Header removeFromCart={this.removeFromCart} products={this.state.cartItems}/>
        <Switch>
        <Route path="/dogs/:id">
            <DogPage dogBreeds={this.state.dogBreeds} addToCart={this.addToCart}/>
          </Route>
          <Route path="/cats/:id">
            <CatPage catBreeds={this.state.catBreeds} addToCart={this.addToCart}/>
          </Route>
          <Route path="/cats">
            <CatMain catBreeds={this.state.catBreeds} />
          </Route>
          <Route path="/dogs">
            <DogMain dogBreeds={this.state.dogBreeds} />
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
