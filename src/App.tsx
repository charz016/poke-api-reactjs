import React from 'react';
import './App.scss';
import { Home } from "./pages/home/home";
import  PokemonDetail  from "./pages/pokemonDetail/pokemonDetail";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from "./components/navbar/navbar";
import { SearchBar } from "./components/searchBar/searchbar"


const App = () => {
  return (
    <div >
      <div>
        <NavBar />
      </div>
      <header className="App-header">
        <div>
          <SearchBar />
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/pokemon/:pokemon" >
              <PokemonDetail />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
