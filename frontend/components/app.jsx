import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import WelcomeContainer from './welcome/welcome_container'


const App = () => (
    <div>
      <header>
        <h1>Welcome to AirCnC</h1>
        {/* <WelcomeContainer /> */}
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
);
  
export default App;