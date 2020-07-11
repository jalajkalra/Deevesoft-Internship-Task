import React from 'react';
import { Route } from 'react-router-dom';
import Login from './component/login/login';
import Registration from './component/registration/registration';
import HomePage from './component/homePage/home';

function App() {
  return (
    <div>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/registration" component={Registration}/>
    </div>
  );
}

export default App;
