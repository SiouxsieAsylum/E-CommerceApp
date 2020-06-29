import React from 'react';
import Homepage from './pages/homepage/homepage.jsx'
import Shop from './pages/shop/shop.jsx'
import { Route, Switch, Link } from 'react-router-dom'
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={Shop}/>
      </Switch>

    </div>
  );
}

export default App;
