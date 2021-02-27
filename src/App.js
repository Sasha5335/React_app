import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import SignInAccaunt from './pages/SignInAccount';
import SignUpAccaunt from './pages/SignUpAccount';

const App = props => {
  return (
    <BrowserRouter>

      <Header />



      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-in' component={SignInAccaunt} />
        <Route path='/sign-up' component={SignUpAccaunt} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
