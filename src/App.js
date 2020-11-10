import React from "react";
import "./App.css";
import "fontsource-roboto";

import Header from "./components/header/Header";
import CatMain from "./components/catmain/CatMain";
import DogMain from "./components/dogmain/DogMain";
import DogPage from "./components/dogpage/DogPage";
import CatPage from "./components/catpage/CatPage";
import Home from "./components/home/Home"
import { fetchCatBreeds, fetchDogBreeds } from "./api";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    catBreeds: "",
    dogBreeds: "",
  };

  async componentDidMount() {
    const catBreeds = await fetchCatBreeds();
    const dogBreeds = await fetchDogBreeds();

    this.setState({ catBreeds, dogBreeds });
    
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
        <Route path="/dogs/:id">
            <DogPage dogBreeds={this.state.dogBreeds}/>
          </Route>
          <Route path="/cats/:id">
            <CatPage catBreeds={this.state.catBreeds} />
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
