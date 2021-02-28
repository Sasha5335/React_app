import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import SignInAccount from './pages/SignInAccount';
import SignUpAccount from './pages/SignUpAccount';

const App = props => {
  return (
    <BrowserRouter>

      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-in' component={SignInAccount} />
        <Route path='/sign-up' component={SignUpAccount} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
