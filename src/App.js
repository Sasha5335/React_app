import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


const App = (props) => {
  return (
    <>
      <BrowserRouter>

        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>

        <Switch>
          <Route path='/contacts'>
            <Contacts />
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  );
}

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contacts = () => <div>Contacts</div>;
export default App;
