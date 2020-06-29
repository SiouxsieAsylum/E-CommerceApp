import React from 'react';
import Homepage from './pages/homepage/homepage.jsx'
import { Route, Switch, Link } from 'react-router-dom'
import './reset.css';
import './App.css';

const HatsPage = () => {
  return (
    <>
      <h1>Lol hats</h1>
      <Link to="/">Home</Link>
    </>
  )

}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop/hats" component={HatsPage}/>
      </Switch>

    </div>
  );
}

export default App;
