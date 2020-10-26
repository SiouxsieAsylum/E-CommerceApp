import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux';

import Homepage from './pages/homepage/homepage.jsx'
import Shop from './pages/shop/shop.jsx'
import AuthContainer from './pages/authentication/auth-container.jsx'
import Header from './components/header/header.jsx'
import { auth, createUserProfile } from './firebase/firebaseUtils'
import { setCurrentUser } from './redux/user/user-actions'

import './reset.css';
import './App.css';

class App extends Component {
  unsubscribe = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const ref =  await createUserProfile(user);
        ref.onSnapshot(snapshot => {
          const data = snapshot.data()
          const { id } = snapshot;
          setCurrentUser({
            id,
            ...data
          })
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
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/sign-in" component={AuthContainer}/>
        </Switch>

      </div>
    );
  }

}

const matchDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, matchDispatchToProps)(App);
