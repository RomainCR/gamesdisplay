import React from 'react';
import './App.css';
import GameList from './GameList';
import Promo from './Promo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <div className="App">
          <Route exact path="/" component={GameList} />
          <Route path="/promo/:name/:id" component={Promo} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
