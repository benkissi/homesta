import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home/home-component'
import Nav from './components/Nav/nav-component'

import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
