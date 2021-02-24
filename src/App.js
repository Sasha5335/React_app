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
          <Route exact path='/' component={Home} /> /*отрендерить только ОДИН компонент за раз*/
        </Switch>

        <Switch>
          <Route path='/about' component={About} /> /*отрендерить только ОДИН компонент за раз*/
        </Switch>

        <Switch>
          <Route path='/contacts'>
            <Contacts />  /*отрендерить несколько компонентов за раз*/
            <Adress />    /*отрендерить несколько компонентов за раз*/
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  );
}

const Home = () => <div>Home</div>;
const About = (props) => {
  console.log(props);
  setTimeout(() => {
    props.history.push('/')   //перенаправление на другую страницу по истечению 5 секунд
  }, 5000)
  return <div>About</div>;
}
const Contacts = () => <div>Contacts</div>;
const Adress = () => <div>Adress</div>;
export default App;
