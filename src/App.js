import React from 'react';
import Homepage from './pages/homepage/homepage.jsx'
import Shop from './pages/shop/shop.jsx'
import AuthContainer from './pages/authentication/auth-container.jsx'
import Header from './components/header/header.jsx'
import { Route, Switch, Link } from 'react-router-dom'
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/sign-in" component={AuthContainer}/>
      </Switch>

    </div>
  );
}

export default App;
