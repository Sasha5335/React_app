import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';


// async function loaderArr() {
//   return [1, '1', null, true];
// }

// async function resPromis() {
//   const res = await loaderArr();
//   console.log(res)
// }

// resPromis();

// async function resolve() {
//   const promisTimer = new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve('test')
//     }, 2000);
//   })

//   const data = await promisTimer
//   console.log(data)
// }

// resolve()


const App = props => {
  return (
    <BrowserRouter>

      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/todo' component={ToDoList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
