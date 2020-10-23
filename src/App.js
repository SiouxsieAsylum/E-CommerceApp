import React, { Component } from 'react';
import Homepage from './pages/homepage/homepage.jsx'
import Shop from './pages/shop/shop.jsx'
import AuthContainer from './pages/authentication/auth-container.jsx'
import Header from './components/header/header.jsx'
import { Route, Switch, Link } from 'react-router-dom'
import { auth, createUserProfile } from './firebase/firebaseUtils'
import './reset.css';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const ref =  await createUserProfile(user);
        ref.onSnapshot(snapshot => {
          const data = snapshot.data()
          const { id } = snapshot;
          this.setState({
            currentUser: {
              id,
              ...data
            }
          }, () => console.log(this.state))
        })
      } else {
        this.setState({currentUser: user})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    return (
      <div className="App">
        <Header user={ this.state.currentUser }/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/sign-in" component={AuthContainer}/>
        </Switch>

      </div>
    );
  }

}

export default App;
