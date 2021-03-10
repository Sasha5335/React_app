import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Todo from './pages/Todo';

const App = props => {
  return (
    <BrowserRouter>

      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/todo' component={Todo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
