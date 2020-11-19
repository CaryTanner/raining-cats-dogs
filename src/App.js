import React from "react";
import "./App.css";
import "fontsource-roboto";

import Header from "./components/Header/Header";
import AnimalMain from "./components/AnimalMain/AnimalMain";

import AnimalPage from "./components/AnimalPage/AnimalPage";
import Home from "./components/Home/Home"
import Checkout from './components/Checkout/Checkout'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { fetchCatBreeds, fetchDogBreeds } from "./api";
import uuid from 'react-uuid'

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catBreeds: "",
      dogBreeds: "",
      cartItems: [],
      
      
    }
    
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.increaseItemCount = this.increaseItemCount.bind(this); 
    
    
  };

  async componentDidMount() {
    const catBreeds = await fetchCatBreeds();
    const dogBreeds = await fetchDogBreeds();

    this.setState({ catBreeds, dogBreeds });
    
  }

  // add items from animal page
  addToCart(item, count) {
      this.setState((state) => ({
        cartItems: [...this.state.cartItems, {item, count, uniqueId: uuid() }]
      })

      )
    
    }
// remove item both in cart and from checkout screen
    removeFromCart(productId){
      this.setState((state) => ({
        cartItems: this.state.cartItems.filter(animal => animal.uniqueId !== productId)
      }))

    }

    //increase item amount on checkout items list 
    increaseItemCount(changedCount, productId){
      
      // find item  in state 
      let isUniqueId = (item) => item.uniqueId === productId
      let itemIndex = this.state.cartItems.findIndex(isUniqueId)
      //change and replace
      let newItem = { item: this.state.cartItems[itemIndex].item, count: changedCount, uniqueId: this.state.cartItems[itemIndex].uniqueId }
      let copyCartItems = this.state.cartItems
      copyCartItems.splice(itemIndex, 1, newItem)
      
      this.setState((state) => ({
        cartItems: copyCartItems
      }))
      
    }
 
    

  render() {
   
    return (
      <>
      
        <Header removeFromCart={this.removeFromCart} products={this.state.cartItems}/>
        
        <Switch>
          <Route path="/contact/:section">
            <Contact  />
          </Route>
          <Route path="/checkout">
            <Checkout increaseItemCount={this.increaseItemCount} removeFromCart={this.removeFromCart} cartItems={this.state.cartItems} />
          </Route>
          <Route path="/breeds/:animals/:id">
            <AnimalPage   dogBreeds={this.state.dogBreeds} catBreeds={this.state.catBreeds} addToCart={this.addToCart}/>
          </Route>
          <Route path="/breeds/:animals">
            <AnimalMain   dogBreeds={this.state.dogBreeds} catBreeds={this.state.catBreeds} />
          </Route>
          
          
          <Route path="/">
            <Home  getParams={this.getParams} dogBreeds={this.state.dogBreeds} catBreeds={this.state.catBreeds} />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
