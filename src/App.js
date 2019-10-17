import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { checkUserSession } from './redux/user/user-actions'

import Home from './pages/home/home-component'
import Nav from './components/Nav/nav-component'
import AgentDashboard from './pages/agent-dashboard/agent-dashboard-component'

import './App.scss';
import Signup from './components/signup-component/signup-component';
import Signin from './components/signin-component/signin-component'

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  return (
    <Router>
      <Switch>
        <Route path="/sign-up" render={() => (
          currentUser ? <Redirect to='/' /> :
            <Signup />
        )} />
        <Route path="/sign-in" render={() => (
          currentUser ? <Redirect to='/' /> :
            <Signin />
        )} />
        <Route path="/dashboard" component={AgentDashboard} />

        )} />
        <Route component={withNav} />
      </Switch>
    </Router>
  );
}

const withNav = () => {
  return (
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
    </div>
  )

}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
