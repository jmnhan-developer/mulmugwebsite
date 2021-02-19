import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homescreen from './components/Homescreen.js';
import HomeScreenStudent from './components/HomeScreenStudent.js'
import HomeScreenParent from './components/HomeScreenParent.js'
import Mulmugplusabond from './components/Mulmugplusabond.js'
import Mulmugplusabonn from './components/Mulmugplusabonn.js'
import Mulmugpluscahiers from './components/Mulmugpluscahiers.js'
import QuiSommesNous from './components/QuiSommesNous.js'
import SignInScreen from './components/SignInScreen.js'
import SignUpScreenStudent from './components/SignUpScreenStudent.js'
import SignUpScreenParent from './components/SignUpScreenParent.js'
import Login from './components/LoginScreen'
import SignupStudent from './components/SignUpStudentScreen'
import MentionsLegales from './components/MentionsLegales.js'
import ReglesDeConfidentialite from './components/ReglesDeConfidentialite.js'

function App() {

  return (
    
    <Router>
      <Switch>
        <div style={{ width: "100%", justifyContent: "center" }}>
          <Route component={Homescreen} path="/" exact />
          <Route component={HomeScreenStudent} path="/homescreenstudent" exact />
          <Route component={HomeScreenParent} path="/homescreenparent" exact />
          <Route component={Mulmugplusabond} path="/mulmugplusabond" exact />
          <Route component={Mulmugplusabonn} path="/mulmugplusabonn" exact />
          <Route component={Mulmugpluscahiers} path="/mulmugpluscahiers" exact />
          <Route component={QuiSommesNous} path="/quisommesnous" exact />
          <Route component={SignInScreen} path="/signinscreen" exact />
          <Route component={SignUpScreenStudent} path="/signupscreenstudent" exact />
          <Route component={SignUpScreenParent} path="/signupscreenparent" exact />
          <Route component={Login} exact path="/login"/>
          <Route component={SignupStudent} exact path="/test"/>
          <Route component={MentionsLegales} path="/mentionslegales" exact />
          <Route component={ReglesDeConfidentialite} path="/reglesdeconfidentialite" exact />

        </div>
      </Switch>
    </Router>


  );
}

export default App;
