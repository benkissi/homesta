import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './pages/home/home-component'
import Nav from './components/Nav/nav-component'

import './App.scss';
import Signup from './components/signup-component/signup-component';

function App({ currentUser }) {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/sign-up" render={() => (
          currentUser ? <Redirect to='/' /> :
            <Signup />
        )} />
        <Route exact path="/" component={Home} />

      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
