import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { checkUserSession } from './redux/user/user-actions'

import Home from './pages/home/home-page'
import AgentDashboardRoutes from './layouts/agent-dashboard/agent-dashboard-routes'
import AgentListings from './pages/agent-dashboard/agent-listings-page/agent-listings-component'
import WithNavRoutes from './layouts/with-nav/with-nav-routes'
import ErrorBoundary from './components/error-boundary/error-boundary-component'
import PageNotFound from './pages/404/404-page'

import './App.scss';
import Signup from './components/signup-component/signup-component';
import Signin from './components/signin-component/signin-component'

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  return (
    <Router>
      <ErrorBoundary>
        <Switch>

          <Route path="/sign-up" render={() => (
            currentUser ? <Redirect to='/' /> :
              <Signup />
          )} />
          <Route path="/sign-in" render={() => (
            currentUser ? <Redirect to='/' /> :
              <Signin />
          )} />
          <WithNavRoutes exact path="/" component={Home} />
          <AgentDashboardRoutes exact path="/dashboard/listings" component={AgentListings} />

          <Route path="*" component={PageNotFound} />

        </Switch>
      </ErrorBoundary>
    </Router>
  );
}



const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
