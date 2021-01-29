import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homescreen from './components/Homescreen.js';
import StudentNav from './components/StudentNav.js';
import StudentHomeScreen from './components/StudentHomeScreen'

function App() {
  return (

      <Router>
        <Switch>
          <div style={{ width: "100%", justifyContent: "center" }}>
            <Route component={Homescreen} path="/" exact />
            <Route component={StudentHomeScreen} path="/studenthomescreen" exact />
          </div>
        </Switch>
      </Router>


  );
}

export default App;