import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homescreen from './components/Homescreen.js';
import StudentNav from './components/StudentNav.js';
import StudentHomeScreen from './components/StudentHomeScreen';
import Shop from './components/Shop';
import Login from './components/LoginScreen';


function App() {
  return (
    
      <Router>
        <Switch>
            <Route component={Shop} exact path="/shop" />
            <Route component={Homescreen} path="/" exact />
            <Route component={StudentHomeScreen} path="/studenthomescreen" exact />
            <Route component={Login} exact path="/login"/>
        </Switch>
      </Router>


  );
}

export default App;
