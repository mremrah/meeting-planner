import React from 'react';
import firebase from './Firebase';
import { Router, navigate } from '@reach/router';

import './App.css';
import Home from './Home';
import Welcome from './Welcome';

import Navigation from './Navigation';
import Meetings from './Meetings';
import Login from './Login';
import Register from './Register';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      displayName: null,
      userId: null
    }

    this.registerUser = this.registerUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);

  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(userData => {
      if (userData) {
        this.setState({
          user: userData,
          displayName: userData.displayName,
          userId: userData.uid
        })
      }
    })
  }

  registerUser = userName => {
    //Tracking onAuthState changes after a successfull login | registration
    firebase.auth().onAuthStateChanged(user => {
      user.updateProfile({ displayName: userName })
        .then(() => {
          this.setState({
            user: user,
            displayName: user.displayName,
            userId: user.uid
          });
          navigate('/meetings');
        })
    })
  }

  logOutUser = e => {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      this.setState({
        user: null,
        displayName: null,
        userId: null
      });
      navigate('/login');
    }).catch(error => {
      alert(error.message);
    })
  }

  render() {
    return (
      <div className="text-center mt-4">
        <Navigation user={this.state.user} logOutUser={this.logOutUser} />
        {this.state.user && (
          <Welcome displayName={this.state.displayName} logOutUser={this.logOutUser} />
        )
        }
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meetings" />
          <Register path="/register" registerUser={this.registerUser} />
        </Router>
      </div>
    );
  }
}

export default App;
